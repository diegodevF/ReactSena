import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Google from "../Icons/Google";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();


  const handleLogin = () => {
    if (!email || !password) {
      setError("Por favor ingresa tu email y contraseña.");
      return;
    }

    // Simulación de autenticación básica
    if (email === "usuario@example.com" && password === "password") {
      setIsLoggedIn(true);
      setError("");
      // Redirige al usuario a la página de dashboard después de iniciar sesión
      // Utilizamos useHistory para la redirección
      navigate("/Dashboard"); // Cambia "/dashboard" por la ruta a la que quieres redirigir
    } else {
      setError(
        "Email o contraseña incorrectos. Por favor intenta de nuevo."
      );
    }

    if(!isLoggedIn){
        return navigate("../routes/Dashboard")
    }
  };

  return (
    <div className="bg-white px-20 py-20 rounded-3xl border-2 border-gray-100 bg-[url('../assets/step_background.png')]">
      <h1 className="text-5xl font-semibold">Bienvenido de Nuevo!</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Ingresa tus Credenciales.
      </p>
      <div className="mt-8">
        <div>
          <label className="flex text-lg font-semibold">Email</label>
          <input
            type="text"
            className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent p-3"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mt-4">
          <label className="flex text-lg font-semibold">Contraseña</label>
          <input
            type="password"
            className="w-full border-2 border-gray-100 rounded-xl mt-1 bg-transparent p-3"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <div className="mt-8 flex justify-between items-center">
          <div>
            <input type="checkbox" name="" id="remember" />
            <label htmlFor="remember" className="ml-2 font-medium text-base">
              Recordar Siempre
            </label>
          </div>
          <Link
            to="/ForgotPass"
            className="font-medium text-base text-[#5C8374]"
          >
            Olvidaste tu Contraseña?
          </Link>
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button
            onClick={handleLogin}
            className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-[#5C8374] text-white text-lg font-bold"
          >
            Log in
          </button>
          <button className="flex border-2 border-[#5C8374] items-center justify-center gap-2 py-3 rounded-xl active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out">
            <Google />
            Log in With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
