import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { TeacherContext } from "../App";

function Edit() {
    let context = useContext(TeacherContext);
    let params = useParams();
    let navigate = useNavigate();

    let [name, setName] = useState(context.teacher[params.id].name);
    let [email, setEmail] = useState(context.teacher[params.id].email);
    let [mobile, setMobile] = useState(context.teacher[params.id].mobile);

    let teach_handleSubmit = () => {
        let data = {
          name,
          email,
          mobile,
        };
        let dataSetting = [...context.teacher];
        dataSetting.splice(params.id,1,data)
        // dataSetting.push(data);
        context.setTeacher(dataSetting);
        navigate('/view')
      }; 

  return (
    <>
      <div className="d-flex justify-content-center p-3">
        <Form style={{ width: "100%" }}>
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Full Name"
              value={name}
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
              value={email}
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
              value={mobile}
              onChange={(e) => {
                setMobile(e.target.value);
              }}
            />
          </Form.Group>
          {/* <Form.Group
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
              {context.teacher.map((e, i) => {
                return (
                  <option key={i} value={e.name}>
                    {e.name}
                  </option>
                );
              })}
            </Form.Select>
          </Form.Group> */}
          <Button
            variant="primary"
            // style={{ display: props.data ? "none" : "block" }}
             onClick={() => teach_handleSubmit()}
          >
            Submit1
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Edit;
