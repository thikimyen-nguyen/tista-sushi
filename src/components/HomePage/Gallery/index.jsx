import Banner from "../../../assets/images/gallery.jpg";
import { SecondaryButton } from "../../Buttons";
import { GalleryCard } from "./card";
import image1 from "../../../assets/images/bgremovesushi/crazy-salmon-removebg-preview.png"
import image2 from "../../../assets/images/bgremovesushi/bento-removebg-preview.png"

export function Gallery() {
  return (
    <section>
      <div>
        <p className="text-3xl text-primary font-styling text-center my-20">OUR GALLERY</p>
        <div>
          <GalleryCard imageUrl={image1} name="Crazy Salmon Roll"/>
          <GalleryCard imageUrl={image2} name="Bento"/>

        </div>
      </div>
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${Banner})` }}
        ></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full md:w-3/4  top-36 flex-col items-center mx-auto">
          {" "}
          <p className="my-5 text-3xl text-center pt-5 font-styling">
            Immerse yourself in an unforgettable dining experience, where every
            bite is a journey to the heart of Japan!
          </p>
          <div className="text-center">
            <SecondaryButton label="Online Order" />
          </div>
        </div>
      </div>
    </section>
  );
}
