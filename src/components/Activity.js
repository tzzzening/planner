const Activity = ({ name, startTime, endTime, description }) => {
    const time = startTime && (startTime + " - " + endTime)
    return (
        <div className="activity">
            <h3>{name} {time}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Activity
