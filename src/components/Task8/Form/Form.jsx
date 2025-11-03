import { useState } from "react";
import InputField from "../InputField/InputField";
import Checkbox from "../Checkbox/Checkbox";
import Button from "../Button/Button";
import "./Form.css";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    agree: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <h2>User Form</h2>

      <InputField
        label="Full Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Enter your name"
      />
      <InputField
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
      />

      <Checkbox
        label="I agree to the terms"
        checked={formData.agree}
        onChange={handleChange}
        name="agree"
      />

      <Button label="Submit" type="submit" />
    </form>
  );
};

export default Form;
