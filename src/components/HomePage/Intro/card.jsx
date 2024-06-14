export function IntroCard({ icon, title, content }) {
  return (
    <div className="p-2 m-3 items-center w-full md:w-1/2  lg:w-1/4 p-4 relative flex ">
      <div>{icon}</div>
      <div className="m-3">
        <h2>{title}</h2>
        <p className="text-black">{content}</p>
      </div>
    </div>
  );
}
