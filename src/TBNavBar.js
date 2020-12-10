import {viewTypes} from './TempBerry'

export default function TBNavBar(props) {
  return (
    <div className="tbnavbar">
      <button className="tbnavbarbutton" onClick={(e) => props.setViewType(e.target.value)} value={viewTypes.day}>DayView</button>
      <button className="tbnavbarbutton" onClick={(e) => props.setViewType(e.target.value)} value={viewTypes.month}>MonthView</button>
      <button className="tbnavbarbutton" onClick={(e) => props.setViewType(e.target.value)} value={viewTypes.year}>YearView</button>
    </div>
  )
}