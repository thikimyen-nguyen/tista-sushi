import Banner from "../../../assets/images/coverngang.jpg";
// import { SecondaryButton } from "../../Buttons";
import collage from "../../../assets/images/collage.webp";

export function Gallery() {
  return (
    <section>
      <div className="flex lg:w-3/4 mx-auto my-10">
        <img src={collage} alt="tista sushi maki nigiri roll" />
      </div>
      <div className="relative h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${Banner})` }}
        ></div>
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full md:w-3/4  top-52 flex-col items-center mx-auto">
          {" "}
          <p className="my-5 text-3xl text-center pt-5 lg:w-3/4 mx-auto">
            Fordyp deg i en uforglemmelig matopplevelse, hvor hver bit er en
            reise til hjertet av Japan!
          </p>
          {/* <div className="text-center mt-20">
            <SecondaryButton label="Online Order" />
          </div> */}
        </div>
      </div>
    </section>
  );
}
