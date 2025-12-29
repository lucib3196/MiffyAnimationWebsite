import { useState } from "react";
import AnimationCanvas from "pixel_loop_library";

import Select from "../../components/Select/Select";
import { type SelectOption } from "../../components/Select/Select";
import Scene from "../../components/Card/Scene";
import {
    backgrounds,
    baseImages,
    type ImageConfig,
    type AnimationConfig,
} from "./config";

export default function AnimationView() {
    const [background, setBackground] = useState<string>(backgrounds[0].src);
    const [selectedImage, setSelectedImage] = useState<AnimationConfig>(
        baseImages[0]
    );
    const [viewOption, setViewOption] = useState("all");

    const prepareImages = (images: ImageConfig[]) =>
        images.map((v) => ({
            key: v.src,
            label: v.name,
        }));

    const Options: SelectOption[] = [
        { label: "Show All", key: "all" },
        { label: "Show Card", key: "card" },
        { label: "Show Animation", key: "animation" },
    ];

    return (
        <div className="flex flex-col items-center gap-6 w-full px-4 my-2">
            {/* Controls Panel */}
            <div
                className="
          w-full max-w-130
          bg-[#221d34]
          border-2 border-white
          shadow-[4px_4px_0_#000]
          px-4 py-3
        "
            >
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    {/* Background Select */}
                    {(viewOption === "all" || viewOption === "card") && (
                        <div className="flex flex-col gap-1 flex-1">
                            <span className="text-xs text-gray-300 uppercase tracking-wide">
                                Background
                            </span>
                            <Select
                                options={prepareImages(backgrounds)}
                                selected={background}
                                setSelected={setBackground}
                            />
                        </div>
                    )}

                    {/* Character Select */}
                    <div className="flex flex-col gap-1 flex-1">
                        <span className="text-xs text-gray-300 uppercase tracking-wide">
                            Character
                        </span>
                        <Select
                            options={prepareImages(baseImages)}
                            selected={selectedImage.src}
                            setSelected={(val) => {
                                const next = baseImages.find((v) => v.src === val);
                                if (next) setSelectedImage(next);
                            }}
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-1 flex-1">
                    <span className="text-xs text-gray-300 uppercase tracking-wide">
                        Toggle View
                    </span>

                    <Select
                        options={Options}
                        selected={viewOption}
                        setSelected={(val) => {
                            setViewOption(val);
                        }}
                    />
                </div>
            </div>

            {/* Scene + Animation Area */}
            <div
                className="
          flex flex-col
          sm:flex-row
          gap-6
          w-full
          max-w-275
        "
            >
                {/* Scene Panel */}
                {(viewOption === "all" || viewOption === "card") && (
                    <div
                        className="
            w-full
            sm:w-1/2
            bg-[#221d34]
            border-2 border-white
            shadow-[4px_4px_0_#000]
            p-4
          "
                    >
                        <Scene background={background} image={selectedImage?.src ?? ""} />
                    </div>
                )}

                {/* Animation Preview */}
                {(viewOption === "all" || viewOption === "animation") && (
                    <div
                        className="
            w-full
            sm:w-1/2
            bg-[#221d34]
            border-2 border-white
            shadow-[4px_4px_0_#000]
            p-3
            flex justify-center items-center
          "
                    >
                        <AnimationCanvas
                            src={selectedImage.animation}
                            animationConfig={{ imageWidth: 800, imageHeight: 800 }}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
