import React from "react";
import Link from "next/link";
import slugify from "slugify";
import { useRouter } from "next/router";
import { layoutParams } from "../../../../utils/layoutsParams";

const Sidebar = ({ menuItems }) => {
  const router = useRouter();
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <aside className="w-64" aria-label="Sidebar">
          <div className="px-3 py-4 overflow-y-auto rounded">
            <ul className="space-y-2">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <Link
                    href={`/${router.query.package}/${router.query.feature}/${router.query.view}/${encodeURIComponent(slugify(item.title,{lower:true}))}${layoutParams}`}
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {item.icon}
                    <span className="ml-3">{item.title}</span>
                    {item.badge && (
                      <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
