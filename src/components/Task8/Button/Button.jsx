import "./Button.css";

const Button = ({ label, onClick, type = "button", className = "" }) => {
  return (
    <button type={type} onClick={onClick} className={`btn ${className}`}>
      {label}
    </button>
  );
};

export default Button;
