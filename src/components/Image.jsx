import "../component-styles/Image.css";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Image({ content, onDoubleClick, onDragEnd }) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      initial={{ x: content.position.x, y: content.position.y }}
      className="absolute select-none"
      style={{
        touchAction: "none",
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={(e, info) => {
        setIsDragging(false);
        onDragEnd?.(content.id, { x: info.point.x, y: info.point.y });
      }}
    >
      <div className="image" onDoubleClick={() => onDoubleClick(content)}>
        <div
          className="frame"
          style={{
            boxShadow: isDragging
              ? "0px 3px 10px rgba(0, 0, 0, 0.5)"
              : "0px 1.08px 4.42px rgba(0, 0, 0, 0.45)",
          }}
        >
          <img
            src={content.src}
            alt={content.alt}
            className="img"
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
        <h4 className="title">{content.title}</h4>
      </div>
    </motion.div>
  );
}
