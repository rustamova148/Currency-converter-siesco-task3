import "./App.css";
import Select from "react-select";
import { useState, useEffect } from "react";
import { getSupportedCurrency } from "./services/authService";
import {convertCurrency} from "./services/authService";

function App() {
  const [currencyCodes, setCurrencyCodes] = useState([]);
  const [resultText, setResultText] = useState("0.00");
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    amount: "",
    date: "",
  });
  
  const localeDateString = formData.date;
  if (localeDateString) {
    const utcDate = new Date(localeDateString + "T00:00:00Z");
    console.log(utcDate.toISOString());
  } else {
    console.log("Date is empty");
  }

  const fetchSupportedcurrency = async () => {
    try {
      const response = await getSupportedCurrency();
      setCurrencyCodes(response.currencyCodes);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchSupportedcurrency();
  }, []);

  const handleConvert = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
    try {
      const data = await convertCurrency({
        from: formData.from,
        to: formData.to,
        amount: Number(formData.amount),
        date: formData.date,
      });
      console.log(data);
      setResultText(`${formData.amount} ${formData.from} = ${data.convertedAmount} ${formData.to}`);
    } catch (error) {
      console.log("Xeta", error);
    }
  };

  const options = currencyCodes.map((cc) => ({
    value: cc,
    label: cc,
  }));

  return (
    <div className="app">
      <h1>Currency Converter</h1>
      <hr />
      <form onSubmit={handleConvert}>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={formData.date}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                date: e.target.value,
              }))
            }
          />
        </div>
        <input
          type="text"
          placeholder="Amount"
          value={formData.amount}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              amount: e.target.value,
            }))
          }
        />
        <div>
          <label htmlFor="from">From</label>
          <Select
            id="from"
            value={
              options.find((option) => option.value === formData.from) || null
            }
            options={options}
            onChange={(selectedOption) =>
              setFormData((prev) => ({
                ...prev,
                from: selectedOption ? selectedOption.value : "",
              }))
            }
            placeholder="Country"
            styles={{
              control: (provided, state) => ({
                ...provided,
                boxShadow: "none",
                borderColor: state.isFocused
                  ? "#d6d6d6;"
                  : provided.borderColor,
                "&:hover": {
                  borderColor: "#d6d6d6",
                },
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                color: "#2661F9",
                "&:hover": {
                  color: "#2661F9",
                },
              }),
            }}
          />
        </div>
        <div>
          <label htmlFor="to">To</label>
          <Select
            id="to"
            value={
              options.find((option) => option.value === formData.to) || null
            }
            options={options}
            onChange={(selectedOption) =>
              setFormData((prev) => ({
                ...prev,
                to: selectedOption ? selectedOption.value : "",
              }))
            }
            placeholder="Country"
            styles={{
              control: (provided, state) => ({
                ...provided,
                boxShadow: "none",
                borderColor: state.isFocused
                  ? "#d6d6d6;"
                  : provided.borderColor,
                "&:hover": {
                  borderColor: " #d6d6d6",
                },
              }),
              dropdownIndicator: (provided) => ({
                ...provided,
                color: "#2661F9",
                "&:hover": {
                  color: "#2661F9",
                },
              }),
            }}
          />
        </div>
        <div className="exchange-rate-cont">
          <span>Exchange Rate</span>
          <span>
            {resultText}
          </span>
        </div>
        <button>Convert</button>
      </form>
    </div>
  );
}

export default App;
