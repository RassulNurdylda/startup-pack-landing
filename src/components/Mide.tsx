const Mide = () => {
  return (
    <div>
      <div className="relative w-full h-[800px] md:h-[800px]  grid grid-cols-1 md:grid-cols-2">
        <div className="absolute right-0 bottom-0">
          <img
            src="Graphic.png"
            className="object-contain md:h-[800px] lg:h-[956px]"
          />
        </div>
        <div className="left-0 my-20 md:my-20  xl:my-40 xl:ml-40 lg:ml-10 lg:my-80 md:ml-10 text-center md:text-left">
          <h1 className="font-semibold text-lg md:text-xl lg:text-2xl lg:w-[20ch] xl:text-6xl text-gray-700">
            Mide tus ganancias
          </h1>
          <p className="xl:text-2xl text-gray-400 font-normal mt-2 lg:text-lg md:text-lg text-base md:w-[32ch] xl:mt-5">
            Controla todos los costos de tu evento y calcula tus utilidades con
            base en rendimientos.
          </p>
          <button
            type="button"
            className="text-black bg-font-col hover:bg-yellow-300 font-medium rounded-md  px-5 py-2.5 lg:px-5 lg:py-2.5 lg:mr-2 lg:mb-2 md:mt-4 mt-4 focus:outline-none lg:text-xl md:text-lg xl:text-2xl text-sm xl:mt-5"
          >
            Comenzar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mide;
