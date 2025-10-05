import "../App.css";
import { useEffect, useState } from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import Marquee from "./Marquee";

function Status() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  return (
    <div className="container status">
      <div className="flex-h">
        <h2 className="title">Status: {isOnline ? "Online" : "Offline"}</h2>
        <div className="status-dot online" />
      </div>
      <Marquee>
        {[img1, img2, img3, img4, img5].map((src, i) => (
          <img className="ticker-img" src={src} alt="" key={i} />
        ))}
      </Marquee>
    </div>
  );
}

export default Status;
