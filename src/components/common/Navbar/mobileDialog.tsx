import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { MenuIcon, X } from "lucide-react";
import { FaBusinessTime } from "react-icons/fa6";
import { HiUsers } from "react-icons/hi";
import { HiOutlineUsers } from "react-icons/hi2";
import { BiSolidUser, BiUser } from "react-icons/bi";
import { PiNotepadFill, PiNotepad } from "react-icons/pi";
import { SideNavItemType } from "@/utils/types/sidebarTypes";
import Link from "next/link";

// Items set here due to a bug in while exporting the icon types
// Need possible soluitons in the future
const sidebarItems: SideNavItemType[] = [
  {
    icon: {
      icon: <FaBusinessTime />,
      fillIcon: <FaBusinessTime />,
    },
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: {
      icon: <PiNotepad />,
      fillIcon: <PiNotepadFill />,
    },
    label: "Business",
    href: "/dashboard/business",
  },

  {
    icon: {
      icon: <HiOutlineUsers />,
      fillIcon: <HiUsers />,
    },
    label: "Customers",
    href: "/dashboard/customers",
  },

  {
    icon: {
      icon: <BiUser />,
      fillIcon: <BiSolidUser />,
    },
    label: "Settings ",
    href: "/dashboard/settings",
  },
];

const MobileDialog = () => (
  <div className="z-50 ">
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="">
          <MenuIcon />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 bg-palatteTeritary bg-opacity-50" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <div className="">
            {sidebarItems.map((item) => (
              <Link key={item.label} href={item.href}>
                <div
                  className={` py-5 flex flex-row gap-6 items-center px-4  text-gray-800 hover:bg-gray-200 rounded transition  'bg-gray-200' : ''
                                    }`}
                >
                  {item.icon && item.icon.fillIcon && (
                    <>
                      {item.icon.fillIcon}
                      <span className="ml-2">{item.label}</span>
                    </>
                  )}
                </div>
              </Link>
            ))}
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  </div>
);

export default MobileDialog;
