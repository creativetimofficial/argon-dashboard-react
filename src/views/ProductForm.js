
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import ProductHeader from "components/ProductHeader.js";

const Profile = () => {
  return (
    <>
      <ProductHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          {/* <Col className="order-xl-2 mb-5 mb-xl-0" xl="4"> */}
          {/*   <Card className="card-profile shadow"> */}
          {/*     <Row className="justify-content-center"> */}
          {/*       <Col className="order-lg-2" lg="3"> */}
          {/*         <div className="card-profile-image"> */}
          {/*           <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
          {/*             <img */}
          {/*               alt="..." */}
          {/*               className="rounded-circle" */}
          {/*               src={require("../assets/img/theme/team-4-800x800.jpg")} */}
          {/*             /> */}
          {/*           </a> */}
          {/*         </div> */}
          {/*       </Col> */}
          {/*     </Row> */}
          {/*     <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"> */}
          {/*       <div className="d-flex justify-content-between"> */}
          {/*         <Button */}
          {/*           className="mr-4" */}
          {/*           color="info" */}
          {/*           href="#pablo" */}
          {/*           onClick={(e) => e.preventDefault()} */}
          {/*           size="sm" */}
          {/*         > */}
          {/*           Connect */}
          {/*         </Button> */}
          {/*         <Button */}
          {/*           className="float-right" */}
          {/*           color="default" */}
          {/*           href="#pablo" */}
          {/*           onClick={(e) => e.preventDefault()} */}
          {/*           size="sm" */}
          {/*         > */}
          {/*           Message */}
          {/*         </Button> */}
          {/*       </div> */}
          {/*     </CardHeader> */}
          {/*     <CardBody className="pt-0 pt-md-4"> */}
          {/*       <Row> */}
          {/*         <div className="col"> */}
          {/*           <div className="card-profile-stats d-flex justify-content-center mt-md-5"> */}
          {/*             <div> */}
          {/*               <span className="heading">22</span> */}
          {/*               <span className="description">Friends</span> */}
          {/*             </div> */}
          {/*             <div> */}
          {/*               <span className="heading">10</span> */}
          {/*               <span className="description">Photos</span> */}
          {/*             </div> */}
          {/*             <div> */}
          {/*               <span className="heading">89</span> */}
          {/*               <span className="description">Comments</span> */}
          {/*             </div> */}
          {/*           </div> */}
          {/*         </div> */}
          {/*       </Row> */}
          {/*       <div className="text-center"> */}
          {/*         <h3> */}
          {/*           Jessica Jones */}
          {/*           <span className="font-weight-light">, 27</span> */}
          {/*         </h3> */}
          {/*         <div className="h5 font-weight-300"> */}
          {/*           <i className="ni location_pin mr-2" /> */}
          {/*           Bucharest, Romania */}
          {/*         </div> */}
          {/*         <div className="h5 mt-4"> */}
          {/*           <i className="ni business_briefcase-24 mr-2" /> */}
          {/*           Solution Manager - Creative Tim Officer */}
          {/*         </div> */}
          {/*         <div> */}
          {/*           <i className="ni education_hat mr-2" /> */}
          {/*           University of Computer Science */}
          {/*         </div> */}
          {/*         <hr className="my-4" /> */}
          {/*         <p> */}
          {/*           Ryan — the name taken by Melbourne-raised, Brooklyn-based */}
          {/*           Nick Murphy — writes, performs and records all of his own */}
          {/*           music. */}
          {/*         </p> */}
          {/*         <a href="#pablo" onClick={(e) => e.preventDefault()}> */}
          {/*           Show more */}
          {/*         </a> */}
          {/*       </div> */}
          {/*     </CardBody> */}
          {/*   </Card> */}
          {/* </Col> */}
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Product Details</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    {/* <Button */}
                    {/*   color="primary" */}
                    {/*   href="#pablo" */}
                    {/*   onClick={(e) => e.preventDefault()} */}
                    {/*   size="sm" */}
                    {/* > */}
                    {/*   Settings */}
                    {/* </Button> */}
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    General Information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Product Type
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Fleece Jacket"
                            id="input-username"
                            placeholder="Fleece Jacket"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Color
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            placeholder="Yellow"
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            Image
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-first-name"
                            placeholder=""
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Price (CAD)
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="5"
                            id="input-last-name"
                            placeholder="5"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Details
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Description
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue=""
                            id="input-address"
                            placeholder=""
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            Time of Usage
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="1 Year"
                            id="input-city"
                            placeholder="1 Year"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country of Origin
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue="Canada"
                            id="input-country"
                            placeholder="Country"
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      {/* <Col lg="4"> */}
                      {/*   <FormGroup> */}
                      {/*     <label */}
                      {/*       className="form-control-label" */}
                      {/*       htmlFor="input-country" */}
                      {/*     > */}
                      {/*       Postal code */}
                      {/*     </label> */}
                      {/*     <Input */}
                      {/*       className="form-control-alternative" */}
                      {/*       id="input-postal-code" */}
                      {/*       placeholder="Postal code" */}
                      {/*       type="number" */}
                      {/*     /> */}
                      {/*   </FormGroup> */}
                      {/* </Col> */}
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About the Product</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>Additional Details</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about the product ..."
                        rows="4"
                        defaultValue=""
                        type="textarea"
                      />
                    </FormGroup>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
