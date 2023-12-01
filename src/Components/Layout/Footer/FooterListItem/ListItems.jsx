import "./ListItems.scss";

export default function ListItems({ arr }) {
  return (
    <div className="listing-items">
      <ul>
        {arr.map((p, idx) => (
          <li key={idx + 1}>{p}</li>
        ))}
      </ul>
    </div>
  );
}
