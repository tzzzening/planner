import { useState } from 'react'

const AddActivity = ({ onAdd, id }) => {
    const [name, setName] = useState('')
    const [startTime, setStartTime] = useState('')
    const [endTime, setEndTime] = useState('')
    const [description, setDescription] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!name) {
            alert('Please add activity name')
            return
        }
       
        onAdd({ id, name, startTime, endTime, description })

        setName('')
        setStartTime('')
        setEndTime('')
        setDescription('')
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Activity</label>
                <input type='text' placeholder='Add activity' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <label>Start time</label>
                <input type='number' placeholder='Add starting time' value={startTime} onChange={(e) => setStartTime(e.target.value)}/>
            </div>
            <div>
                <label>End time</label>
                <input type='number' placeholder='Add ending time' value={endTime} onChange={(e) => setEndTime(e.target.value)}/>
            </div>
            <div>
                <label>Description</label>
                <input type='text' placeholder='Add description' value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <input type='submit' value='Add Activity' />
        </form>
    )
}

export default AddActivity
