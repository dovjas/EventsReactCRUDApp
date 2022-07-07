import './App.css';
import Axios from 'axios'
import {useState} from 'react';

function App() {

  const [title,setTitle] = useState('');
  const [location,setLocation] = useState('');
  const [date,setDate] = useState(new Date());
  const [price,setPrice] = useState(0);

  const addEvent = () =>{
    Axios.post('http://localhost:3000/create',{
      title:title,
      location:location,
      date:date,
      price:price,
    }).then(()=>{
      console.log('success')
    })
  };

  return (
    <div className='container'>
      <h2>Events data</h2>
      <div className='input-block'>
        <label>Event title:</label>
        <input type='text' onChange={(e)=>setTitle(e.target.value)}></input>
        <label>Event location:</label>
        <input type='text' onChange={(e)=>setLocation(e.target.value)}></input>
        <label>Event date:</label>
        <input type='date' onChange={(e)=>setDate(e.target.value)}></input>
        <label>Event price:</label>
        <input type='number' onChange={(e)=>setPrice(e.target.value)}></input>
      </div>
      <div className='buttons'>
        <button type='submit' className='add-btn' onClick={addEvent}>Add Event</button>
      </div>
    </div>
  );
}

export default App;
