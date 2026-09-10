import React from "react";
import { menuItems } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ActiveLink from "../common/ActiveLink";
import { TMenuItem } from "@/app/types";

const Sidebar = () => {
  return (
    <div className="border-r border-gray-200 p-5">
      <a href="/" className="logo font-bold text-3xl inline-block mb-5">
        <b className="text-primary">U</b>cademy
      </a>
      <ul className="flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            url={item.url}
            title={item.title}
            icon={item.icon}
          ></MenuItem>
        ))}
      </ul>
    </div>
  );
};
function MenuItem({ url = "/", title = "", icon }: TMenuItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  );
}
export default Sidebar;
