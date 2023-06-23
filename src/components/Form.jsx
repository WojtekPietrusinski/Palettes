import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from "axios"

const Form = () => {
  // const [palette, setPalette] = useState({
  //   name: '',
  //   place: '',
  //   type: '',
  //   number: '',
  //   date: '',
  //   time: '',
  //   quantity: ''
  // })
  
  // const handleInput = (e) => {
    //   e.persist();
    //   setPalette({...palette, [e.target.name]: e.target.value})
    // }
    
    // const savePalette = (e) => {
      //   e.preventDeafult();
      
      //   const data = {
        //     name: palette.name,
        //     place: palette.place,
        //     type: palette.type,
        //     id: palette.id,
        //     date: palette.date,
  //     time: palette.time,
  //     quantity: palette.quantity
  //   }
  
  //   axios.post(``).then();
  
  // }
  
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
        await axios.post('/palettes/', {
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
      
        // console.log([
        //   name,
        //   place,
        //   type,
        //   id,
        //   date,
        //   time,
        //   quantity
        // ])
    }
  
  return (
    <div className="form">
      <Navbar/>   
      <div className="forms">
        <form>
          <div id="reportName">
            <label htmlFor="name">Report name</label> <br />
            <input id='name'  type='text' name="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder='E.g. packing'/>
          </div>
          
          <div id="areaName">
            <label htmlFor="place">Area name</label> <br />
            <input id='place' name="place" type='text' value={place} onChange={(e)=>setPlace(e.target.value)} placeholder='E.g. warehouse'/>
          </div>

          <div id="reportType">
            <label htmlFor="type">Report type</label> <br />
            <input id='type' name="type" type='text' value={type} onChange={(e)=>setType(e.target.value)} placeholder='E.g. malfunction'/>
          </div>

          <div id="reportID">
            <label htmlFor="numer">Report ID</label> <br />
            <input id='id' name="id" type='text' value={id} onChange={(e)=>setId(e.target.value)} placeholder=''/>
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
            <input id='quantity' name="quantity" type='text' value={quantity} onChange={(e)=>setQuantity(e.target.value)} placeholder=''/>
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
