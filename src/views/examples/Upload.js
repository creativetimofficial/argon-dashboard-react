import { useState, useRef } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Form,
  FormGroup,
  Input,
  Alert,
  Container,
  Row,
  Col,
  // Spinner,
} from "reactstrap";
// react plugin for charts
import { Line, Bar } from "react-chartjs-2";
// chart options
import { chartOptions } from "variables/charts.js";
import { uploadPcap } from "api/authApi";

const Upload = () => {
  const [pcapData, setPcapData] = useState(null);
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const file = fileInputRef.current.files[0];
    if (!file) {
      setError("Please select a PCAP file");
      return;
    }

    setLoading(true);
    setError(null);
    setMessage(null);
    setPcapData(null);

    try {
      const response = await uploadPcap(file);
      setPcapData(response);
      setMessage(response.message);
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.message ||
        "An unexpected error occurred during upload"
      );
    } finally {
      setLoading(false);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file.name); // Hiển thị tên file khi chọn
    } else {
      setSelectedFile(null); // Xóa tên file nếu không chọn
    }
  };

  // Dữ liệu cho biểu đồ Line (mse_values) với đường cong mượt mà
  const mseChartData = {
    labels: pcapData
      ? pcapData.mse_values?.map((_, index) => `Point ${index + 1}`)
      : [],
    datasets: [
      {
        label: "MSE Values",
        data: pcapData ? pcapData.mse_values : [],
        fill: false,
        borderColor: "#5e72e4",
        borderWidth: 2,
        tension: 0.6, // Tạo đường cong mượt mà
        pointRadius: 0, // Loại bỏ các chấm
      },
    ],
  };

  // Dữ liệu cho biểu đồ Bar (normal/abnormal percentage)
  const percentageChartData = {
    labels: ["Normal Traffic", "Attack Traffic"],
    datasets: [
      {
        label: "Traffic Percentage",
        data: pcapData
          ? [pcapData.normal_percentage, pcapData.abnormal_percentage]
          : [0, 0],
        backgroundColor: ["#2dce89", "#f5365c"],
        borderColor: ["#2dce89", "#f5365c"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <div className="header pb-8 pt-4 pt-md-7" style={{ background: 'linear-gradient(87deg, #F1F2B5 -20%, #135058 100%)' }}>
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Upload Status
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {message ? "Success" : loading ? "Processing" : "Ready"}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-upload" />
                        </div>
                      </Col>
                    </Row>
                    <p className="mt-3 mb-0 text-muted text-sm">
                      {message && <span className="text-success">Completed</span>}
                      {loading && <span className="text-info">In Progress</span>}
                      {!message && !loading && (
                        <span className="text-muted">Awaiting Upload</span>
                      )}
                    </p>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
      <Container className="mt--7" fluid>
        <Row className="justify-content-center">
          <Col xl="12">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0 text-center">Upload PCAP File</h3>
              </CardHeader>
              <CardBody className="p-3">
                <Form onSubmit={handleFileUpload}>
                  <Row className="justify-content-center">
                    <Col lg="6" className="text-center">
                      <FormGroup>
                        <Input
                          type="file"
                          accept=".pcap"
                          innerRef={fileInputRef}
                          className="d-none"
                          onChange={handleFileChange} // Xử lý khi chọn file
                        />
                        {selectedFile ? (
                            <div className="mt-2 mb-4" role="alert">
                              Selected File: {selectedFile}
                            </div>
                          ) : (
                            <Button
                              color="primary"
                              size="lg"
                              className="px-5 mb-3"
                              onClick={handleUploadClick}
                              disabled={loading}
                            >
                              <i className="fas fa-upload mr-2" />
                              Upload
                            </Button>
                          )}
                          {selectedFile && (
                            <Button
                              color="primary"
                              size="lg"
                              className="px-5"
                              type="submit"
                              disabled={loading}
                            >
                              {loading ? "Analyzing..." : "Upload and Analyze"}
                            </Button>
                          )}
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
                {error && (
                  <Alert color="danger" className="mt-4 text-center">
                    {error}
                  </Alert>
                )}
                {pcapData && !loading && (
                  <Row className="mt-5">
                    <Col lg="6" xl="3">
                      <Card className="card-stats mb-4">
                        <CardBody>
                          <Row>
                            <div className="col">
                              <CardTitle
                                tag="h5"
                                className="text-uppercase text-muted mb-0"
                              >
                                Prediction
                              </CardTitle>
                              <span className="h2 font-weight-bold mb-0">
                                {pcapData.prediction}
                              </span>
                            </div>
                            <Col className="col-auto">
                              <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                                <i className="fas fa-shield-alt" />
                              </div>
                            </Col>
                          </Row>
                          <p className="mt-3 mb-0 text-muted text-sm">
                            <span className="text-nowrap">Result</span>
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6" xl="3">
                      <Card className="card-stats mb-4">
                        <CardBody>
                          <Row>
                            <div className="col">
                              <CardTitle
                                tag="h5"
                                className="text-uppercase text-muted mb-0"
                              >
                                Normal Traffic
                              </CardTitle>
                              <span className="h2 font-weight-bold mb-0">
                                {pcapData.normal_percentage}%
                              </span>
                            </div>
                            <Col className="col-auto">
                              <div className="icon icon-shape bg-success text-white rounded-circle shadow">
                                <i className="fas fa-check-circle" />
                              </div>
                            </Col>
                          </Row>
                          <p className="mt-3 mb-0 text-muted text-sm">
                            <span className="text-nowrap">Percentage</span>
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6" xl="3">
                      <Card className="card-stats mb-4">
                        <CardBody>
                          <Row>
                            <div className="col">
                              <CardTitle
                                tag="h5"
                                className="text-uppercase text-muted mb-0"
                              >
                                Attack Traffic
                              </CardTitle>
                              <span className="h2 font-weight-bold mb-0">
                                {pcapData.abnormal_percentage}%
                              </span>
                            </div>
                            <Col className="col-auto">
                              <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                                <i className="fas fa-exclamation-triangle" />
                              </div>
                            </Col>
                          </Row>
                          <p className="mt-3 mb-0 text-muted text-sm">
                            <span className="text-nowrap">Percentage</span>
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6" xl="3">
                      <Card className="card-stats mb-4">
                        <CardBody>
                          <Row>
                            <div className="col">
                              <CardTitle
                                tag="h5"
                                className="text-uppercase text-muted mb-0"
                              >
                                Mean MSE
                              </CardTitle>
                              <span className="h2 font-weight-bold mb-0">
                                {pcapData.mean_mse}
                              </span>
                            </div>
                            <Col className="col-auto">
                              <div className="icon icon-shape bg-primary text-white rounded-circle shadow">
                                <i className="fas fa-chart-line" />
                              </div>
                            </Col>
                          </Row>
                          <p className="mt-3 mb-0 text-muted text-sm">
                            <span className="text-nowrap">Average</span>
                          </p>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                )}
              </CardBody>
            </Card>
          </Col>
        </Row>
        {pcapData && !loading && (
          <Row className="mt-5">
            <Col xl="6">
              <Card className="bg-gradient-default shadow">
                <CardHeader className="bg-transparent">
                  <h2 className="text-white mb-0">MSE Values Over Time</h2>
                </CardHeader>
                <CardBody>
                  <div className="chart">
                    <Line
                      data={mseChartData}
                      options={{
                        ...chartOptions,
                        scales: {
                          y: {
                            beginAtZero: true,
                            suggestedMax: Math.max(...(pcapData?.mse_values || [0])) * 1.2, // Điều chỉnh max dựa trên dữ liệu thực tế
                            title: {
                              display: true,
                              text: "MSE Value",
                              color: "#fff",
                            },
                            ticks: {
                              callback: function (value) {
                                return value < 10 ? value.toFixed(6) : value; // Hiển thị 6 chữ số thập phân cho giá trị nhỏ
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
                      }}
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xl="6">
              <Card className="shadow">
                <CardHeader className="bg-transparent">
                  <h2 className="mb-0">Traffic Distribution</h2>
                </CardHeader>
                <CardBody>
                  <div className="chart">
                    <Bar
                      data={percentageChartData}
                      options={{
                        ...chartOptions,
                        scales: {
                          y: {
                            beginAtZero: true,
                            max: 100,
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
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
};

export default Upload;