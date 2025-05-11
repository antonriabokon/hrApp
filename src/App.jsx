import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import { persons } from "./data/cardBase";
import Root from "./pages/Root";
import CardList from "./components/CardList";
import About from "./pages/About";
import AddPerson from "./pages/AddPerson";
import "./App.css";

const App = () => {
  const [employees, setEmployees] = useState(persons);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          index: true,
          element: <CardList persons={employees} />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "add",
          element: (
            <AddPerson
              onAddEmployee={(newEmployee) =>
                setEmployees([...employees, newEmployee])
              }
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;