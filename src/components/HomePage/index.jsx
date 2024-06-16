import { Cover, CoverOne, CoverThree, CoverTwo, MainCover } from "./Cover";
import { Intro } from "./Intro";
import { Gallery, Review } from "./Review";

export default function HomePageContent() {
  return (
    <div>
      <MainCover />
      <Intro />
      <CoverTwo />
      <Gallery />
      <CoverThree />
    </div>
  );
}
