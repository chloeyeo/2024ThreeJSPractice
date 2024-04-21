import { Canvas } from "@react-three/fiber";
import "./css/App.css";
import { OrbitControls, Environment } from "@react-three/drei";
import Experience from "./components/Experience";

function App() {
  return (
    <Canvas>
      <Experience />
    </Canvas>
  );
}

export default App;
