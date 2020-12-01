import { useState } from 'react';
import ChartView from './ChartView';
import NavBar from './NavBar';

export const viewTypes = {
  day: "day",
  month: "month",
  year: "year"
}

function App() {
  const [viewType, setViewType] = useState(viewTypes.day)



  return (
    <>
      <NavBar setViewType={setViewType}/>
      <ChartView viewType={viewType}/>
    </>
  )

}

export default App;
