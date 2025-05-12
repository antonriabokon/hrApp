import { createBrowserRouter, RouterProvider } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import Root from "./pages/Root";
import CardList from "./components/CardList";
import About from "./pages/About";
import AddPerson from "./pages/AddPerson";
import "./App.css";

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/employees")
      .then((res) => setEmployees(res.data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <CardList persons={employees} />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/add",
          element: (
            <AddPerson
              onAddEmployee={(newEmployee) => {
                axios
                  .post("http://localhost:3001/employees", newEmployee)
                  .then((res) => setEmployees([...employees, res.data]))
                  .catch((err) => console.error("Error adding employee:", err));
              }}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;