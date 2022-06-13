import { useState } from "react";
import "./styles.css";
import { worldEvents } from "./data";

/*
  Timeline is created using a <hr /> that has a capped width using css. Timeline dates are 
  scaled in 25 year intervals and displayed using a absolute/relative positions. Click on an
  time event will reveal the event and date of the event. Clicking on it again will remove it. Clicking
  on another event will hide the current event and reveal the new event.

  Clicking on an event will update the state showTimePointIndex which will determine which point to be displayed.
  Each point is created using css in a <span> tag. Positioning within the timeline is used by position absolute/relative
  where each event point has a absolute position, and eventContainer position is set to relative. 
*/

export default function App() {
  const [showTimePointIndex, setShowTimePointIndex] = useState(-1);
  const timelineMarkers = [1900, 1925, 1950, 1975, 2000];

  return (
    <div className="App">
      <h1>20th Century Timeline</h1>
      <div className="timelineContainer">
        <hr className="line" />
        <div className="eventContainer">
          {/* Event points and dates. Position is accuraltly scaled on the timeline. */}
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
                    backgroundColor: "grey",
                    border: "3px solid grey",
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

          {/* Timeline dates in 25 year intervals*/}
          {timelineMarkers.map((time, index) => (
            <div>
              <span
                style={{
                  backgroundColor: "black",
                  border: "1px solid black",
                  position: "absolute",
                  top: -22,
                  left: index * 250,
                  right: 0,
                  width: 0,
                  height: 25,
                  zIndex: 90
                }}
              />
              <span
                style={{
                  position: "absolute",
                  top: 0,
                  left: index * 250 - 16,
                  right: 0,
                  width: 0,
                  marginTop: 7
                }}
              >
                {time}{" "}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
