import "./PersonCard.css";
import { useState } from "react";
import axios from "axios";

const PersonCard = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newSalary, setNewSalary] = useState("");
    const [newLocation, setNewLocation] = useState("");
    const [newDepartment, setNewDepartment] = useState("");
    const [newSkill, setNewSkill] = useState("");
    const [showSaved, setShowSaved] = useState(false);

    const handleSave = () => {
        const updatedFields = {};
        if (newSalary !== props.salary) updatedFields.salary = newSalary;
        if (newLocation !== props.location) updatedFields.location = newLocation;
        if (newDepartment !== props.department) updatedFields.department = newDepartment;
        if (newSkill !== props.skills.join(', ')) {
          updatedFields.skills = newSkill.split(',').map(s => s.trim());
        }
      
        axios.patch(`http://localhost:3001/employees/${props.id}`, updatedFields)
          .then(res => {
            props.onUpdate(res.data);
            setIsEditing(false);
            setShowSaved(true);
            setTimeout(() => setShowSaved(false), 1500);
          })
          .catch(err => console.error("Error updating:", err));
      };

    const handleCancel = () => {
        setIsEditing(false);
        setNewSalary("");
        setNewLocation("");
        setNewDepartment("");
        setNewSkill("");
    };

    const getYearsWorked = () => {
        const start = new Date(props.startDate);
        const now = new Date();

        let years = now.getFullYear() - start.getFullYear();
        const anniversary =
            now.getMonth() < start.getMonth() ||
            (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());

        if (anniversary) years -= 1;

        const monthsWorked = Math.round((now - start) / (1000 * 60 * 60 * 24 * 30.44));
        let message = "";

        if (years > 0 && years % 5 === 0) {
            message = "🎉 Schedule recognition meeting.";
        } else if (monthsWorked === 6) {
            message = "🔔 Schedule probation review.";
        }

        return `${years} year(s). (${monthsWorked} month.) ${message}`;
    };

    return (
        <main>
            <div className="card">
                <div className="pic"></div>
                <p><b>ID:</b> {props.id}</p>
                <p><b>Name:</b> {props.name}</p>
                <p><b>Occupation:</b> {props.occupation}</p>
                <p><b>Salary:</b> {props.salary}</p>
                <p><b>Phone:</b> {props.phone}</p>
                <p><b>Email:</b> {props.email}</p>
                <p><b>Pet:</b> {props.pet}</p>
                <p><b>Start date:</b> {props.startDate}</p>
                <p><b>Location:</b> {props.location}</p>
                <p><b>Department:</b> {props.department}</p>
                <p><b>Skills:</b> {props.skills.join(', ')}</p>
                <p><b>Years on board:</b> {getYearsWorked()}</p>

                {showSaved && <p className="confirmation">✅ Changes saved!</p>}

                {isEditing ? (
                    <div className="edit-form">
                        <input type="number" placeholder="salary" value={newSalary} onChange={(e) => setNewSalary(e.target.value)} />
                        <input type="text" placeholder="location" value={newLocation} onChange={(e) => setNewLocation(e.target.value)} />
                        <input type="text" placeholder="department" value={newDepartment} onChange={(e) => setNewDepartment(e.target.value)} />
                        <input type="text" placeholder="skills" value={newSkill} onChange={(e) => setNewSkill(e.target.value)} />

                        <button type="submit" onClick={handleSave}>Save</button>
                        <button type="button" onClick={handleCancel}>Cancel</button>
                    </div>
                ) : (
                    <button
                        type="button"
                        className="edit-button"
                        onClick={() => {
                            setNewSalary(props.salary);
                            setNewLocation(props.location);
                            setNewDepartment(props.department);
                            setNewSkill(props.skills.join(', '));
                            setIsEditing(true);
                        }}
                    >
                        Edit
                    </button>
                )}
            </div>
        </main>
    );
};

export default PersonCard;