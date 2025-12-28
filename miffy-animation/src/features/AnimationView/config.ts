import SunnyMeadowWay from "../../assets/backgrounds/ParkBackground.png";
import HeartLightSquare from "../../assets/backgrounds/Heartlight Square.png";
import DreamyNightGarden from "../../assets/backgrounds/DreamyNightGarden.png";
import MelodyPlaza from "../../assets/backgrounds/MelodyPlaza.png"
import Base1 from "../../assets/card/miffy1.png";
import Base2 from "../../assets/card/miffy2.png";
import Base3 from "../../assets/card/miffy3.png";
import Base4 from "../../assets/card/miffy4.png";

import Animation1 from "../../assets/animations/miffyAnimation1.png"

export type ImageConfig = {
  src: string;
  name: string;
};
export const backgrounds: ImageConfig[] = [
  { src: SunnyMeadowWay, name: "Sunny Meadow Way" },
  { src: HeartLightSquare, name: "Heartlight Square" },
  { src: DreamyNightGarden, name: "DreamyNightGarden" },
  { src: MelodyPlaza, name: "Melody Plaza" },
];

export const baseImages: ImageConfig[] = [
  { src: Base1, name: "Pose1" },
  { src: Base2, name: "Pose2" },
  { src: Base3, name: "Pose3" },
  { src: Base4, name: "Pose4" },
];
