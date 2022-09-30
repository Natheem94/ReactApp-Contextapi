import React, { useContext } from "react";
import { TeacherContext } from "../App";
import { useNavigate } from "react-router-dom";

import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Table from "react-bootstrap/Table";
import Badge from 'react-bootstrap/Badge';

function View() {
  let navigate = useNavigate();
  let context = useContext(TeacherContext);

  let stud_handleDelete = (i) => {
    let deleteFile = [...context.student];
    deleteFile.splice(i,1);
    context.setStudent(deleteFile)
  }
  let tech_handleDelete = (i) => {
    let deleteFile = [...context.teacher];
    deleteFile.splice(i,1);
    context.setTeacher(deleteFile)
  }

  return (
    <>
      <div className="mt-2">
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col sm={2}>
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
                  <Table striped bordered hover variant="dark" className="table-anime">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Action</th>                        
                      </tr>
                    </thead>
                    <tbody>
                      {context.teacher.map((e, i) => {
                        return (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.mobile}</td>
                            <td>
                              <button variant="outline-primary" onClick={()=>navigate(`/edit/${i}`)}>Edit</button>
                              &nbsp;
                              <button variant="danger" onClick={()=>{tech_handleDelete(i)}}>Delete</button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Table striped bordered hover variant="dark" className="table-anime">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Teacher</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {context.student.map((e, i) => {
                        return (
                          <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.mobile}</td>
                            <td>{e.teacher}</td>
                            <td>
                              <button variant="outline-primary">Edit</button>
                              &nbsp;
                              <button variant="danger" onClick={()=>{stud_handleDelete(i)}}>Delete</button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    </>
  );
}

export default View;
