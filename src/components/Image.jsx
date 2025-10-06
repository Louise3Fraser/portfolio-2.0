import "../component-styles/Image.css";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Image({
  content,
  onDoubleClick,
  onDragEnd,
  canvasWidth,
  canvasHeight,
}) {
  const [isDragging, setIsDragging] = useState(false);
  const hasFrame = !!content.bg;

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const x = (content.position.x / 100) * canvasWidth;
    const y = (content.position.y / 100) * canvasHeight;
    setPosition({ x, y });
  }, [content.position, canvasWidth, canvasHeight]);

  const frameStyle = hasFrame
    ? {
        // background: "#fff",
        padding: "0px",
        transition: "box-shadow 0.25s ease, transform 0.25s ease",
        // boxShadow: isDragging
        //   ? "0px 3px 10px rgba(0, 0, 0, 0.2)"
        //   : "0px 1.08px 4px rgba(0, 0, 0, 0.35)",
      }
    : {
        background: "transparent",
        padding: 0,
        boxShadow: "none",
      };

  const imgStyle = {
    width: content.width,
    transition: "filter 0.25s ease",
    filter: hasFrame
      ? "none"
      : isDragging
      ? "drop-shadow(0 2px 1px rgba(0,0,0,0.15)) drop-shadow(0 6px 14px rgba(0,0,0,0.35))"
      : "drop-shadow(0 1px 0.5px rgba(0,0,0,0.1)) drop-shadow(0 3px 6px rgba(0,0,0,0.22))",
  };

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      animate={{ x: position.x, y: position.y }}
      className="absolute select-none"
      style={{ touchAction: "none", cursor: isDragging ? "grabbing" : "grab" }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={(e, info) => {
        setIsDragging(false);
        if (onDragEnd) {
          onDragEnd(project.id, { x: info.point.x, y: info.point.y });
        }
      }}
    >
      <div className="image" onDoubleClick={() => onDoubleClick(content)}>
        <div className="frame" style={frameStyle}>
          <img
            src={content.src}
            alt={content.alt}
            className="img"
            style={imgStyle}
            draggable={false}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
        {/* <h4 className="title">{content.title}</h4> */}
      </div>
    </motion.div>
  );
}
