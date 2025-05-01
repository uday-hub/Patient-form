import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "./App.css";
import patient_form_logo from "./assets/patient-form-logo.png";
import { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import person from "./assets/person.jpg";
import edit_icon from "./assets/edit_icon.svg";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function GridComplexExample() {
  const [formData, setFormData] = useState({
    full_name: "",
    mob_number: "",
    address: "",
    medication_taking: "",
    allergies: "",
    alcohol_consume: "",
  });

  const [submittedForm, setSubmittedForm] = useState(null);
  const [isEditing, setIsEditing] = useState(false); // set flag to ensure that we are editing the data.

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.full_name.trim() ||
      !formData.mob_number.trim() ||
      !formData.address.trim() ||
      !formData.medication_taking.trim() ||
      !formData.allergies.trim() ||
      !formData.alcohol_consume.trim() ||
      formData.alcohol_consume === "Please select..."
    ) {
      toast.error("Please fill in all fields before submitting.");
      return;
    }
    setSubmittedForm(formData);

    // Show success toast
    toast.success(
      isEditing ? "Data updated successfully!" : "Data submitted successfully!"
    );

    // Reset Form
    setFormData({
      full_name: "",
      mob_number: "",
      address: "",
      medication_taking: "",
      allergies: "",
      alcohol_consume: "",
    });

    setIsEditing(false);
  };

  const handleEdit = () => {
    setFormData(submittedForm);
    setIsEditing(true);
  };

  return (
    <>
      <div className="patient-form">
        <div className="container">
          <div className="row">
            <div className="col-9">
              <Form className="form-main" action="" onSubmit={handleSubmit}>
                <div className="top-heading-content">
                  <h3 className="patient-form-heading">
                    New Patient Registration Form
                  </h3>
                  <img
                    src={patient_form_logo}
                    className="patient-form-logo"
                    alt=""
                  />
                  <span>Are you a new patient? Please register here</span>
                </div>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>Patient's Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="Enter Full Name"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="number"
                      name="mob_number"
                      value={formData.mob_number}
                      onChange={handleChange}
                      placeholder="### ### ####"
                    />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Patient's Address</Form.Label>
                  <Form.Control
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="1234 Main St"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>
                    Please list any medication you are currently taking:
                  </Form.Label>
                  <Form.Control
                    name="medication_taking"
                    value={formData.medication_taking}
                    onChange={handleChange}
                    placeholder="List medicine"
                  />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>Please list any allergies:</Form.Label>
                    <Form.Control
                      name="allergies"
                      value={formData.allergies}
                      onChange={handleChange}
                      placeholder="Allergies list"
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Do you consume alcohol?</Form.Label>
                    <Form.Select
                      defaultValue="Choose..."
                      value={formData.alcohol_consume}
                      onChange={handleChange}
                      name="alcohol_consume"
                    >
                      <option>Please select...</option>
                      <option>Never</option>
                      <option>Daily</option>
                      <option>Once a week</option>
                      <option>Once a month</option>
                      <option>Once a year</option>
                    </Form.Select>
                  </Form.Group>
                </Row>

                <div className="btn-main-div">
                  <Button variant="primary" className="form-btn" type="submit">
                    {isEditing ? "Update Form" : "Submit Form"}
                  </Button>
                </div>
              </Form>
            </div>

            <div className="col-3">
              <div className="row">
                <div className="col-12">
                  {submittedForm && (
                    <Card className="card" style={{ width: "" }}>
                      <Card.Img
                        variant="top"
                        className="edit-icon"
                        src={edit_icon}
                        onClick={handleEdit}
                      />
                      <Card.Img variant="top" src={person} />

                      <ListGroup className="list-group-flush">
                        <ListGroup.Item>
                          Name : <strong>{submittedForm.full_name}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Phone Number :{" "}
                          <strong>{submittedForm.mob_number}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Address : <strong>{submittedForm.address}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Medication List :{" "}
                          <strong>{submittedForm.medication_taking}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Allergies : <strong>{submittedForm.allergies}</strong>
                        </ListGroup.Item>
                        <ListGroup.Item>
                          Alcohol Consume ? :{" "}
                          <strong>{submittedForm.alcohol_consume}</strong>
                        </ListGroup.Item>
                      </ListGroup>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <ToastContainer />
      </div>
    </>
  );
}

export default GridComplexExample;
