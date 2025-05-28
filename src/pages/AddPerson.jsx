import { useState } from "react";
import { useNavigate } from "react-router";
import styles from "./AddPerson.module.css";

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
    skills: "",
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
    setTimeout(() => navigate("/"), 1000);
  };

  return (
    <main className={styles.formWrapper}>
    <form onSubmit={handleSubmit} className={styles.form}>
          {Object.keys(formData).map((key) => (
        <div key={key} className={styles.formRow}>
          <label htmlFor={key} className={styles.label}>{key}:</label>
          <input
            type={
              key === "startDate"
                ? "date"
                : key === "salary" || key === "phone"
                ? "number"
                : "text"
            }
            id={key}
            name={key}
            className={styles.input}
            value={formData[key]}
            onChange={handleChange}
          />
        </div>
      ))}
            <button type="submit" className={styles.button}>Add Employee</button>
    </form>
  </main>
  );
};

export default AddPerson;