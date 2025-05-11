import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AddPerson.css";

const AddPerson = ({ onAddEmployee }) => {
  const [formData, setFormData] = useState({
    name: "",
    occupation: "",
    salary: "",
    phone: "",
    email: "",
    pet: "",
    startDate: "",
    location: "",
    department: "",
    skills: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEmployee = {
      ...formData,
      id: Date.now(),
      skills: formData.skills.split(",").map((skill) => skill.trim()),
    };

    onAddEmployee(newEmployee);
    navigate("/");
  };

  return (
    <main className="form-wrapper">
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => (
          <div key={key} className="form-row">
            <label htmlFor={key}>{key}:</label>
            <input
              type="text"
              id={key}
              name={key}
              value={formData[key]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Add Employee</button>
      </form>
    </main>
  );
};

export default AddPerson;