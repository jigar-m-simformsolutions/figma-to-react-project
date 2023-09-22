import "./OutlinedButton.scss";

function OutlineButton({ children, onClick, className, block }) {
  return (
    <button
      className={`outlined__btn ${className} ${block & "w-full"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default OutlineButton;
