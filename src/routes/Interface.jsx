import Icon02 from "../Icons/Icon02";
import { Link } from "react-router-dom";

const Interface = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 p-6 lg:p-10 bg-gradient-to-b from-[#183D3D] via-[#5C8374] to-[#93B1A6]">
        <form className="bg-white px-8 py-10 lg:px-16 lg:py-20 rounded-3xl shadow-xl border-2 border-gray-100 w-full max-w-lg">
          <h1 className="font-semibold text-3xl lg:text-4xl text-center lg:text-left text-[#183D3D]">
            ¡Maneja tus Finanzas con Confianza!
          </h1>
          <h2 className="font-medium text-xl lg:text-2xl mt-4 text-center lg:text-left text-[#5C8374]">
            ¿Qué quieres hacer hoy?
          </h2>
          <div className="mt-10 flex flex-col lg:flex-row w-full items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
            <Link
              to="./Login"
              className="bg-[#5C8374] border-[#5C8374] border-4 py-3 px-6 rounded-md text-white font-bold active:scale-[.98] active:duration-75 transition-transform transform hover:scale-[1.05] ease-in-out w-full lg:w-auto text-center shadow-lg"
            >
              Iniciar Sesion
            </Link>
            <Link
              to="./SingIn"
              className="border-[#93B1A6] py-3 px-6 rounded-md border-4 text-[#5C8374] font-bold active:scale-[.98] active:duration-75 transition-transform transform hover:scale-[1.05] ease-in-out w-full lg:w-auto text-center shadow-lg"
            >
              Registrarse
            </Link>
          </div>
        </form>
      </div>
      <div className="hidden lg:flex h-full w-1/2 items-center justify-center relative bg-white">
        <Icon02 className="relative z-10" />
        <div className="absolute inset-0 flex flex-col justify-center items-center z-0">
        </div>
      </div>
    </div>
  );
};

export default Interface;