import "../component-styles/Folder.css";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import folder from "../assets/folder.png";

export default function Folder({
  content,
  onDoubleClick,
  onDragEnd,
  canvasWidth,
  canvasHeight,
}) {
  const [isDragging, setIsDragging] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const x = (content.position.x / 100) * canvasWidth;
    const y = (content.position.y / 100) * canvasHeight;
    setPosition({ x, y });
  }, [content.position, canvasWidth, canvasHeight]);

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
      onDoubleClick={() => onDoubleClick(content)}
    >
      <img
        src={folder}
        alt={content.alt}
        className={`folder-img ${isDragging ? "dragging" : ""}`}
        draggable={false}
        onDragStart={(e) => e.preventDefault()}
      />
      {/* <h4 className="title">{content.title}</h4> */}
    </motion.div>
  );
}
