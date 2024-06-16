import { CoverThree, CoverTwo, MainCover } from "./Cover";
import { Intro } from "./Intro";
import { Gallery } from "./Review";

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
