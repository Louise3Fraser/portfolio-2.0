import "../App.css";
import Row from "./Row";

const WORK = [
  {
    title: "The Random Gallery",
    date_s: "2025",
    date_e: "Now",
    desc: "full-stack React app for fostering creativity",
  },
  {
    title: "Liby Health",
    date_s: "2025",
    date_e: "Now",
    desc: "full-stack React app for fostering creativity",
  },
];
function Work() {
  return (
    <div className="container">
      <h2 className="title">Highlights</h2>
      <div className="line" />
      {WORK.map((item) => (
        <Row item={item} />
      ))}
    </div>
  );
}

export default Work;
