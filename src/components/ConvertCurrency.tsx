import Select from "react-select";
import type { ConvertCurrencyProps } from "../types/types";

const ConvertCurrency = ({
    resultText,
    formData,
    setFormData,
    handleConvert,
    options
}: ConvertCurrencyProps) => {
  return (
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
      <div className="exchange-rate-cont">
        <span>Exchange Rate</span>
        <span>{resultText}</span>
      </div>
      <button>Convert</button>
    </form>
  );
};

export default ConvertCurrency;
