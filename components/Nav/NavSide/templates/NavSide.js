import React from "react";
import Link from "next/link";
import slugify from "slugify";
import { useRouter } from "next/router";

const MenuItem = ({ item,params }) => {
  console.log(typeof params)
  const router = useRouter();
  const active =
    "text-blue-500 border-b-2 border-blue-500 cursor-pointer dark:text-white dark:border-white";
  const isActive = router.query.section === slugify(item.title, { lower: true });
  const activeStyle = isActive ? active : "";
  const hrefSrc =
    "/" +
    router.query.package +
    "/" +
    router.query.feature +
    "/" +
    router.query.view +
    "/" +
    encodeURIComponent(slugify(item.title, { lower: true }))
    +"?"+params
    ;
  return (
    <li>
      <Link
        href={hrefSrc}
        className={`${activeStyle} flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700`}
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
  );
};

const Sidebar = ({ items,params}) => {
  return (
    <>
      <div className="max-w-2xl mx-auto">
        <aside className="w-64" aria-label="Sidebar">
          <div className="px-3 py-4 overflow-y-auto rounded">
            <ul className="space-y-2">
              {items.map((item) => (
                <MenuItem item={item} params={params} key={item.title} />
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
