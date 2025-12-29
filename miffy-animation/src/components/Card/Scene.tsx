

type SceneProps = {
    background: string,
    image: string,
}

export default function Scene({ background, image }: SceneProps) {
    return <div id="scene" className="relative  aspect-square">
        <img src={background} className="absolute inset-0 h-full w-full" alt="" />
        <img src={image} className="absolute w-3/4 h-3/4 bottom-0 left-1/2 -translate-x-1/2" alt="" />

    </div>
}