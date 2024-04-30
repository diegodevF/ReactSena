import Form from "../components/Form";
import Init from "../Icons/Init";

const Login = () => {
  // const Users = [
  //   { username: "Diego", password: "123456" },
  //   { username: "Juan", password: "abcdef" },
  // ];

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center lg:w-1/2 bg-gradient-to-b from-[#93B1A6] via-[#5C8374] to-[#183D3D] border-transparent">
      <Form></Form>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center ">
        <Init></Init>
      </div>
    </div>
  );
};

export default Login;
