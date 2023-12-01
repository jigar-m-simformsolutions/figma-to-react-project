import "./Divider.scss";

export default function Divider({ children }) {
  return (
    <div className="divider-container">
      <div className="divider-border-one"></div>
      <div className="divider-text">{children}</div>
      <div className="divider-border-two"></div>
    </div>
  );
}
