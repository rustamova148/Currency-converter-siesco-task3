import Select from "react-select";
import type { ConvertCurrencyProps } from "../types/types";
import { ClipLoader } from "react-spinners";

const ConvertCurrency = ({
    resultText,
    formData,
    setFormData,
    handleConvert,
    options,
    loading
}: ConvertCurrencyProps) => {
  return (
    <form onSubmit={handleConvert}>
      <input
        type="text"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={(e) =>
          setFormData((prev) => ({
            ...prev,
            amount: e.target.value,
          }))
        }
      />
      <div className="from-to-container">
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
              borderColor: state.isFocused ? "#d6d6d6;" : provided.borderColor,
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
      <i className="fa-solid fa-right-left change-btn"></i>
      <div>
        <label htmlFor="to">To</label>
        <Select
          id="to"
          value={options.find((option) => option.value === formData.to) || null}
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
              borderColor: state.isFocused ? "#d6d6d6;" : provided.borderColor,
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
      </div>
      <div className="exchange-rate-cont">
        <span>Exchange Rate</span>
        {loading ? <ClipLoader size={20} color="#ffffff" /> : <span>{resultText}</span>}
      </div>
      <button>
      {loading ? <ClipLoader size={20} color="#ffffff" /> : "Convert"}
      </button>
    </form>
  );
};

export default ConvertCurrency;
