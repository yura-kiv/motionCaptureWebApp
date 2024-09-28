import { useCallback, useEffect, useRef } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Hands, Results } from "@mediapipe/hands";
import { Camera } from "@mediapipe/camera_utils";
import { detectHands } from "../functions/detectHands";
import { detectHoverEffects } from "../functions/detectHoverEffects";
import { detectGesture } from "../functions/detectGesture";
import { detectClickEvent } from "../functions/detectClickEvent";
import { getScrollEvent } from "../functions/getScrollEvent";
import { getBrowserEvent } from "../functions/getBrowserEvent";
import { HoverNode, Nodes } from "../types/nodes";
import { NodesContext } from "../contexts/nodesContext";
import Webcam from "react-webcam";
import s from "./MainLayout.module.scss";
import SideBar from "../components/SideBar/SideBar";
import { ModalFrame } from "../components/ModalFrame/ModalFrame";
import { getDocumentFps } from "../functions/getDocumentFps";

const MainLayout = () => {
  const navigate = useNavigate();
  const fpsCounterRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<Webcam>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodes = useRef<Nodes>({ hover: {} });

  const addHoverNode = useCallback((node: HoverNode) => {
    nodes.current.hover[node.id] = node;
  }, []);

  const removeHoverNode = useCallback((id: string) => {
    if (nodes.current.hover[id]) delete nodes.current.hover[id];
  }, []);

  const onResults = useCallback((results: Results) => {
    if (canvasRef.current) {
      const canvasContext = canvasRef.current.getContext("2d")!;
      const landmarks = detectHands(canvasContext, results);
      if (landmarks) {
        const gesture = detectGesture(landmarks.worldLandmarks);
        if (gesture === "CURSOR") {
          detectHoverEffects(landmarks.displayLandmarks, nodes.current.hover);
          detectClickEvent(
            landmarks.displayLandmarks,
            landmarks.worldLandmarks
          );
        }
        if (gesture === "VICTORY")
          getBrowserEvent(landmarks.displayLandmarks, navigate);
        if (gesture === "OPEN_PALM") getScrollEvent("up");
        if (gesture === "CLOSED_PALM") getScrollEvent("down");
      }
    }
  }, []);

  useEffect(() => {
    if (fpsCounterRef) getDocumentFps(fpsCounterRef);
    const hands = new Hands({
      locateFile: (file) => {
        return `/hands/${file}`;
      },
    });
    hands.setOptions({
      maxNumHands: 1,
      modelComplexity: 1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
      selfieMode: true,
    });
    hands.onResults(onResults);
    if (cameraRef.current && cameraRef.current.video) {
      const camera = new Camera(cameraRef.current.video, {
        width: 256,
        height: 144,
        onFrame: async () =>
          await hands.send({ image: cameraRef.current!.video! }),
      });
      camera.start();
    }
    return () => {
      hands.close();
    };
  }, [onResults]);

  return (
    <div className={s.wrapper}>
      <NodesContext.Provider value={{ addHoverNode, removeHoverNode }}>
        <SideBar>
          <Outlet />
        </SideBar>
        <ModalFrame />
      </NodesContext.Provider>
      <Webcam
        audio={false}
        ref={cameraRef}
        className={s.camera}
        mirrored
        videoConstraints={{
          width: 1280,
          height: 720,
          facingMode: "user",
        }}
      />
      <canvas
        ref={canvasRef}
        width={window.innerWidth}
        height={window.innerHeight}
        className={s.canvas}
      />
      <div
        ref={fpsCounterRef}
        className={s.fpsCounter}
      />
    </div>
  );
};

export default MainLayout;
