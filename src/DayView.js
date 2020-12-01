import { useEffect, useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';


export default function DayView(props) {
  const [allDayObjects, setAllDayObjects] = useState(undefined)
  /* EXAMPLE OF allDayObjects:

  {
    date: [
      {
        time: time,
        temp: temperature,
        hum: humidity
      },
      {
        time: time,
        temp: temperature,
        hum: humidity
      },
      {...}
    ],

    date: [
      {
        time: time,
        temp: temperature,
        hum: humidity
      },
      {
        time: time,
        temp: temperature,
        hum: humidity
      },
      {...}
    ],

    ...

  }


   */



  const [selectedDay, setSelectedDay] = useState(undefined)

  const setDayObjects = () => {
    const dayObjects = {}
    let oldDay = 0

    for (const dateTimeStamp of Object.keys(props.data)) {
      let day = dateTimeStamp.slice(0, 6)
      let time = dateTimeStamp.slice(6)
      let temperature = props.data[dateTimeStamp].temp
      let hum = props.data[dateTimeStamp].hum

      if (oldDay !== day) {

        oldDay = day
        dayObjects[oldDay] = [{ time: transformTime(time), temp: temperature.toFixed(1), hum: hum.toFixed(1) }]

      } else {
        dayObjects[oldDay].push({ time: transformTime(time), temp: temperature.toFixed(1), hum: hum.toFixed(1) })
      }
    }

    setAllDayObjects(dayObjects)
  }


  useEffect(() => {
    setDayObjects()
  }, [])


  const transformDate = (date) => {
    const year = date.toString().slice(0, 2)
    const month = date.toString().slice(2, 4)
    const day = date.toString().slice(4, 6)
    return `${day}.${month}.${year}`
  }

  const transformTime = (time) => {
    const hour = time.toString().slice(0, 2)
    const minute = time.toString().slice(2, 4)
    return `${hour}:${minute} Uhr`
  }


  if (!selectedDay && allDayObjects) {
    return (
      <div className="dayviewbox">
        <div className="dayviewcontrols">
          <select onChange={e => setSelectedDay(e.target.value)}>
            <option disabled selected value="selectDay">Select Day</option>
            {Object.keys(allDayObjects).map(date => {
              return (
                <option value={date}>{transformDate(date)}</option>
              )
            })}
          </select>
        </div>
      </div>
    )
  } else if (allDayObjects) {
    return (
      <div className="dayviewbox">
        <div className="dayviewcontrols">
          <select onChange={e => setSelectedDay(e.target.value)}>
            <option disabled selected value="selectDay">Select Day</option>
            {Object.keys(allDayObjects).map(date => {
              return (
                <option value={date}>{transformDate(date)}</option>
              )
            })}
          </select>
        </div>
        <div className="dayviewchart">
          <div className="timeline">
            <div className="timestamp">~ 0:00 Uhr</div>
            <div className="timestamp">~ 6:00 Uhr</div>
            <div className="timestamp">~ 12:00 Uhr</div>
            <div className="timestamp">~ 18:00 Uhr</div>
            <div className="timestamp">~ 24:00 Uhr</div>
          </div>
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <LineChart
              data={allDayObjects[selectedDay]}
              margin={{
                top: 20, right: 10, left: 10, bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                hide={true}
              />
              <YAxis
                yAxisId="left"
                type="number"
                domain={[18, 25]}
                interval={0}
                tickCount={16}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                type="number"
                domain={[20, 60]}
                interval={0}
                tickCount={30}
              />
              <Tooltip />
              <Legend />
              <Line yAxisId="left" type="monotone" dataKey="temp" stroke="#ff0000" dot={false} />
              <Line yAxisId="right" type="monotone" dataKey="hum" stroke="#0000ff" dot={false} />
            </LineChart>

          </ResponsiveContainer>
        </div>
      </div>
    )
  } else {
    return (
      <>Loading Data</>
    )
  }
};
