'use client'
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Sidebar from "@/components/Sidebar/Sidebar";
import Navbar from "@/components/common/Navbar/Navbar";


interface LayoutProps {
  children: React.ReactNode;
}

const Dashboard: React.FC<LayoutProps> = ({ children }) => {

  const router = useRouter();
  const token = useSelector((state: any) => state.auth.token); // Accessing token from Redux state
  console.log(token, "token here");

  //change to this token if we need to avoid logging in on each refresh
  const tokenLocal = localStorage.getItem("token")

  useEffect(() => {
    if (!tokenLocal) {
      router.replace('/login');
    }
  }, [tokenLocal, router]);


  return (
    <>
      <div className="flex flex-row h-screen bg-lightbg dark:bg-darkbg">
        <div className="hidden md:flex select-none">
          <Sidebar />
        </div>
        <main className="w-full ">
          <div>
            <Navbar />
          </div>
          <div className="">{children}</div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
