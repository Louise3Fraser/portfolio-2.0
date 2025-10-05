import "../component-styles/Carousel.css";

export default function Marquee({ children }) {
  return (
    <div className="marquee">
      <div className="marquee__track">
        <div className="marquee__set">{children}</div>
        <div className="marquee__set" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
