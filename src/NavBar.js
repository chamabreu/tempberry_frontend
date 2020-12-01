import {viewTypes} from './App'

export default function NavBar(props) {
  return (
    <div className="navbar">
      <button className="navbarbutton" onClick={(e) => props.setViewType(e.target.value)} value={viewTypes.day}>DayView</button>
      <button className="navbarbutton" onClick={(e) => props.setViewType(e.target.value)} value={viewTypes.month}>MonthView</button>
      <button className="navbarbutton" onClick={(e) => props.setViewType(e.target.value)} value={viewTypes.year}>YearView</button>
    </div>
  )
}