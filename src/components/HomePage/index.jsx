import { CoverTwo, MainCover } from "./Cover";
import { Intro } from "./Intro";
import { Gallery } from "./Gallery";
import { ContactCover, ContactForm } from "../ContactForm";

export default function HomePageContent() {
  return (
    <div>
      <MainCover />
      <Intro />
      <CoverTwo />
      <Gallery />
      <div id="contact">
        <ContactCover />
        <ContactForm />
      </div>
    </div>
  );
}
