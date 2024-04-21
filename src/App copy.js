import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import "./css/style.css";
import { OrbitControls, Environment } from "@react-three/drei";
import PumpkinCat from "./components/PumpkinCat";
// position={[0, 100, 1000]}
function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ fov: 100, position: [0, 6, 20] }}>
        <ambientLight />
        <directionalLight />
        <Environment preset="forest" />
        <OrbitControls enableZoom={true} />
        <Suspense fallback={<div>Loading...</div>}>
          <PumpkinCat />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
