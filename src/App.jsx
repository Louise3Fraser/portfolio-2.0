import "./App.css";
import Image from "./components/Image";
import Folder from "./components/Folder";
import { content } from "./data/Content";
import { folders } from "./data/Folders";
import { useState } from "react";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredContent = selectedCategory
    ? content.filter((c) => c.category === selectedCategory)
    : content;

  return (
    <div className="main grid-fade">
      {filteredContent.map((item) => (
        <Image key={item.id} content={item} onDoubleClick={setSelectedItem} />
      ))}
      {folders.map((item) => (
        <Folder key={item.id} content={item} onDoubleClick={setSelectedItem} />
      ))}
    </div>
  );
}

export default App;
