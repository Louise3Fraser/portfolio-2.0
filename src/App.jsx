import "./App.css";
import Image from "./components/Image";
import Folder from "./components/Folder";
import Nav from "./components/Nav";
import { content } from "./data/Content";
import { folders } from "./data/Folders";
import { useState, useRef, useEffect } from "react";
// import useSize from "./components/hooks/useSize";

const CATEGORIES = ["code", "art", "design", "writing", "misc"];
// const BASE = { width: 1440, height: 900 };

function App() {
  const [selectedCats, setSelectedCats] = useState(() => new Set(CATEGORIES));
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleCategory = (cat) => {
    setSelectedCats((prev) => {
      const next = new Set(prev);
      next.has(cat) ? next.delete(cat) : next.add(cat);
      return next;
    });
  };

  const inSelected = (item) => {
    const cat = item.category;
    if (!cat) return false;
    const has = (c) => selectedCats.has(String(c).toLowerCase());
    return Array.isArray(cat) ? cat.some(has) : has(cat);
  };

  const filteredContent = content.filter(inSelected);
  const filteredFolders = folders.filter(inSelected);

  const [canvasDimensions, setCanvasDimensions] = useState({
    width: 0,
    height: 0,
  });
  const canvasRef = useRef(null);

  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current) {
        setCanvasDimensions({
          width: canvasRef.current.clientWidth,
          height: canvasRef.current.clientHeight,
        });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="main grid-fade">
      <Nav selected={selectedCats} onSelect={toggleCategory} />

      <div ref={canvasRef} className="canvas">
        {filteredContent.map((item) => (
          <Image
            key={item.id}
            content={item}
            onDoubleClick={setSelectedItem}
            canvasWidth={canvasDimensions.width}
            canvasHeight={canvasDimensions.height}
          />
        ))}

        {filteredFolders.map((item) => (
          <Folder
            key={item.id}
            content={item}
            onDoubleClick={setSelectedItem}
            canvasWidth={canvasDimensions.width}
            canvasHeight={canvasDimensions.height}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
