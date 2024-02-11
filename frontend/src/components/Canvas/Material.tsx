import { useRef, useState } from "react";
import { Circle, Group, Layer, Rect, Stage } from "react-konva";
import { useSelector } from "react-redux";
import { getCurrentShape } from "../../states/CarpSlice/Carpentry.Slice";

export default function CarpentryCanvas() {
    const [canvasSize, setCanvasSize] = useState({ width: 1000, height: 400 });

    const Shape = useSelector(getCurrentShape)

    const stageRef = useRef(null);

    return (
        <div className="p-3">
            <Stage width={canvasSize.width} height={canvasSize.height} ref={stageRef}>
                <Layer>
                    <Group x={(canvasSize.width - 1000) / 2}>
                        <Rect
                            x={((canvasSize.width / 2) / 2) - 80}
                            width={800}
                            height={20}
                            fill="#A1662F"
                            draggable
                            cornerRadius={Shape.table.type==='round' ? 10 : 0}
                        />
                        <Rect
                            y={19}
                            x={250}
                            width={8}
                            draggable
                            height={200}
                            fill="#A26FFSC"
                        />
                        <Rect
                            y={19}
                            x={860}
                            draggable
                            width={8}
                            height={200}
                            fill="black"
                        />
                        <Circle
                            radius={10}
                            y={210}
                            x={254}
                            fill="black"
                            draggable
                        />
                        <Circle
                            radius={10}
                            y={210}
                            x={864}
                            fill="black"
                            draggable
                        />
                    </Group>
                </Layer>
            </Stage>
        </div>
    );

}