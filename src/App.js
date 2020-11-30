import axios from 'axios'
import { useEffect, useState } from 'react';
import { LineChart, Line, CartesianGrid, YAxis, XAxis, AreaChart, Area } from 'recharts'

function App() {
  const [dataObject, setDataObject] = useState(null)
  const [selectedDay, setSelectedDay] = useState(undefined)
  const [dayData, setDayData] = useState(undefined)

  // const arrayData = [
  //   {
  //     date: "201019101533",
  //     "temp": 20.5
  //   },
  //   {
  //     date: "201019152718",
  //     "temp": 20.799999237060547
  //   },
  //   {
  //     date: "201019194844",
  //     "temp": 21.5
  //   },
  //   {
  //     date: "201020221716",
  //     "temp": 22.399999618530273
  //   },
  //   {
  //     date: "201108082623",
  //     "temp": 20.299999237060547
  //   },
  //   {
  //     date: "201119020952",
  //     "temp": 20.399999618530273
  //   },
  //   {
  //     date: "201122180104",
  //     "temp": 21.299999237060547
  //   },
  //   {
  //     date: "201124224804",
  //     "temp": 20.299999237060547
  //   },
  //   {
  //     date: "201126193137",
  //     "temp": 21.200000762939453
  //   },
  //   {
  //     date: "201127075142",
  //     "temp": 20.299999237060547
  //   },
  //   {
  //     date: "201127110748",
  //     "temp": 20.899999618530273
  //   },
  //   {
  //     date: "201127164452",
  //     "temp": 20.899999618530273
  //   }
  // ]


  const getData = () => {
    axios.get('http://localhost:5000/private/logfile.json')
      .then(({ data }) => {
        const tempDataObject = {}
        let oldDay = 0

        for (const date of Object.keys(data)) {
          let day = date.slice(0, 6)
          let time = date.slice(6)
          let temperature = data[date].temp

          if (oldDay !== day) {

            oldDay = day
            tempDataObject[oldDay] = { [time]: temperature }

          } else {
            tempDataObject[oldDay][time] = temperature
          }
        }


        setDataObject(tempDataObject)
        // console.log(tempDataObject)

      })
  }


  const renderLineChart = (
    <>
      <AreaChart width={1400} height={600} data={dayData} style={{ border: "1px solid black" }}>
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ff0000" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#00d5ff" stopOpacity={0} />
          </linearGradient>
        </defs>
        {/* <Line type="monotone" dataKey="temp" stroke="#000000" /> */}
        <Area type="monotone" dataKey="temp" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />

        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="time" />
        <YAxis
          type="number"
          domain={['dataMin - 0.5', 'dataMax + 0.5']}
          interval={0}
          tickCount={20}
        />
      </AreaChart>

    </>
  )

  const selectNewDay = (event) => {
    const newDay = event.target.value
    setSelectedDay(newDay)

    const tempArray = []
    for (const time of Object.keys(dataObject[newDay])) {
      const temperature = dataObject[newDay][time]
      tempArray.push({ time: time, temp: temperature.toFixed(2) })
    }
    setDayData(tempArray)
  }


  const getDayOptions = () => {
    const dayOptions = []
    for (const day of Object.keys(dataObject)) {
      dayOptions.push(<option value={day}>{day}</option>)
    }

    return (
      dayOptions
    )
  }


  if (!selectedDay) {
    return (
      <>
        <button onClick={getData}>Get Data</button>
        <hr></hr>
        {dataObject
          ?
          <select onChange={selectNewDay}>
            {getDayOptions()}
          </select>
          : null}
        <h4>No Day selected</h4>
      </>
    )
  } else {
    // console.log(dayData)
    return (
      <>
        <button onClick={getData}>Get Data</button>
        <hr></hr>
        {dataObject
          ?
          <select onChange={selectNewDay}>
            {getDayOptions()}
          </select>
          : null}
        <hr></hr>
        <h4>Day: {selectedDay}</h4>
        {renderLineChart}
      </>
    );

  }

}

export default App;
