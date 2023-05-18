const Comment = () => {
  return (
    <div>
      <div className="relative w-full h-[800px] md:h-[800px]  grid grid-cols-1 md:grid-cols-2">
        <div className="absolute left-0 bottom-0">
          <img
            src="Image.png"
            className="object-contain md:h-[800px] lg:h-[956px]"
          />
        </div>
        <div className="absolute right-0 md:my-10 xl:mr-40 lg:my-40 lg:ml-32 md:mr-5 text-center md:text-left">
          <h1 className="font-semibold text-lg md:text-lg lg:text-2xl lg:w-[20ch] xl:text-6xl text-gray-700">
            Opiniones de usuarios
          </h1>
          <p className="xl:text-2xl text-gray-400 mt-2 lg:text-lg md:text-base text-base md:w-[35ch] xl:mt-5 font-mono">
            “Con Event-u logré mejorar mis costos, operaciones y utilidades. Por
            fin puedo concentrarme en mi especialidad; organizar eventos ”
          </p>
          <img src="Author.png" className="mt-2 mx-24 md:mx-0" />
        </div>
      </div>
    </div>
  );
};

export default Comment;
