import { useState } from "react";
import "./styles.css";
import { worldEvents } from "./data";

export default function App() {
  const [showTimePointIndex, setShowTimePointIndex] = useState(-1);
  const timelineMarkers = [1900, 1925, 1950, 1975, 2000];

  return (
    <div className="App">
      <h1>20th Century Timeline</h1>
      <div className="timelineContainer">
        <hr className="line" />
        <div className="eventContainer">
          {worldEvents.map((event, index) => {
            const eventScale = ((event.year - 1900) / 100) * 1000;
            return (
              <div className="event">
                <div
                  style={{
                    position: "absolute",
                    top: -60,
                    left: eventScale - 143
                  }}
                >
                  {showTimePointIndex === index && (
                    <div className="eventTooltipContainer">
                      <span>{event.description}</span>
                      <span>{event.year}</span>
                    </div>
                  )}
                </div>
                <span
                  style={{
                    backgroundColor: "#e17b77",
                    border: "3px solid #e17b77",
                    borderRadius: "50%",
                    position: "absolute",
                    top: -18,
                    left: eventScale,
                    right: 0,
                    width: 10,
                    height: 10,
                    zIndex: 100
                  }}
                  onClick={() => {
                    if (showTimePointIndex === index) {
                      setShowTimePointIndex(-1);
                    } else {
                      setShowTimePointIndex(index);
                    }
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
