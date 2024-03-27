import Link from "next/link";
import { clearUser } from "@/ReduxStore/slices/userSlice";

// import { selectIsUserLoggedIn } from "@/ReduxStore/store/Store";

import { useSelector, useDispatch } from "react-redux";
import {
  ShoppingBag,
  CreditCard,
  User,
  Settings,
  DollarSign,
  FileTerminal,
  LogOutIcon,
} from "lucide-react";
const ProfileMenu = () => {
  //const isUserLoggedIn = useSelector(selectIsUserLoggedIn);
  const isUserLoggedIn = true;

  const dispatch = useDispatch();
  const handleLogout = () => {
    // Clear user data from the store and perform any other necessary actions (e.g., redirect to the login page)
    dispatch(clearUser());
    // Additional logout logic...
  };
  return (
    <div
      className="absolute right-5 top-[50px] mt-2 bg-white dark:bg-black  border rounded shadow-md"
      role="group"
    >
      <Link href="/user/profile" className="flex items-center p-2">
        <User size={20} className="mr-2 w-4 h-4" />
        Profile
      </Link>

      <Link href="/user/orders" className="flex items-center p-2">
        <ShoppingBag size={20} className="mr-2 w-4 h-4" />
        Orders
      </Link>

      <Link href="/user/payment" className="flex items-center p-2">
        <CreditCard size={20} className="mr-2 w-4 h-4" />
        Payment
      </Link>

      <Link href="/user/settings" className="flex items-center p-2">
        <Settings size={20} className="mr-2 w-4 h-4" />
        Settings
      </Link>

      <Link href="/user/transactions" className="flex items-center p-2">
        <DollarSign size={20} className="mr-2 w-4 h-4" />
        Transactions
      </Link>

      <Link href="/user/logs" className="flex items-center p-2">
        <FileTerminal size={20} className="mr-2 w-4 h-4" />
        Logs
      </Link>
      {isUserLoggedIn && (
        <button onClick={handleLogout} className="flex items-center p-2">
          <LogOutIcon size={20} className="mr-2 w-4 h-4" />
          Logout
        </button>
      )}
    </div>
  );
};
export default ProfileMenu;
