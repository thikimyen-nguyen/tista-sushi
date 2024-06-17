import { CoverThree, CoverTwo, MainCover } from "./Cover";
import { Intro } from "./Intro";
import { Gallery } from "./Gallery";

export default function HomePageContent() {
  return (
    <div>
      <MainCover />
      <Intro />
      <CoverTwo />
      <Gallery />
    </div>
  );
}
