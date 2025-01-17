import "./styles.css";
import DisplacementSphere from "./Components/DisplacementSphere";
import ProjectPage from "./Components/Project";

// function App() {
//   return (
//     <>
//       <DisplacementSphere />
//       <div
//         style={{
//           zIndex: 10, // High z-index to ensure it’s above the sphere
//           position: "absolute", // Ensures stacking context is respected
//           top: "50%", // Adjust position
//           left: "50%",
//           transform: "translate(-50%, -50%)", // Center the text
//           // color: "white", // Ensure text color contrasts the background
//           fontSize: "24px",
//           textAlign: "center",
//         }}
//       >
//         <ProjectPage />
//       </div>
//     </>
//   );
// }

function App() {
  return (
    <>
      <DisplacementSphere />
      <div
        style={{
          zIndex: 10, // High z-index to ensure it’s above the sphere
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
        }}
      >
        <ProjectPage />
      </div>
    </>
  );
}

export default App;
