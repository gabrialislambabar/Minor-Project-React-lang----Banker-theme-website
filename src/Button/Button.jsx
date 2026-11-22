function Button({
  label,
  children,
  type = "button",
  style: customStyle,
  onClick,
  className = "",
}) {
  const defaultStyle = {
    color: "#ffffff",
    backgroundColor: "#0284c7",
    padding: "10px 24px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "0.95rem",
    transition: "background-color 0.2s ease, transform 0.1s ease",
    ...customStyle,
  };

  return (
    <button
      type={type}
      style={defaultStyle}
      onClick={onClick}
      className={`btn-banker ${className}`}
    >
      {children || label || "Get Started"}
    </button>
  );
}

export default Button;
