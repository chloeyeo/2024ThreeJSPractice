import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./css/style.css";
import { OrbitControls, Environment } from "@react-three/drei";
import Earth from "./components/Earth";
import Cat from "./components/Cat";

function App() {
  return (
    // camera={{ position: [0, 0, 10] }}
    <Canvas>
      <ambientLight />
      <directionalLight />
      <Environment preset="forest" />
      <OrbitControls enableZoom={true} />
      <Suspense fallback={null}>
        {/* <Earth /> */}
        <Cat />
      </Suspense>
    </Canvas>
  );
}

export default App;
