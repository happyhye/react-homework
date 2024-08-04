import { string, func, oneOf } from "prop-types";

function Button({ className, type, onClick, label }) {
  return (
    <button className={`button ${className}`} type={type} onClick={onClick}>
      {label}
    </button>
  );
}

// 속성 검사
Button.propTypes = {
  className: string.isRequired,
  type: oneOf(["button", "reset", "submit"]).isRequired,
  onClick: func.isRequired,
  label: string.isRequired,
};

export default Button;
