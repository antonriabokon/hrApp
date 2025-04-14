const PersonCard = (props) => {
    const getYearsWorked = () => {
        const start = new Date(props.startDate);
        const now = new Date();

        let years = now.getFullYear() - start.getFullYear();

        const anniversary =
            now.getMonth() < start.getMonth() ||
            (now.getMonth() === start.getMonth() && now.getDate() < start.getDate());

        if (anniversary) {
            years -= 1;
        }

        const monthsWorked = (now - start) / (1000 * 60 * 60 * 24 * 30.44);

        let message = "";
        if (years > 0 && years % 5 === 0) {
            message = "🎉 Schedule recognition meeting.";
        } else if (monthsWorked == 6) {
            message = "🔔 Schedule probation review.";
        }

        return `${years} years. ${monthsWorked} month. ${message}`;
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
            </div>
        </main>
    );
};

export default PersonCard;
