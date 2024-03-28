"use client";
import React, { useEffect } from "react";
import logoImg from "../../../../public/logo.svg";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import OTPVerificationForm from "@/components/Forms/Auth/OtpVerificatonForm";
import { useSelector } from "react-redux";
import { authSelectors } from "@/application/reducers/auth-reducer";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const {
    loading: isRegisterLoading,
    data: registerData,
    error: isRegisterError,
  } = useSelector(authSelectors.registerCall);

  useEffect(() => {
    if (!isRegisterLoading && registerData.message) {
      toast.success(`${registerData.message}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isRegisterError]);

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

  return (
    <section className="bg-lightbg dark:bg-darkbg h-screen">
      <ToastContainer />
      <div className="flex flex-row justify-center h-screen ">
        <div className="w-full md:w-1/2 bg-palatteFour dark:bg-darkbg flex justify-center items-center">
          <div className="flex flex-col justify-center items-center">
            <div className="font-black text-3xl">One last step!</div>
            <div className="text-[15px] text-gray-500 text-center font-normal md:w-96 pb-8">
              Kindly check your email for verification code
            </div>

            <OTPVerificationForm />
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
