const Activity = ({ name, startTime, endTime }) => {
    return (
        <div className="activity">
            <h3>{name}</h3>
            <p>{startTime}</p>
            <p>{endTime}</p>
        </div>
    )
}

export default Activity
