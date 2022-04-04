const Button = ({ disabled, label }) => {
  return (
    <button disabled={disabled} className="btn btn-primary">
      {label}
    </button>
  );
};

export default Button;
