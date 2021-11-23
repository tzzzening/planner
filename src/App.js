import './App.css';
import Activity from './components/Activity';
import Header from './components/Header';
import AddActivity from './components/AddActivity';
import { useState } from 'react'

function App() {
  const [activities, setActivities] = useState([
    {id: 0, name: "sleep", startTime: "0000", endTime: "0800"},
    {id: 1, name: "IE3105", startTime: "0800", endTime: "1000", description: "lecture 1 and 2"}
  ])

  const [showAddButton, setShowAddButton] = useState(false)

  const addActivity = (activity) => {
    setActivities([...activities, activity])
  }

  const deleteActivity = (id) => {
    setActivities(activities.filter((activity) => {
      console.log("activity id", activity.id, "id", id)
      console.log(activities)
      return activity.id !== id
    }))
  }

  return (
    <div className="App">
      <Header />
      <button onClick={() => setShowAddButton(!showAddButton)} style={{backgroundColor: showAddButton ? 'red' : 'lightgreen'}}>{showAddButton ? "Collapse" : "Add Activity"}</button>
      {showAddButton && <AddActivity onAdd={addActivity} id={activities.length}/>}
      {activities.map(({ id, name, startTime, endTime, description }, index) => {
        console.log(index)
        return <Activity key={index} id={id} name={name} startTime={startTime} endTime={endTime} description={description} onDelete={deleteActivity}/>
      })}
    </div>
  );
}

export default App;
