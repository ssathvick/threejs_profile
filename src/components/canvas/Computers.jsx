import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';


const Computers = ({isMobile}) => {
  const Computer = useGLTF('./studio/home.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <primitive object={Computer.scene}
      scale={isMobile ? 0.4 : 0.6}
      position={isMobile ? [0, -3, 4] : [0, -5, 4]} />
    </mesh>
  )
}

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);
     // Define a callback function to handle changes to the media query
     const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
     // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);



  return (
    <Canvas
    frameloop="demand"
    shadows
    camera={ {position: [-10, 10,30], fov: 25 }}
    gl={ {preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
        enableZoom={true}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={0}
        />
        <Computers isMobile={isMobile} />      

      </Suspense>
      <Preload all />


    </Canvas>

  )
}


export default ComputerCanvas