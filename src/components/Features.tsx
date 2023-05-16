const Features = () => {
  return (
    <div>
      <div className="w-full text-center">
        <p className="lg:text-base md:text-sm text-gray-400 ">Con los eventos, todos ganan</p>
        <h1 className="lg:text-4xl md:text-2xl font-semibold text-gray-700 mt-2">
          Todo lo que te ofrecemos en Event-u
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 mt-5">
          <div className="grid grid-cols-1 gap-3 justify-items-center">
            <img src="icon3.png" />
            <p className="lg:text-xl md:text-base font-semibold text-gray-700">
              Seguimiento de tus resultados
            </p>
            <p className="text-base text-gray-400 w-[33ch] mt-1">
              Ten siempre el control de tus costos, de tus tiempos y de tu
              organización.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 justify-items-center">
            <img src="icon2.png" />
            <p className="lg:text-xl md:text-base font-semibold text-gray-700">
              Contacto con proveedores
            </p>
            <p className="text-base text-gray-400 w-[33ch] mt-1">
              Encuentra a los proveedores ideales para tu negocio. ¡Olvídate de
              los proveedores de siempre!
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 justify-items-center">
            <img src="icon1.png" />
            <p className="lg:text-xl md:text-base font-semibold text-gray-700">
              Financiamiento para tu evento
            </p>
            <p className="text-base text-gray-400 w-[31ch] mt-1">
              Accede a financiamiento para tu evento por medio de Crowd Funding
              o inversionistas únicos
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
