const Feedback = () => {
  return (
    <div>
      <div className="relative w-full h-[600px] md:h-[900px] lg:h-[956px] ">
        <div className="absolute left-0 bottom-0">
          <img src="bg2.png" className="object-contain" />
        </div>
        <div className="relative w-full grid grid-cols-1 md:grid-cols-2 ">
          <div className="left-0 lg:mx-32 lg:my-64 mx-10 my-24 md:mx-10 md:my-72 ">
            <img
              src="Conversation.png"
              className="h-[300px] lg:h-[387px] md:h-[320px] w-full object-contain"
            />
          </div>

          <div className="right-0 md:my-80 xl:mr-40 lg:ml-10 md:mr-5 text-center md:text-left">
            <h1 className="font-semibold text-lg md:text-lg lg:text-2xl lg:w-[20ch] xl:text-6xl text-gray-700">
              Encuentra a los mejores proveedores
            </h1>
            <p className="xl:text-2xl text-gray-400 font-normal mt-2 lg:text-lg md:text-base text-base md:w-[35ch] xl:mt-5">
              Tenemos una lista con los mejores proveedores para eventos del
              ramo que te imagines
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
    </div>
  );
};

export default Feedback;
