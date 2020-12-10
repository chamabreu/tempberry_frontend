import { Link } from "react-router-dom";

export default function Info() {

  const done = {textDecoration: "line-through", color: "gray"}

  return (
    <>
      <h1>TempBerry Project:</h1>
      <p>A Raspberry Pi Zero - connected with an Temperature and Humidity Sensor<br></br>Every 5 Minutes it shots the Temp and Hum to this Page with a Post-Request.<br></br>The Data is stored for now in a single <a target="_blank" rel="noreferrer" href={"https://api.tb.janmanuelbrenner.de/api/read"}>JSON file</a>.</p>
      <p>Under <Link to="/tempberry">TempBerry</Link> the Data is then visualized using <a href="https://recharts.org/" target="_blank" rel="noreferrer">Recharts</a>.</p>
      <h4>To Dos:</h4>
      <ul>
        <li style={done}>DayView</li>
        <li>MonthView</li>
        <li>YearView</li>
        <li>Zoom Option</li>
        <li>Visualize Moments when I lightened the fireside</li>
      </ul>
    </>
  )
};
