const Footer = () => {
  return (
    <footer className="bg-white ">
      <div className="w-full p-10">
        <div className="sm:flex sm:items-center sm:justify-between">
          <img src="logo.png" className="left-0" />
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Proveedores
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 md:mr-6 hover:underline">
                Opiniones
              </a>
            </li>
            <li>
              <button
                type="button"
                className="text-font-col bg-black hover:bg-yellow-950 shadow font-medium rounded-lg  px-5 py-2.5 lg:px-5 lg:py-2.5 lg:mr-2 lg:mb-2 md:mt-4 mt-4 focus:outline-none lg:text-xl md:text-lg xl:text-2xl text-sm xl:mt-5"
              >
                Comenzar
              </button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
