import { PrimaryButton, SecondaryButton } from "../../Buttons";
import imageB from "../../../assets/images/removebg2.png";
import imageC from "../../../assets/images/bgremove.png";
import coverTea from "../../../assets/images/tea.png";
export function Intro() {
  function handleOrderButton() {
    window.open("https://tista-sushi.orderintelligence.no/", "_blank");
  }
  function handleOrderTeaButton() {
    window.open(
      "https://tista-teaology.orderintelligence.no/no/welcome",
      "_blank"
    );
  }
  return (
    <section>
      <div className="relative mx-auto my-24 lg:my-72 w-fit">
        <img
          src={coverTea}
          alt="Tista milk tea in halden Norway asian restaurant japanese cuisine"
        />
        <div className="absolute bottom-4 right-10 lg:bottom-1/4 lg:right-1/4">
          <PrimaryButton label="Bestill her" onClick={handleOrderTeaButton} />
        </div>
      </div>

      <div className="m-5 md:flex items-center my-24 lg:my-60 " id="about">
        <div className="w-full xl:w-1/2 ">
          <img
            src={imageB}
            alt="Tista sushi in halden Norway asian restaurant japanese cuisine"
            className="m-auto"
          />
        </div>
        <div className="text-center p-5">
          <p className="text-lg my-5 p-5 leading-9 lg:w-3/4 mx-auto">
            På Tista Sushi er vi lidenskapelig glad i sushi. Her kan du får
            oppleve kulinariske asiatiske fusion som gjør den tradisjonelle
            sushi opplevelsen det lille ekstra. Reisen gjennom Asia fult opp
            med. Vi lager autentisk og fersk sushi laget med kjærlighet og
            kunnskap. Vi tilbyr en stor og spennende meny med alt fra spennende
            smaker med nigri, maki, rolls, bowls og mye mer. Velkommen!
          </p>
          <div className="my-5">
            <SecondaryButton label="Sushi Meny" onClick={handleOrderButton} />
          </div>
        </div>
        <div className="w-full xl:w-1/2 text-center">
          <img
            src={imageC}
            alt="Tista sushi in halden Norway asian restaurant japanese cuisine"
            className="m-auto"
          />
        </div>
      </div>
    </section>
  );
}
