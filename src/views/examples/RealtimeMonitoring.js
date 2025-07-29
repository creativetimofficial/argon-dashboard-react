import { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Container,
  Row,
  Col,
  Alert,
  CardTitle,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Line, Bar } from "react-chartjs-2";
import classnames from "classnames";
import io from "socket.io-client";

const RealtimeMonitoring = () => {
  const [realtimeData, setRealtimeData] = useState({
    flow_pkts_s: 0,
    flow_byts_s: 0,
    tot_fwd_pkts: 0,
    tot_bwd_pkts: 0,
    max_mse: 0,
    abnormal_percentage: 0,
    mse_values: [],
    flow_pkts_s_history: [],
    flow_byts_s_history: [],
    attack_history: [],
  });
  const [alertData, setAlertData] = useState(null);
  const [socketConnected, setSocketConnected] = useState(false);
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data(index === 1 ? "data1" : "data2");
  };

  useEffect(() => {
    const socket = io("http://192.168.11.132:5000");

    socket.on("connect", () => {
      setSocketConnected(true);
      console.log("Connected to WebSocket server");
    });

    socket.on("connect_error", (error) => {
      console.error("WebSocket connection error:", error);
      setSocketConnected(false);
    });

    socket.on("realtime_data", (data) => {
      setRealtimeData({
        flow_pkts_s: data.flow_pkts_s || 0,
        flow_byts_s: data.flow_byts_s || 0,
        tot_fwd_pkts: data.tot_fwd_pkts || 0,
        tot_bwd_pkts: data.tot_bwd_pkts || 0,
        max_mse: data.max_mse || 0,
        abnormal_percentage: data.abnormal_percentage || 0,
        mse_values: data.mse_values || [],
        flow_pkts_s_history: data.flow_pkts_s_history || [],
        flow_byts_s_history: data.flow_byts_s_history || [],
        attack_history: data.attack_history || [],
      });
      if (!data.is_anomaly) {
        setAlertData(null);
      }
    });

    socket.on("alert", (data) => {
      setAlertData(data);
      setTimeout(() => {
        setAlertData((current) => (current === data ? null : current));
      }, 30000);
    });

    socket.on("disconnect", () => {
      setSocketConnected(false);
      console.log("Disconnected from WebSocket server");
      setAlertData(null);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const chartExample1 = {
    data1: {
      labels: (realtimeData.mse_values?.slice(-30) || []).map((_, index) => `p ${index + 1}`),
      datasets: [
        {
          label: "MSE Values",
          data: realtimeData.mse_values?.slice(-30) || [],
          fill: false,
          borderColor: "#ff0000",
          borderWidth: 2,
          tension: 0.6,
          pointRadius: 0,
        },
        {
          label: "Threshold",
          data: Array(Math.min(realtimeData.mse_values?.length || 0, 30)).fill(0.011),
          fill: false,
          borderColor: "#5e72e4",
          borderWidth: 2,
          borderDash: [5, 5],
          pointRadius: 0,
        },
      ],
    },
    data2: {
      labels: (realtimeData.mse_values?.slice(-7) || []).map((_, index) => `Point ${index + 1}`),
      datasets: [
        {
          label: "MSE Values",
          data: realtimeData.mse_values?.slice(-7) || [],
          fill: false,
          borderColor: "#ff0000",
          borderWidth: 2,
          tension: 0.6,
          pointRadius: 0,
        },
        {
          label: "Threshold",
          data: Array(Math.min(realtimeData.mse_values?.length || 0, 7)).fill(0.011),
          fill: false,
          borderColor: "#5e72e4",
          borderWidth: 2,
          borderDash: [5, 5],
          pointRadius: 0,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
          suggestedMax:
            Math.max(...(realtimeData.mse_values?.slice(-30) || [0])) * 1.2 || 0.02,
          title: {
            display: true,
            text: "MSE Value",
            color: "#fff",
          },
          ticks: {
            callback: function (value) {
              return value < 10 ? value?.toFixed(6) : value;
            },
          },
        },
        x: {
          title: {
            display: true,
            text: "Data Points",
            color: "#fff",
          },
        },
      },
      plugins: {
        legend: {
          labels: {
            color: "#fff",
          },
        },
      },
    },
  };

  const trafficChartData = {
    labels: (realtimeData.flow_pkts_s_history?.slice(-15) || []).map((_, index) => `T${index + 1}`),
    datasets: [
      {
        label: "Packets/s",
        data: realtimeData.flow_pkts_s_history?.slice(-15) || [],
        backgroundColor: "#2dce89",
        borderColor: "#2dce89",
        borderWidth: 1,
      },
      {
        label: "Bytes/s",
        data: realtimeData.flow_byts_s_history?.slice(-15) || [],
        backgroundColor: "#f5365c",
        borderColor: "#f5365c",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <Container className="mt--7" fluid>
        <Row>
          <Col xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Realtime Network Monitoring</h3>
              </CardHeader>
              <CardBody>
                {socketConnected ? (
                  <>
                    <Row className="mb-4">
                      <Col xl="3">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle
                                  tag="h5"
                                  className="text-uppercase text-muted mb-0"
                                >
                                  Packets/s
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                  {realtimeData.flow_pkts_s?.toFixed(2) || 0}
                                </span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                                  <i className="fas fa-tachometer-alt" />
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xl="3">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle
                                  tag="h5"
                                  className="text-uppercase text-muted mb-0"
                                >
                                  Bytes/s
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                  {realtimeData.flow_byts_s?.toFixed(2) || 0}
                                </span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                                  <i className="fas fa-chart-line" />
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xl="3">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle
                                  tag="h5"
                                  className="text-uppercase text-muted mb-0"
                                >
                                  Fwd Packets
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                  {realtimeData.tot_fwd_pkts || 0}
                                </span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                                  <i className="fas fa-arrow-up" />
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xl="3">
                        <Card className="card-stats">
                          <CardBody>
                            <Row>
                              <div className="col">
                                <CardTitle
                                  tag="h5"
                                  className="text-uppercase text-muted mb-0"
                                >
                                  Bwd Packets
                                </CardTitle>
                                <span className="h2 font-weight-bold mb-0">
                                  {realtimeData.tot_bwd_pkts || 0}
                                </span>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                  <i className="fas fa-arrow-down" />
                                </div>
                              </Col>
                            </Row>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Row className="mb-4">
                      <Col className="mb-5 mb-xl-0" xl="7">
                        <Card className="bg-gradient-default shadow">
                          <CardHeader className="bg-transparent">
                            <Row className="align-items-center">
                              <div className="col">
                                <h6 className="text-uppercase text-light ls-1 mb-1">
                                  MSE Overview
                                </h6>
                                <h2 className="text-white mb-0">MSE Value</h2>
                              </div>
                              <div className="col">
                                <Nav className="justify-content-end" pills>
                                  <NavItem>
                                    <NavLink
                                      className={classnames("py-2 px-3", {
                                        active: activeNav === 1,
                                      })}
                                      href="#pablo"
                                      onClick={(e) => toggleNavs(e, 1)}
                                    >
                                      <span className="d-none d-md-block">All Points</span>
                                      <span className="d-md-none">A</span>
                                    </NavLink>
                                  </NavItem>
                                  <NavItem>
                                    <NavLink
                                      className={classnames("py-2 px-3", {
                                        active: activeNav === 2,
                                      })}
                                      data-toggle="tab"
                                      href="#pablo"
                                      onClick={(e) => toggleNavs(e, 2)}
                                    >
                                      <span className="d-none d-md-block">Last 7 Points</span>
                                      <span className="d-md-none">7</span>
                                    </NavLink>
                                  </NavItem>
                                </Nav>
                              </div>
                            </Row>
                          </CardHeader>
                          <CardBody>
                            <div className="chart" style={{ maxHeight: "250px", overflow: "hidden" }}>
                              <Line
                                data={chartExample1[chartExample1Data]}
                                options={chartExample1.options}
                                getDatasetAtEvent={(e) => console.log(e)}
                                height={250}
                              />
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col xl="5">
                        <Card className="shadow">
                          <CardHeader className="bg-transparent">
                            <Row className="align-items-center">
                              <div className="col">
                                <h6 className="text-uppercase text-muted ls-1 mb-1">
                                  Performance
                                </h6>
                                <h2 className="mb-0">Traffic History</h2>
                              </div>
                            </Row>
                          </CardHeader>
                          <CardBody>
                            <div className="chart" style={{ maxHeight: "250px", overflow: "hidden" }}>
                              <Bar
                                data={trafficChartData}
                                options={{
                                  maintainAspectRatio: false,
                                  scales: {
                                    y: {
                                      beginAtZero: true,
                                    },
                                  },
                                  plugins: {
                                    legend: {
                                      labels: {
                                        color: "#333",
                                      },
                                    },
                                  },
                                }}
                                height={250}
                              />
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <Col xl="12">
                      {alertData ? (
                        <Alert color="danger" className="mt-4">
                          <h4>Alert: Attack Detected!</h4>
                          <p><strong>Timestamp:</strong> {alertData.timestamp || "N/A"}</p>
                          <p><strong>Prediction:</strong> {alertData.prediction || "Unknown"}</p>
                          <p><strong>Max MSE:</strong> {(alertData.max_mse || 0).toFixed(6)}</p>
                          <p>
                            <strong>Abnormal Percentage:</strong>{" "}
                            {(alertData.abnormal_percentage || 0).toFixed(2)}%
                          </p>
                          <p>
                            <strong>Duration Confirmed:</strong>{" "}
                            {alertData.duration_confirmed || 0} seconds
                          </p>
                          <p><strong>Details:</strong> {alertData.details || "No additional details"}</p>
                        </Alert>
                      ) : (
                        <Alert color="success" className="mt-4">
                          <h4>Status: Normal</h4>
                          <p>No anomalies detected in the network traffic.</p>
                          <p>
                            <strong>Current MSE:</strong> {(realtimeData.max_mse || 0).toFixed(6)}
                          </p>
                          <p>
                            <strong>Abnormal Percentage:</strong>{" "}
                            {(realtimeData.abnormal_percentage || 0).toFixed(2)}%
                          </p>
                        </Alert>
                      )}
                    </Col>
                    <Col xl="12" className="mt-4">
                      <Card className="shadow">
                        <CardHeader className="border-0">
                          <h3 className="mb-0">Attack History</h3>
                        </CardHeader>
                        <CardBody>
                          {realtimeData.attack_history.length > 0 ? (
                            <ul className="list-unstyled">
                              {realtimeData.attack_history.map((attack, index) => (
                                <li key={index} className="mb-2">
                                  <strong>{attack.timestamp}</strong>: {attack.prediction} 
                                  (MSE: {(attack.max_mse || 0).toFixed(6)}, 
                                  Abnormal: {(attack.abnormal_percentage || 0).toFixed(2)}%, 
                                  Duration: {attack.duration_confirmed || 0}s)
                                  <br />
                                  <small>{attack.details}</small>
                                </li>
                              ))}
                            </ul>
                          ) : (
                            <p>No attacks detected yet.</p>
                          )}
                        </CardBody>
                      </Card>
                    </Col>
                  </>
                ) : (
                  <Alert color="warning" className="mt-4 text-center">
                    Connecting to WebSocket server...
                  </Alert>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default RealtimeMonitoring;