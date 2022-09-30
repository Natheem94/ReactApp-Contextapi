import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { TeacherContext } from "../App";

function InputForm(props) {
  let navigate = useNavigate()
  let context = useContext(TeacherContext);

  let [name, setName] =  useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [teacher, setTeacher] = useState("");

  let teach_handleSubmit = () => {
    let data = {
      name,
      email,
      mobile,
    };
    let dataSetting = [...context.teacher];
    dataSetting.push(data);
    context.setTeacher(dataSetting);
    navigate('/view')
  };

  let stud_handleSubmit = () => {
    let data = {
      name,
      email,
      mobile,
      teacher,
    };
    let dataSetting = [...context.student];
    dataSetting.push(data);
    context.setStudent(dataSetting);
    navigate('/view')
  };

  return (
    <>
      <div className="d-flex justify-content-center p-3">
        <Form style={{ width: "100%" }} id="inputform">
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email Id</Form.Label>
            <Form.Control
              type="email"
              placeholder="Email Id"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Mobile No</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Mobile No"
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            style={{ display: props.data ? "block" : "none" }}
          >
            <Form.Label>Disabled select menu</Form.Label>
            <Form.Select
              onChange={(e) => {
                setTeacher(e.target.value);
              }}
            >
              <option>Select a Teacher</option>
              {
                context.teacher.map((e,i) => {
                    return (
                    <option key={i} value={e.name}>{e.name}</option>)
                })
              }
            </Form.Select>
          </Form.Group>
          <Button
            variant="primary"
            style={{ display: props.data ? "none" : "block" }}
            onClick={() => teach_handleSubmit()}
          >
            Submit1
          </Button>
          <Button
            variant="primary"
            style={{ display: props.data ? "block" : "none" }}
            onClick={() => stud_handleSubmit()}
          >
            Submit2
          </Button>
        </Form>
      </div>
    </>
  );
}

export default InputForm;
