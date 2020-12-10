import { Link } from "react-router-dom";

export default function Welcome() {
  return (
    <>
    <h1>Welcome</h1>
    <p>This React App is planned as a Dashboard for Data Visualization.<br></br>Don't be frustrated about Design, it‘s coming.</p>
    <Link to="/tempberry">TempBerry Dashboard</Link>
    
    </>
  )
};
