import { BrowserRouter, Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import Root from "./pages/Root";
import CardList from "./components/CardList";
import About from "./pages/About";
import AddPerson from "./pages/AddPerson";
import "./App.css";

const App = () => {
  const [employees, setEmployees] = useState([]);

  const handleUpdateEmployee = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
  };

  useEffect(() => {
    axios
      .get("http://localhost:3001/employees")
      .then((res) => {
        console.log("Fetched employees:", res.data);
        setEmployees(res.data);
      })
      .catch((error) =>
        console.error("Error fetching employees:", error)
      );
  }, []);

  const handleAddEmployee = (newEmployee) => {
    axios
      .post("http://localhost:3001/employees", newEmployee)
      .then((res) => setEmployees((prev) => [...prev, res.data]))
      .catch((error) =>
        console.error("Error adding employee:", error)
      );
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route
            index
            element={
              <CardList
                employees={employees}
                onUpdateEmployee={handleUpdateEmployee}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/add"
            element={
              <AddPerson onAddEmployee={handleAddEmployee} />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;