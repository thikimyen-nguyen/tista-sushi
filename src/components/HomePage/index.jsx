import { CoverTwo, MainCover } from "./Cover";
import { Intro } from "./Intro";
import { Gallery } from "./Gallery";
import { ContactCover, ContactForm } from "../ContactForm";
import { QRCode } from "../QrCode";

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
      <QRCode />

    </div>
  );
}
