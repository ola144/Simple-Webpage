import "./InputField.css";

const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  name,
}) => {
  return (
    <div className="input-field">
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

export default InputField;
