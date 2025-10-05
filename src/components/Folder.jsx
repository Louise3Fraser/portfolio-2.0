import "../component-styles/Folder.css";
import { useState } from "react";
import { motion } from "framer-motion";
import folder from "../assets/folder.png";

export default function Folder({ content, onDoubleClick, onDragEnd }) {
  const [isDragging, setIsDragging] = useState(false);

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragElastic={0}
      initial={{ x: content.position.x, y: content.position.y }}
      className="absolute select-none"
      style={{ touchAction: "none", cursor: isDragging ? "grabbing" : "grab" }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={(e, info) => {
        setIsDragging(false);
        onDragEnd?.(content.id, { x: info.point.x, y: info.point.y });
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
      <h4 className="title">{content.title}</h4>
    </motion.div>
  );
}
