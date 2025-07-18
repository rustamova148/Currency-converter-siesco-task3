import './App.css'

function App() {

  return (
    <div className="app">
      <h1>Currency Converter</h1>
      <hr/>
      <form>
       <input type="text" placeholder="Amount" />
       <label htmlFor="from">From</label>
       <select id="from">
        <option value="" disabled selected hidden className="option1">
          Country
        </option>
        <option></option>
       </select>
       <label htmlFor="to">To</label>
       <select id="to">
        <option value="" disabled selected hidden className="option1">
          Country
        </option>
        <option></option>
       </select>
       <div className="exchange-rate-cont">
        <span>Exchange Rate</span>
        <span>0.00</span>
       </div>
       <button>Convert</button>
      </form>
    </div>
  )
}

export default App
