import Banner from "../../../assets/images/cover.jpg";
import "./index.css";
import BannerTwo from "../../../assets/images/hinh3.webp";
import BannerThree from "../../../assets/images/teacover.jpg";

import image2 from "../../../assets/images/sushidishbgremove.png";
import imageTea from "../../../assets/images/teasample.png";
import teaLogo from "../../../assets/images/logo (1).png";

import { PrimaryButton, SecondaryButton } from "../../Buttons";
// import { SecondaryButton } from "../../Buttons";

export function MainCover() {
  function handleOrderTeaButton() {
    window.open(
      "https://tista-teaology.orderintelligence.no/no/welcome",
      "_blank"
    );
  }
  return (
    <section>
      <div className="relative h-screen mb-24">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url(${BannerThree})` }}
        ></div>

        {/* Add 'flex' and positioning to make flex layout work */}
        <div className="absolute flex flex-col lg:flex-row p-24 items-center justify-between w-full h-full">
          <div className="text-center flex-1">
            <h1
              className="text-8xl font-bold text-transparent bg-clip-text animate-rainbow font-styling transition-all ease-in-out"
              style={{
                transform: "rotate(-20deg)", // tilted counter-clockwise
                display: "inline-block", // needed to apply transform properly
                backgroundImage:
                  "linear-gradient(90deg, #ff9aa2, #ffb347, #fdfd96, #a1e891, #87cefa, #b39ddb, #f49ac2)",
                backgroundSize: "200% auto",
                backgroundPosition: "0% center",
                WebkitBackgroundClip: "text",
              }}
            >
              Nyhet!
            </h1>

            <div className="flex justify-center">
              <img src={imageTea} alt="teaology tista sushi halden" />
            </div>
          </div>

          <div className="flex flex-col justify-center flex-1 bg-white/2 backdrop-blur-md rounded-xl border border-white/30 shadow-lg ring-1 ring-white/20 p-10">
            <div>
              <h2 className="font-styling text-center text-4xl xl:text-6xl">
                Bubble Tea{" "}
                <span className="text-white lowercase"> er her på</span>
              </h2>
              <div className="flex justify-center pt-16">
                <img src={teaLogo} alt="teaology tista sushi halden" />
              </div>
            </div>

            <div className="text-center mt-20">
              <PrimaryButton
                label="Bestill Online"
                onClick={handleOrderTeaButton}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="relative h-56 sm:h-80 md:h-96 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center animate-zoomIn"
          style={{ backgroundImage: `url(${Banner})` }}
        ></div>
        <div className="relative flex items-center justify-end right-10 md:right-32 lg:right-64 h-full">
          <h1 className="font-styling text-primary text-2xl md:text-4xl lg:text-6xl">
            Delight in Every Bite!
          </h1>
        </div>
      </div>
    </section>
  );
}
export function CoverTwo() {
  function handleOrderButton() {
    window.open("https://tista-sushi.orderintelligence.no/", "_blank");
  }
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${BannerTwo})` }}
      ></div>
      <div className="absolute w-full top-10 flex items-center justify-center">
        {" "}
        <h1 className="my-5 text-center pt-36 ">SMAKEN AV EKTE SUSHI! </h1>
      </div>
      <div className="absolute inset-0 flex items-center justify-center top-44">
        <img
          src={image2}
          alt="Tista sushi in halden Norway asian restaurant japanese cuisine"
          style={{ width: "400px" }}
          className="animate-zoomIn"
        />
      </div>
      <div className="absolute w-full bottom-16 flex flex-col items-center justify-center">
        {" "}
        <p className="my-5 text-center">
          Nyt din favorittsushi hjemmefra med vår enkle og praktisk bestilling
          på nett.
        </p>
        <div className="text-center">
          <SecondaryButton label="Bestill Nå" onClick={handleOrderButton} />
        </div>
      </div>
    </div>
  );
}
