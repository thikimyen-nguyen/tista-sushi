import logo from "../../assets/images/logo.webp";
// import { PrimaryButton } from "../Buttons";
export function Footer() {
  // function handleOrderButton() {
  //   window.location.href = "https://tista-sushi.orderintelligence.no/";
  // }
  return (
    <footer className="text-center bg-gray text-white">
      <a href="/">
        {" "}
        <img src={logo} alt="holidaze logo" className="w-64 m-auto py-10" />
      </a>
      {/* <nav>
        <ul className="flex justify-center">
          <li className="p-4 hover:underline">
            <a href="#about">ABOUT US</a>
          </li>

          <li className="p-4 hover:underline">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav> */}
      {/* <PrimaryButton label="ORDER NOW" onClick={handleOrderButton} /> */}
      <div >
        <div className="flex items-center p-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
          >
            <path
              fill="#D73800"
              d="M4.02 13.747A6.25 6.25 0 0 1 10.25 8h27.5a6.25 6.25 0 0 1 6.236 5.828L24.002 24.35zM4 16.567V33.75A6.25 6.25 0 0 0 10.25 40h27.5A6.25 6.25 0 0 0 44 33.75V16.646L24.582 26.87a1.25 1.25 0 0 1-1.168-.002z"
            />
          </svg>
          <a class="email" href="mailto:nt.sushi@hotmail.com" className="hover:underline ml-2">nt.sushi@hotmail.com</a>
        </div>
        <div className="flex items-center p-2 justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path
              fill="#d73800"
              d="M240.3 396.8c3.3 5.1 9.1 8.5 15.7 8.5s12.4-3.4 15.8-8.5L382 226.6c14.8-22.9 23.4-48.1 23.4-77.3C405.3 64.9 339 0 256 0S106.7 64.9 106.7 149.3c0 29.2 8.6 54.4 23.4 77.3zM256 64c47.1 0 85.3 38.2 85.3 85.3s-38.2 85.3-85.3 85.3s-85.3-38.2-85.3-85.3S208.9 64 256 64m109.4 259.5L256 469.3L146.6 323.5c-37.4 19.6-61.3 48.9-61.3 81.8C85.3 464.2 161.7 512 256 512s170.7-47.8 170.7-106.7c0-32.9-23.9-62.2-61.3-81.8"
            />
          </svg>
          <a
            href="https://www.google.com/maps/place/Tista+Sushi/@59.1210181,11.3793512,16z/data=!3m1!4b1!4m6!3m5!1s0x464412dd19ebdb45:0x9f2c80054580135d!8m2!3d59.1210181!4d11.3793512!16s%2Fg%2F11gbkxj6j9?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 hover:underline"
          >
            Walkers gate 4, 1771 Halden
          </a>{" "}
        </div>
      </div>
      <p className="my-5">
        &copy; 2024 Powered by{" "}
        <a
          class="email"
          href="mailto:contact@orderintelligence.no"
          className="text-orange hover:underline"
        >
          Order Intelligence
        </a>
      </p>
    </footer>
  );
}
