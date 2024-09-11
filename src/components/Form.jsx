import React, { useState } from 'react'
import axios from "axios"

const Form = () => {
  
    const [name, setName] = useState('')
    const [place, setPlace] = useState('')
    const [type, setType] = useState('')
    const [id, setId] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [quantity, setQuantity] = useState('')
  
    const handleClick = async (e) => {
      e.preventDefault()

      try {
        await axios.post('http://localhost:8800/api/pallets/test', {
          name,
          place,
          type,
          id,
          date,
          time,
          quantity
        })
      } catch (err){
        console.log(err)
      }
    }
  
  return (
    <div className="form">
      <div className="forms">
        <form>
          <div id="reportName">
            <label htmlFor="name">Report name</label> <br />
            <input id='name'  type='text' name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='What happened?'/>
          </div>
          
          <div id="areaName">
            <label htmlFor="place">Area name</label> <br />
            <input id='place' name="place" type='text' value={place} onChange={(e)=>setPlace(e.target.value)} placeholder='Where did it happen?'/>
          </div>

          <div id="reportType">
            <label htmlFor="type">Report type</label> <br />
            <input id='type' name="type" type='text' value={type} onChange={(e)=>setType(e.target.value)} placeholder='How to clasify it?'/>
          </div>

          <div id="reportID">
            <label htmlFor="numer">Report ID</label> <br />
            <input id='id' name="id" type='text' value={id} onChange={(e)=>setId(e.target.value)} placeholder='6-digits ID number '/>
          </div>
          
          <div id="reportDate">
            <label htmlFor="date">Report date</label> <br />
            <input id='date' type='datetime-local' name="date" value={date} onChange={(e)=>setDate(e.target.value)} placeholder='Date in YYYY-MM-DD'/>
          </div>
          
          <div id="reportTime">
            <label htmlFor="time">Report duration</label> <br />
            <input id='time' name="time" type='text' value={time} onChange={(e)=>setTime(e.target.value)} placeholder='Time in minutes'/>
          </div>

          <div id="reportQuantity">
            <label htmlFor="time">Report quantity</label> <br />
            <input id='quantity' name="quantity" type='text' value={quantity} onChange={(e)=>setQuantity(e.target.value)} placeholder='Number of reports'/>
          </div>

          <div id="submit">
            <button onClick={handleClick}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Form
