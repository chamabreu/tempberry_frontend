import { Link } from "react-router-dom";

export default function GlobalNavBar() {
  return (
    <>
      <div className="globalnavbar">
        <Link to="/" className="glnavbarbutton">
          <div>Home</div>
        </Link>
        <Link to="/tempberry" className="glnavbarbutton">
          <div>TempBerry</div>
        </Link>
        <Link to="/info" className="glnavbarbutton">
          <div>Info</div>
        </Link>

      </div>
    </>
  )
};
