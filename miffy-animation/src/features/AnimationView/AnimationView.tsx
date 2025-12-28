import AnimationCanvas from "pixel_loop_library";

import { useState } from "react";
import Select from "../../components/Select/Select";
import { backgrounds, baseImages, type ImageConfig } from "./config";
import Animation1 from "../../assets/animations/miffyAnimation1.png"
import Scene from "../../components/Card/Scene";

export function CardEditor() {
    const [background, setBackground] = useState<string>(backgrounds[0].src);
    const [baseImage, setBaseImage] = useState<string>(baseImages[0].src);

    const prepareImages = (images: ImageConfig[]) =>
        images.map((v) => ({ key: v.src, label: v.name }));

    return (
        <div>
            <Select
                options={prepareImages(backgrounds)}
                selected={background}
                setSelected={(val) => setBackground(val)}
            />
            <Select
                options={prepareImages(baseImages)}
                selected={baseImage}
                setSelected={(val) => setBaseImage(val)}
            />
            <Scene background={background} image={baseImage} />
        </div>
    );
}

export default function AnimationView() {
    return (
        <div className="border rounded-2xl w-8/10 h-75">
            <CardEditor />

            <AnimationCanvas
                src={Animation1}
                animationConfig={{ imageWidth: 800, imageHeight: 800 }}
            />
        </div>
    );
}
