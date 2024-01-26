import { Engine, Scene, HemisphericLight, Vector3, ArcRotateCamera, Color4, MeshBuilder } from "babylonjs";

export default function Setup3D() {
  const canvas = document.getElementById('threeCanvas') as HTMLCanvasElement;
  const engine = new Engine(canvas, true);
  const scene = new Scene(engine);
  scene.clearColor = new Color4(1, 1, 1, 1);
  const camera = new ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2, 5, Vector3.Zero(), scene);
  camera.attachControl(canvas, true);

  new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // Create a 3D box
  const box = MeshBuilder.CreateBox("box", { size: 1 }, scene);
  box.position = new Vector3(2, 0, 0); // Set position to the right of the screen

  engine.runRenderLoop(() => {
    scene.render();
  });

  window.addEventListener("resize", () => {
    engine.resize();
  });

  return () => {
    engine.dispose();
  };
}



