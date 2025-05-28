import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Root from "./pages/Root";
import CardList from "./components/CardList";
import About from "./pages/About";
import AddPerson from "./pages/AddPerson";
import useAxios from "./hooks/useAxios";
import "./App.css";

const App = () => {
  const [employees, setEmployees] = useState([]);
  const { get, post } = useAxios();

  useEffect(() => {
    const fetchData = get("/employees");
    const wait = new Promise((resolve) => setTimeout(resolve, 1000));

    Promise.all([fetchData, wait])
      .then(([res]) => {
        setEmployees(res.data);
      })
      .catch((err) => console.error("Error fetching employees:", err));
  }, []);

  const handleAddEmployee = (newEmployee) => {
    post("/employees", newEmployee)
      .then((res) => {
        setEmployees((prev) => [...prev, res.data]);
      })
      .catch((err) => console.error("Error adding employee:", err));
  };

  const handleUpdateEmployee = (updatedEmployee) => {
    setEmployees((prev) =>
      prev.map((emp) => (emp.id === updatedEmployee.id ? updatedEmployee : emp))
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
          <Route path="about" element={<About />} />
          <Route
            path="add"
            element={<AddPerson onAddEmployee={handleAddEmployee} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;