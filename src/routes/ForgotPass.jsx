import ForgotForm from "../components/ForgotForm";

const ForgotPass = () => {
    return(
        <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-gradient-to-b from-[#93B1A6] via-[#5C8374] to-[#183D3D] border-transparent">
      <ForgotForm></ForgotForm>
      </div>
      <div className="`hidden relative lg:flex h-full w-1/2 items-center justify-center ">
        {/* Icon */}
      </div>
    </div>
    )
}
export default ForgotPass;