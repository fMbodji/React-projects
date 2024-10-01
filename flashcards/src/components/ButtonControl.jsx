import React from "react";

const ButtonControl = ({ onClick, disabled, label, icon }) => {
  return (
    <button onClick={onClick} disabled={disabled} className="button-control">
      {icon && <span className="icon">{icon}</span>} {/* Render icon if provided */}
      {label}
    </button>
  );
};

export default ButtonControl;
