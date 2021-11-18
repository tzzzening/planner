import './App.css';
import Activity from './components/Activity';
import Header from './components/Header';
import AddActivity from './components/AddActivity';
import { useState } from 'react'

function App() {
  const [activities, setActivities ] = useState([
    {key: 1, name: "sleep", startTime: "0000", endTime: "0800"},
    {key: 2, name: "IE3105", startTime: "0800", endTime: "1000", description: "lecture 1 and 2"}
  ])


  const addActivity = (activity) => {
    setActivities([...activities, activity])
  }

  return (
    <div className="App">
      <Header />
      <AddActivity onAdd={addActivity}/>
      {activities.map(({ name, startTime, endTime, description }, index) => 
        <Activity key={index} name={name} startTime={startTime} endTime={endTime} description={description}/>)}
    </div>
  );
}

export default App;
