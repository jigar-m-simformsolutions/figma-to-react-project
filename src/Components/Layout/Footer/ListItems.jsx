export default function ListItems({ arr }) {
  return (
    <ul className="listing__items">
      {arr.map((p) => (
        <li key={p.toUpperCase()}>{p}</li>
      ))}
    </ul>
  );
}
