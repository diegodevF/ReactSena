import FormSingUp from "../components/FormSingUp";
import SingUp from "../Icons/SingUp";

const SingIn = () => { 
    return(
        <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-gradient-to-b from-[#93B1A6] via-[#5C8374] to-[#183D3D] border-transparent">
      <FormSingUp></FormSingUp>
      </div>
      <div className="`hidden relative lg:flex h-full w-1/2 items-center justify-center ">
        <SingUp></SingUp>
      </div>
    </div>
    )
}

export default SingIn;