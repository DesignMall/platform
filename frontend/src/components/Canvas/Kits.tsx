import { useState, useRef, useEffect } from 'react';
import { Stage, Layer, Rect, Text } from 'react-konva';
import kit from '../../assets/kit.png'
import { NameDimensions, NumberDimensions, Player } from '../../utils/types';

interface Props {
    Player: Player
    Color?: string
    Name: NameDimensions
    Number: NumberDimensions
}
const Kit = (props: Props) => {
    const { Player: { Player_Name, Player_Number }, Color, Name: { Xposition, Yposition, Size }, Number: { X, Y, size } } = props
    const [image] = useState(new window.Image());
    const [canvasSize, setCanvasSize] = useState({ width: 300, height: 400 });

    const stageRef = useRef(null);

    useEffect(() => {
        image.src = kit;
        image.onload = () => {
            setCanvasSize({ width: image.width, height: image.height });
        };
    }, [image]);

    return (
        <Stage width={canvasSize.width} height={canvasSize.height} ref={stageRef}>
            <Layer>
                <Rect
                    width={canvasSize.width}
                    height={canvasSize.height}
                    fillPatternImage={image}
                    fillPatternScaleX={canvasSize.width / image.width}
                    fillPatternScaleY={canvasSize.height / image.height}
                />
                <Text
                    id='Name'
                    text={Player_Name}
                    x={Xposition}
                    y={Yposition}
                    fontSize={Size}
                    fontFamily="Arial"
                    fill={Color ?? '#FFED02'}
                    align="center"
                    width={canvasSize.width}
                    listening={false}
                    globalCompositeOperation="source-over"
                />
                <Text
                    id='Number'
                    text={Player_Number}
                    x={X}
                    y={Y}
                    fontSize={size}
                    fontFamily="Arial"
                    fill={Color ?? '#FFED02'}
                    align="center"
                    width={canvasSize.width}
                    listening={false}
                    globalCompositeOperation="source-over"
                />
            </Layer>
        </Stage>
    );
};

export default Kit;
