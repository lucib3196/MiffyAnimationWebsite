

export default function Card({ src }: { src: string }) {
    return (
        <div className="border bg-blue-800 rounded-lg h-75 w-50">
            <img src={src} className="bg-black" alt="Image" />
        </div>
    );
}
