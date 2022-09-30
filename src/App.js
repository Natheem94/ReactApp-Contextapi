import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Components/NavigationBar";
import Create from "./Components/Create";
import View from "./Components/View";
import Edit from "./Components/Edit";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";

export const TeacherContext = React.createContext();

function App() {
  let [teacher, setTeacher] = useState([]);
  let [student, setStudent] = useState([]);

  return (
    <>
      {/* <NavigationBar /> */}
      {/* <Home /> */}
      <BrowserRouter>
        <NavigationBar />
        <TeacherContext.Provider
          value={{ teacher, setTeacher, student, setStudent }}
        >
          <Routes>
            <Route path="*" element={<View />} />
            <Route path="create" element={<Create />} />
            <Route path="view" element={<View />} />
            <Route path="edit/:id" element={<Edit />} />
          </Routes>
        </TeacherContext.Provider>
      </BrowserRouter>
      {/* <div>{teacher}</div> */}
    </>
  );
}

export default App;
