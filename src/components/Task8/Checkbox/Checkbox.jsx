import "./Checkbox.css";

const Checkbox = ({ label, checked, onChange, name }) => {
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        name={name}
      />
      <span>{label}</span>
    </label>
  );
};

export default Checkbox;
