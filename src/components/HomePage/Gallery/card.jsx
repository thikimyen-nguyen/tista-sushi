export function GalleryCard({imageUrl, name}) {
  return (
    <div
      className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4 relative flex-col"
    >
      <div
        className="p-3 group flex flex-col flex-grow rounded-lg overflow-hidden transition duration-300"
      >
        <img
          src={imageUrl}
          alt="tista sushi maki roll"
          className="w-full h-48 object-cover object-center group-hover:opacity-75 flex-shrink-0"
        />
      </div>
      <p className="text-lightOrange text-lg">{name}</p>
    </div>
  );
}
