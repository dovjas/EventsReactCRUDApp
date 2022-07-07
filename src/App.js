import './App.css';

function App() {
  return (
    <div className='container'>
      <h2>Events data</h2>
      <div className='input-block'>
        <label>Event title:</label>
        <input type='text'></input>
        <label>Event location:</label>
        <input type='text'></input>
        <label>Event date:</label>
        <input type='date'></input>
        <label>Event price:</label>
        <input type='number'></input>
      </div>
      <div className='buttons'>
        <button type='submit' className='add-btn'>Add Event</button>
      </div>
    </div>
  );
}

export default App;
