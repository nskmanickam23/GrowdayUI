"use client";
import Image from "next/image";
import Link from "next/link";
import logoImage from "../../public/logo.svg";
import homeHero from "../assets/landing-hero.png";
import { Routes } from "@/utils/enums/constants";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();

  const tokenLocal = localStorage.getItem("token")

  useEffect(() => {
    if (tokenLocal) {
      router.replace('/dashboard');
    }
  }, [tokenLocal, router]);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     router.push("/"); // Redirect to login page if token doesn't exist
  //   }
  // }, []);

  // if (localStorage.getItem("token")) {
  //   return null; // Show loading indicator or redirect immediately
  // }

  return (
    <main className="bg-lightbg dark:bg-darkbg h-screen">
      <div className="h-screen w-screen">
        <div className="flex justify-center items-center">
          <div className="leftSec">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-lightbg dark:bg-darkbg text-gray-700 dark:text-gray-400 text-center pt-[10%] font-light text-[1.5rem] md:text-[2rem]">
                Upscale your business with
              </div>
              <Image
                width={500}
                height={500}
                className=""
                alt="logo"
                src={logoImage}
              ></Image>
            </div>

            <div className="pt-7 flex flex-row gap-5 justify-center items-center text-gray-700 dark:text-gray-500 font-medium text-xl md:text-md ">
              <Link
                href={Routes.signUp}
                className="transform transition-transform duration-300 ease-in-out hover:scale-105 bg-palatteSecondary rounded-md px-5 py-3 text-gray-50 font-light text-base"
              >
                Start free trial
              </Link>
              <Link
                href={Routes.login}
                className="transform transition-transform duration-300 ease-in-out hover:scale-105 bg-palettePrimary rounded-md px-5 py-3 text-gray-50 font-light text-base"
              >
                Login
              </Link>
            </div>
          </div>
          <div className="rightSec flex justify-center items-center">
            <Image src={homeHero} alt="" height={750} />
          </div>
        </div>
      </div>
    </main>
  );
}
