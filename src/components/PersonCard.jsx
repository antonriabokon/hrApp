import styles from "./PersonCard.module.css";
import { useState } from "react";
import PersonEditForm from "./PersonEditForm";
import useAxios from "../hooks/useAxios";

const PersonCard = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showSaved, setShowSaved] = useState(false);
  const { patch } = useAxios();
  const [isExpanded, setIsExpanded] = useState(false);

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
    <>
      {!isExpanded ? (
        <div className={styles.cardPreview} onClick={() => setIsExpanded(true)}>
          <p><b>Name:</b> {props.name}</p>
          <p><b>Occupation:</b> {props.occupation}</p>
        </div>
      ) : (
        <div className={styles.modalOverlay}>
            <div className={styles.cardExpanded}>
              <div className={styles.pic}></div>
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
              <p><b>Skills:</b> {props.skills.join(", ")}</p>
              <p><b>Years on board:</b> {getYearsWorked()}</p>

              {showSaved && <p className={styles.confirmation}>✅ Changes saved!</p>}

              {isEditing ? (
                <PersonEditForm
                  initialValues={{
                    salary: props.salary,
                    location: props.location,
                    department: props.department,
                    skills: props.skills,
                  }}
                  onCancel={() => {
                    setIsEditing(false);
                    setIsExpanded(false);
                  }}
                  onSave={(updatedFields) => {
                    patch(`/employees/${props.id}`, updatedFields)
                      .then((res) => {
                        props.onUpdate(res.data);
                        setIsEditing(false);
                        setShowSaved(true);
                        setTimeout(() => setShowSaved(false), 1500);
                      })
                      .catch((err) => console.error("Error updating:", err));
                  }}
                />
              ) : (
                <div className={styles.buttonGroup}>
                  <button
                    type="button"
                    className={styles.editButton}
                    onClick={() => setIsEditing(true)}
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    className={styles.cancelButton}
                    onClick={() => setIsExpanded(false)}
                  >
                    Cancel
                  </button>
                </div>
              )}
            </div>
        </div>
      )}
    </>
  );
};

export default PersonCard;
