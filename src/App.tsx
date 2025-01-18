import "./styles.css";
import DisplacementSphere from "./Components/DisplacementSphere";
import ProjectPage from "./Components/Project";

function App() {
  return (
    <>
      <DisplacementSphere />
      <div
        style={{
          zIndex: 10,
          position: "absolute", // Ensures stacking context is respected
          top: "50%", // Adjust position
          left: "50%",
          transform: "translate(-50%, -50%)", // Center the div
          width: "100vw", // Set a width for the scrollable container
          height: "100vh", // Set a height for the scrollable container
          overflowY: "auto", // Enable vertical scrolling
          overflowX: "hidden", // Disable horizontal scrolling
          fontSize: "24px",
          textAlign: "center",
          scrollbarWidth: "none", // Hide scrollbar for Firefox
        }}
      >
        <style>
          {`
          /* Hide scrollbar for Webkit browsers (Chrome, Safari) */
          div::-webkit-scrollbar {
            display: none;
          }
          `}
        </style>
        <ProjectPage />
      </div>
    </>
  );
}

export default App;
