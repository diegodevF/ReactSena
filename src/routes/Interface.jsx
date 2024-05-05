import Icon02 from "../Icons/Icon02";
import { Link } from "react-router-dom";
// import BackButton from "../components/BackButton";

const Interface = () => { 
    return(
        <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-gradient-to-b from-[#93B1A6] via-[#5C8374] to-[#183D3D] border-transparent">
            {/* <BackButton></BackButton> */}
        <form className=" bg-white px-20 py-20 rounded-3xl border-2 border-gray-100">
            <h1 className="font-semibold text-2xl mt-5">Maneja tus Finanzas con confianza!</h1>
            <h2 className="font-medium text-xl mt-2">Que quieres hacer hoy?</h2>
            <div className="mt-8 flex w-full items-center justify-center space-x-9">
            <button className="bg-[#5C8374] border-[#5C8374] border-4 py-3 px-4 rounded-md text-white active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">
            <Link to="./Login">Iniciar Sesion</Link>
            </button>
            <Link to="./SingIn" className="border-[#93B1A6] py-3 px-4 rounded-md border-4 active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">Registrarse</Link>
            </div>
        </form>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center ">
        <Icon02></Icon02>
      </div>
    </div>
    )
}

export default Interface;