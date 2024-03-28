"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Eye, EyeOff } from "lucide-react";
import { useRegisterValidate } from "../../utils/formValidations/user/register";
import logoImg from "../../../public/logo.svg";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { IoLogoMicrosoft } from "react-icons/io5";
import {
  authSelectors,
  saveRegister,
} from "@/application/reducers/auth-reducer";
import AllBusinessLoader from "@/components/loaders/Loader";

const Page = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const {
    loading: isRegisterLoading,
    data: registerData,
    error: isRegisterError,
  } = useSelector(authSelectors.registerCall);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    photo: "sample",
    role: "adm",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
    verified: false,
    organization_name: "org",
    organization_type: "business",
    description: "business",
  });

  const { errors, handleSubmit, register } = useRegisterValidate();
  const [formSubmitted, setformSubmitted] = useState(false);
  const [errorrMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // const tokenLocal = localStorage.getItem("token")

  useEffect(() => {
    const tokenLocal =
      typeof window !== "undefined"
        ? window.localStorage.getItem("token")
        : null;
    if (tokenLocal) {
      router.replace("/dashboard");
    }
  }, [router]);

  useEffect(() => {
    if (
      formSubmitted &&
      !isRegisterLoading &&
      registerData.status === "success"
    ) {
      router.push("/signup/verifyemail");
    }
  }, [formSubmitted, isRegisterLoading, registerData, router]);

  // const formSubmit = async (Data) => {
  //   try {
  //     console.log("Submitting form with data:", Data);
  //     const response = await Regata.userData));
  //     dispatch(addtoken(response.data.accesToken));
  //     localStorage.setItem("Token", response.data.token);
  //       router.push("/dasboard/veristerFn(Data);
  //     console.log("API response:", response);
  //     dispatch(addUser(response.difyemail");
  //   } catch (error) {
  //     console.error(
  //       "Error during form submission:-----------------------------------------------------------",
  //       error
  //     );
  //   }
  // };

  const formSubmit = (e) => {
    console.log(formData);
    const emptyField = Object.keys(formData).find(
      (key) => formData[key] === ""
    );
    if (emptyField) {
      const fieldName =
        emptyField.charAt(0).toUpperCase() + emptyField.slice(1);
      toast.error(`${fieldName} is empty!`);
    } else if (formData.password !== formData.passwordConfirm) {
      toast.error("Password and Confirm Password do not match!");
    } else if (formData.password.length < 8) {
      toast.error("Password should be at least 8 characters long!");
    } else {
      dispatch(saveRegister(formData));
    }
    setformSubmitted(true);
    // router.push("/signup/verifyemail");
  };

  useEffect(() => {
    if (!isRegisterLoading && isRegisterError) {
      toast.error(`${isRegisterError}`);
    }
  }, [isRegisterError, isRegisterLoading]);

  return (
    <section className="bg-lightbg dark:bg-darkbg h-screen">
      <ToastContainer />
      {isRegisterLoading && <AllBusinessLoader />}

      <div className="flex flex-row justify-center h-screen ">
        <div className="w-full md:w-1/2 bg-palatteFour dark:bg-darkbg flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            {/* <div className='mb-6'>
                            <Image width={500} height={500} className="transform transition-transform duration-300 ease-in-out hover:scale-105 w-[10%] h-[10%] " alt="logo" src={icon}></Image>
             </div> */}
            <div className="font-black text-3xl">Create your Account</div>
            {/* form start */}
            <div className="flex flex-col  ">
              <div className="flex flex-row items-start  gap-2 py-7 w-max mx-auto">
                <div className="transform transition-transform duration-300 ease-in-out hover:scale-105 flex flex-row justify-center items-center  p-1 border rounded-md px-7 py-2 gap-3 text-sm">
                  <FcGoogle /> Google
                </div>
                <div className="transform transition-transform duration-300 ease-in-out hover:scale-105 flex flex-row justify-center items-center  p-1 border rounded-md px-7 py-2 gap-3 text-sm">
                  <FaApple /> Apple
                </div>
                <div className="transform transition-transform duration-300 ease-in-out hover:scale-105 flex flex-row justify-center items-center p-1 border rounded-md px-7 py-2 gap-3 text-sm">
                  <IoLogoMicrosoft />
                  Microsoft
                </div>
              </div>
              <div>
                <div className="flex flex-row items-center justify-center">
                  <div className="border-b-[1px] w-1/4"></div>
                  <div className="mx-3 text-[13px] text-gray-600">
                    or continue with email
                  </div>
                  <div className="border-b-[1px] w-1/4"></div>
                </div>
              </div>
              <div
                // onSubmit={handleSubmit(formSubmit)}
                // method="post"
                className="pt-8"
              >
                <div className="">
                  <div className="mb-4">
                    <input
                      placeholder="User Name"
                      type="text"
                      id="name"
                      name="name"
                      value={formData.username}
                      onChange={handleOnChange}
                      className="text-[14px] bg-gray-50 dark:bg-darkbg border-lightborder dark:border-darkborder border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="mb-4">
                    <input
                      placeholder="Email"
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleOnChange}
                      className="text-[14px] bg-gray-50 dark:bg-darkbg border-lightborder dark:border-darkborder border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200"
                    />
                  </div>
                </div>
                <div>
                  <div className="mb-4">
                    <div className="relative">
                      <input
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleOnChange}
                        className="text-[14px] bg-gray-50 dark:bg-darkbg border-lightborder dark:border-darkborder  border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200"
                      />
                      <span
                        className="cursor-pointer text-lighttext dark:text-darktext absolute right-2 top-2"
                        onClick={handleTogglePassword}
                      >
                        {showPassword ? (
                          <EyeOff className="w-5" />
                        ) : (
                          <Eye className="w-5" />
                        )}
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <div className="relative">
                      <input
                        placeholder="Confirm Password"
                        type={showConfirmPassword ? "text" : "password"}
                        id="passwordConfirm"
                        name="passwordConfirm"
                        value={formData.passwordConfirm}
                        onChange={handleOnChange}
                        className="text-[14px] bg-gray-50 dark:bg-darkbg border-lightborder dark:border-darkborder  border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-200"
                      />
                      <span
                        className="cursor-pointer text-lighttext dark:text-darktext absolute right-2 top-2"
                        onClick={handleToggleConfirmPassword}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="w-5" />
                        ) : (
                          <Eye className="w-5" />
                        )}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center text-[13px]">
                  <input type="checkbox" name="" id="" />
                  <div>
                    <span className="px-2 "> Remember me</span>
                  </div>
                </div>
                <div>
                  <div className="my-6">
                    <button
                      onClick={formSubmit}
                      // onClick={()=>router.push("/signup/verifyemail")}
                      type="submit"
                      className="select-none bg-palatteSecondary border-[#131313] text-white font-bold py-2 px-4 w-full items-center rounded "
                      disabled={isRegisterLoading}
                      // Disable the button when loading is true
                    >
                      {isRegisterLoading ? "Signing up" : "Sign up"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* form end */}
            <div>
              <div className="pb-5 text-center text-lighttext dark:text-darktext select-none text-[14px]">
                <span>
                  Already have an account{" "}
                  <Link href={"/login"} className="font-bold text-blue-600">
                    Login here
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex w-1/2 flex-col  justify-center items-center">
          <Image
            width={100}
            height={100}
            className="transform transition-transform duration-300 ease-in-out hover:scale-105 w-[50%]"
            alt="logo"
            src={logoImg}
          ></Image>
          <div className="text-[30px] font-medium -mt-8">Nurture to lead</div>
        </div>
      </div>
    </section>
  );
};

export default Page;
