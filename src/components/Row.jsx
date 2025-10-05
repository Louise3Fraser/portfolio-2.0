import "../component-styles/Row.css";

export default function Row({ item }) {
  return (
    <div className="row">
      <div className="row-date">
        <p>{item.date_s}</p>
        <p> – </p>
        <p>{item.date_e}</p>
      </div>
      <h3>{item.title}</h3>
    </div>
  );
}
