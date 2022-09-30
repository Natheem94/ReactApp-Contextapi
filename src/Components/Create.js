import React,{useContext} from "react";
import InputForm from "../Components/InputForm";
import { TeacherContext } from "../App";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Badge from 'react-bootstrap/Badge';

let stud_toggle = true
let teah_toggle = false

function Create() {
  let context = useContext(TeacherContext);
  return (
    <>
    <div className="mt-2">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
        <Row>
          <Col sm={2} >
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first" href="#" className="fs-5 fw-bold">
                  Teachers{' '}
                  <Badge bg="secondary">{context.teacher.length}</Badge>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second" href="#" className="fs-5 fw-bold">
                  Students{' '}
                  <Badge bg="secondary">{context.student.length}</Badge>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={9}>
            <Tab.Content>
              <Tab.Pane eventKey="first">
                <InputForm data={teah_toggle} />
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <InputForm data={stud_toggle}/>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </div>
    </>
  );
}

export default Create;
