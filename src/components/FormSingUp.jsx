import { Link } from "react-router-dom";

const FormSingUp = () => {
    return(
        <div className=" bg-white px-20 py-20 rounded-3xl border-2 border-gray-100 bg-[url('../assets/step_background.png')]">
            <h1 className="text-5xl font-semibold ">Eres nuevo aqui?</h1>
            <p className="font-medium text-lg text-gray-500 mt-4">Ingresa tu Info.</p>
            <div className="mt-8 ">
                <div>
                    <label className="flex text-lg font-semibold ">Nombre</label>
                    <input type="password" className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent p-3" placeholder="Ingrese su Nombre" />
                </div>
                <div>
                    <label className="flex text-lg font-semibold">Email</label>
                    <input type="text" className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent p-3" placeholder="Ingrese su Email" />
                </div>
                <div>
                    <label className="flex text-lg font-semibold ">Contraseña</label>
                    <input type="password" className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent p-3" placeholder="Ingrese su Contraseña" />
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                    <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-[#5C8374] text-white text-lg font-bold">Registrarse</button>
                    <Link to="/Login" className="flex border-2 border-[#5C8374] items-center justify-center gap-2 py-3 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">
                        Ya tengo cuenta aqui!
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FormSingUp;