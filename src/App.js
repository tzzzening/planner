import './App.css';
import Activity from './components/Activity';

function App() {
  const activities = [
    {name: "sleep", startTime: "0000", endTime: "0800"},
    {name: "IE3105", startTime: "0800", endTime: "1000"}
  ]

  return (
    <div className="App">
      {activities.map(({ name, startTime, endTime}) => 
        <Activity name={name} startTime={startTime} endTime={endTime}/>)}
    </div>
  );
}

export default App;
