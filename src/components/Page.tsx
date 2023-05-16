const Page = () => {
  return (
    <div>
      <div className="header w-full">
        <div className="mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <img src="logo.png" className="flex flex-col" />
        </div>
        <div className="relative w-full h-[300px] md:h-[600px] lg:h-[900px] ">
          <div className="absolute right-0 bottom-0">
            <img src="bg.png" className="object-contain" />
          </div>
          <div className="relative w-full">
            <div className="absolute right-0 mr-10 my-6 md:mr-20 md:my-14 lg:mr-20 lg:mt-20 xl:my-1 xl:mr-28 ">
              <img
                src="iPhone.png"
                className="h-[250px] md:h-[500px] lg:h-[800px] xl:h-[900px] w-full object-contain"
              />
            </div>
          </div>
          <div className="relative left-0 md:px-20 md:py-20  px-5 py-10">
            <h1 className="font-semibold w-[15ch] text-lg md:text-2xl lg:text-4xl lg:w-[16ch] xl:text-6xl ">
              La plataforma #1 de eventos{" "}
            </h1>
            <p className="xl:text-2xl text-gray-400 font-normal mt-2 lg:text-xl md:text-lg text-base w-[5ch] md:w-[35ch]">
              Organiza eventos fácil e inteligente
            </p>
            <button
              type="button"
              className="text-black bg-font-col hover:bg-yellow-300 font-medium rounded-md  lg:px-5 lg:py-2.5 lg:mr-2 lg:mb-2 md:mt-4 mt-4 focus:outline-none lg:text-xl md:text-lg xl:text-2xl text-sm"
            >
              Comenzar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
