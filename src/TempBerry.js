import { useState } from "react";
import ChartView from "./ChartView";
import TBNavBar from "./TBNavBar";


export const viewTypes = {
  day: "day",
  month: "month",
  year: "year"
}



export default function TempBerry(params) {
  const [viewType, setViewType] = useState(viewTypes.day)



  return (
    <>
      <TBNavBar setViewType={setViewType}/>
      <ChartView viewType={viewType} />

    </>
  )
};
