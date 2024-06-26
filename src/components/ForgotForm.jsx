const ForgotForm = () => {
    return(
        <div>
            <div className=" bg-white px-20 py-20 rounded-3xl border-2 border-gray-100 bg-[url('../assets/step_background.png')]">
            <h1 className="text-3xl font-semibold md:text-2xl ">Olvidaste tu Contaseña?</h1>
            <p className="2xl:font-medium text-lg text-gray-500 mt-4 xl:">No te preocupes! </p>
            <p className="2xl:font-medium text-lg text-gray-500 text-center xl:text-base">Escribe tu email y recibiras <br />instrucciones de como cambiar tu Contraseña</p>
            <div className="mt-8 ">
                <div>
                    <label className="flex text-lg font-semibold">Email</label>
                    <input type="text" className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent p-3 xl:p-2" placeholder="Enter your Email" />
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                    <button className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-[#5C8374] text-white text-lg font-bold ">Enviar Correo</button>
                </div>
            </div>
        </div>
        </div>
    )
}
export default ForgotForm;