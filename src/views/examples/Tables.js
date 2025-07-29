import { useState, useEffect } from "react";
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  Alert,
} from "reactstrap";
import Header from "components/Headers/Header.js";
import axiosInstance from '../../api/axios';

const Tables = () => {
  const [detectData, setDetectData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [perPage] = useState(20);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetectData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axiosInstance.get(`/api/detect?page=${currentPage}&per_page=${perPage}`);
        console.log("API Response:", response.data);
        const data = response.data || [];
        let responseTotal = response.total || 0;
        setTotalItems(responseTotal);
        
        // Sửa lại cách tính totalPages
        let calculatedTotalPages = response.totalPages;
        setDetectData(Array.isArray(data) ? data : []);
        setTotalPages(calculatedTotalPages);
      } catch (error) {
        console.error("Error fetching detect data:", error);
        setError("Failed to fetch data. Please try again later.");
        setDetectData([]);
      } finally {
        setLoading(false);
      }
    };
    fetchDetectData();
  }, [currentPage, perPage]);

  const getProgressBarColor = (index) => {
    const colors = ["bg-danger", "bg-success", "bg-danger", "bg-info"];
    return colors[index % colors.length];
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages && page !== currentPage) {
      console.log("Changing to page:", page);
      setCurrentPage(page);
    }
  };

  // Tạo array các số trang để hiển thị
  const getPaginationItems = () => {
    const items = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Nếu tổng số trang ít, hiển thị tất cả
      for (let i = 1; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      // Nếu nhiều trang, hiển thị thông minh
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
      
      if (endPage - startPage < maxVisiblePages - 1) {
        startPage = Math.max(1, endPage - maxVisiblePages + 1);
      }
      
      for (let i = startPage; i <= endPage; i++) {
        items.push(i);
      }
    }
    
    return items;
  };

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        {error && (
          <Alert color="danger" className="mb-4">
            {error}
          </Alert>
        )}
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">Detection History</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Timestamp</th>
                    <th scope="col">Attack Type</th>
                    <th scope="col">Abnormal Percent</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="6">Loading...</td>
                    </tr>
                  ) : detectData.length > 0 ? (
                    detectData.map((item, index) => (
                      <tr key={index}>
                        <th scope="row">{(currentPage - 1) * perPage + index + 1}</th>
                        <td>{item.timestamp || item.timeStamp || 'N/A'}</td>
                        <td>{item.type_attack || item.typeAttack || 'Unknown'}</td>
                        <td>
                          <div className="d-flex align-items-center">
                            <span className="mr-2">{(item.abnormal_percent || item.abNormarPercent || 0).toFixed(2)}%</span>
                            <div>
                              <Progress
                                max="100"
                                value={item.abnormal_percent || item.abNormarPercent || 0}
                                barClassName={getProgressBarColor(index)}
                              />
                            </div>
                          </div>
                        </td>
                        <td>
                          <Badge color="" className="badge-dot mr-4">
                            <i className={(item.abnormal_percent || item.abNormarPercent || 0) > 50 ? "bg-danger" : "bg-success"} />
                            {(item.abnormal_percent || item.abNormarPercent || 0) > 50 ? "High Risk" : "Normal"}
                          </Badge>
                        </td>
                        <td className="text-right">
                          <UncontrolledDropdown>
                            <DropdownToggle
                              className="btn-icon-only text-light"
                              role="button"
                              size="sm"
                              color=""
                              onClick={(e) => e.preventDefault()}
                            >
                              <i className="fas fa-ellipsis-v" />
                            </DropdownToggle>
                            <DropdownMenu className="dropdown-menu-arrow" right>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Another action
                              </DropdownItem>
                              <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Something else here
                              </DropdownItem>
                            </DropdownMenu>
                          </UncontrolledDropdown>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="6">No data available</td>
                    </tr>
                  )}
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="Pagination">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    {/* Nút Previous */}
                    <PaginationItem disabled={currentPage <= 1}>
                      <PaginationLink
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage - 1);
                        }}
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    
                    {/* Các số trang */}
                    {getPaginationItems().map((page) => (
                      <PaginationItem key={page} active={currentPage === page}>
                        <PaginationLink
                          onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(page);
                          }}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}
                    
                    {/* Nút Next */}
                    <PaginationItem disabled={currentPage >= totalPages}>
                      <PaginationLink
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          handlePageChange(currentPage + 1);
                        }}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
                
                {/* Thêm thông tin debug */}
                <div className="mt-2 text-muted small">
                  Page {currentPage} of {totalPages} | Total items: {totalItems}
                </div>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Tables;