import "./App.css";
import { useState, useEffect } from "react";
import { getSupportedCurrency } from "./services/currencyService";
import {convertCurrency} from "./services/currencyService";
import ConvertCurrency from "./components/ConvertCurrency";

function App() {
  const [currencyCodes, setCurrencyCodes] = useState([]);
  const [resultText, setResultText] = useState("0.00");
  const [formData, setFormData] = useState({
    from: "",
    to: "",
    amount: "",
  });
  const [loading, setLoading] = useState(false);

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
  setLoading(true);
    try {
      const data = await convertCurrency({
        from: formData.from,
        to: formData.to,
        amount: Number(formData.amount),
      });
      setResultText(`${formData.amount} ${formData.from} = ${data.convertedAmount} ${formData.to}`);
    } catch (error) {
      console.log("Xeta", error);
    } finally {
      setLoading(false);
    }
  };

  const options = currencyCodes.map((cc) => ({
    value: cc,
    label: cc,
  }));

  return (
    <div className="app">
      <div className="overlay"></div>
      <div className="content">
      <h1>Currency Converter</h1>
      <hr />
      <ConvertCurrency 
      resultText={resultText}
      formData={formData}
      setFormData={setFormData}
      handleConvert={handleConvert}
      options={options}
      loading={loading}
      />
      </div>
    </div>
  );
}

export default App;
