import { useState } from "react";

useState;
const Form = ({ formData }) => {
  const [formInfo, setFormInfo] = useState({
    finance_type: "invoice",
    to_from: "",
    details: "",
    amount: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    formData(formInfo);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setFormInfo({ ...formInfo, [e.target.name]: value });
  };

  return (
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="field">
          <label>Type:</label>
          <select
            id="type"
            name="finance_type"
            onChange={handleChange}
            value={formInfo.finance_type}
          >
            <option value="invoice">Invoice</option>
            <option value="payment">Payment</option>
          </select>
        </div>
        <div className="field">
          <label>To / From:</label>
          <input
            type="text"
            id="tofrom"
            value={formInfo.to_from}
            name="to_from"
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Details:</label>
          <input
            type="text"
            id="details"
            name="details"
            value={formInfo.details}
            onChange={handleChange}
          />
        </div>
        <div className="field">
          <label>Amount ($):</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formInfo.amount}
            onChange={handleChange}
          />
        </div>
        <button>Add</button>
      </form>
    </>
  );
};

export default Form;
