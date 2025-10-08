import unselected from "../assets/unselected.png";
import selectedi from "../assets/selected.png";
import "../component-styles/Nav.css";

const CATEGORIES = ["misc", "code", "art", "design", "writing"];

export default function Nav({ selected, onSelect }) {
  return (
    <nav className="nav" aria-label="Categories" aria-multiselectable="true">
      <h1>
        Louise B Fraser{" "}
        {/* <span className="grey">
          is an engineer &designer
        </span> */}
      </h1>
      <p>
        This site is a personal archive of software, hardware, <br />
        thoughts, and things, created to share with anyone <br />
        curious enough to click around.{" "}
      </p>
      {/* <ul>
        {CATEGORIES.map((cat) => {
          const isActive = selected.has(cat);
          return (
            <li key={cat}>
              <button
                className="button"
                onClick={() => onSelect(cat)}
                aria-pressed={isActive}
              >
                <img
                  className="nav-dot-img"
                  src={isActive ? selectedi : unselected}
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                />
                <h3>{cat.charAt(0).toUpperCase() + cat.slice(1)}</h3>
              </button>
            </li>
          );
        })}
      </ul> */}
    </nav>
  );
}
