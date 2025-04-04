import logo from "../../assets/images/logo.webp";
import { Link } from "react-router-dom";
import "./index.css";
import { PrimaryButton } from "../Buttons";

export function Header() {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };
  function handleOrderButton() {
    window.open("https://tista-sushi.orderintelligence.no/", "_blank");
  }
  // function handleOrderTeaButton() {
  //   window.open(
  //     "https://tista-teaology.orderintelligence.no/no/welcome",
  //     "_blank"
  //   );
  // }
  return (
    <header className="text-white p-4 sticky top-0 bg-black z-10 opacity-90 ">
      <div className="   mx-auto">
        <div className="flex justify-between">
          <Link to="/" className="self-center">
            <img
              src={logo}
              alt="logo of Tista sushi in halden Norway asian restaurant japanese cuisine"
              className="w-36 md:w-56"
            />
          </Link>
          <div className="flex content-center">
            {/* <div className="self-center mr-4">
              <SecondaryButton
                label="TEAOLOGY"
                onClick={handleOrderTeaButton}
              />
            </div> */}
            <div className="self-center">
              <PrimaryButton
                label="Bestill Sushi"
                onClick={handleOrderButton}
              />
            </div>
            {/* <nav>
              <ul className="p-4 hidden md:flex" id="navbar">
               
                <li className="p-4 text-xl">
                  <a href="#about">OM OSS</a>
                </li>
                <li className="p-4 text-xl">
                  <a href="#contact">KONTAKT</a>
                </li>
              </ul>
            </nav> */}
            {/* <div className="md:hidden self-center">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="size-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div> */}
          </div>
        </div>
      </div>

      {/* {isOpen && (
        <nav className="w-fit fixed right-4 text-end">
          <ul className="md:hidden bg-black p-4 w-fit" id="navbar">
           
            <li className="p-4 text-xl">
              <a href="#about">OM OSS</a>
            </li>
            <li className="p-4 text-xl">
              <a href="#contact">KONTAKT</a>
            </li>
          </ul>
        </nav>
      )} */}
    </header>
  );
}
