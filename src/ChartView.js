import axios from 'axios';
import { useEffect, useState } from 'react';

import { viewTypes } from './App'
import DayView from './DayView';

export default function ChartView(props) {
  const [rawJsonData, setRawJsonData] = useState(undefined)
  


  const getData = () => {
    axios.get('/read')
      .then(({ data }) => {
        setRawJsonData(data)
      })
  }








  useEffect(() => {
    getData()
  }, [])

  if (rawJsonData) {
    switch (props.viewType) {
      case viewTypes.day:
        
        return (
          <DayView data={rawJsonData}/>
        )
      case viewTypes.month:
        return (
          <p>monthview</p>
        )
      case viewTypes.year:
        return (
          <p>yearview</p>
        )
      default:
        return (
          <p>No View selected</p>
        )
    }
  }else {
    return(
      <>Loading Data from Server</>
    )
  }




}