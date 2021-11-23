import { FaTrash } from "react-icons/fa";

const Activity = ({ id, name, startTime, endTime, description, onDelete }) => {
    const time = startTime && (startTime + " - " + endTime)
    return (
        <div className="activity">
            <h3>{name} {time}</h3>
            <FaTrash onClick={() => onDelete(id)}/>
            <p>{description}</p>
        </div>
    )
}

export default Activity
