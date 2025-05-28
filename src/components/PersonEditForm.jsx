import { useState } from "react";
import styles from "./PersonEditForm.module.css";


const PersonEditForm = ({ initialValues, onCancel, onSave }) => {
  const [newSalary, setNewSalary] = useState(initialValues.salary);
  const [newLocation, setNewLocation] = useState(initialValues.location);
  const [newDepartment, setNewDepartment] = useState(initialValues.department);
  const [newSkill, setNewSkill] = useState(initialValues.skills.join(', '));

  const handleSubmit = () => {
    const updatedFields = {};

    if (newSalary !== initialValues.salary) updatedFields.salary = Number(newSalary);
    if (newLocation !== initialValues.location) updatedFields.location = newLocation;
    if (newDepartment !== initialValues.department) updatedFields.department = newDepartment;
    if (newSkill !== initialValues.skills.join(', ')) {
      updatedFields.skills = newSkill.split(',').map((s) => s.trim());
    }

    onSave(updatedFields);
  };

  return (
    <div className={styles.editForm}>
      <input type="number" placeholder="salary" value={newSalary} onChange={(e) => setNewSalary(e.target.value)} />
      <input type="text" placeholder="location" value={newLocation} onChange={(e) => setNewLocation(e.target.value)} />
      <input type="text" placeholder="department" value={newDepartment} onChange={(e) => setNewDepartment(e.target.value)} />
      <input type="text" placeholder="skills" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} />

      <button type="submit" className={styles.saveButton} onClick={handleSubmit}>Save</button>
      <button type="button" className={styles.cancelButton} onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default PersonEditForm;