import "./Button.scss";

const Button = ({ children, block, onClick, icon, className }) => {
  return (
    <button
      className={`custom__btn ${className} ${block && "w-full"}`}
      onClick={onClick}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
