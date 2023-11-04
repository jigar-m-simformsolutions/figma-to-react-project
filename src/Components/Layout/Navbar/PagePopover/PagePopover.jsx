import { Popover } from "@headlessui/react";
import { DownArrowIcon } from "../../../../assets/Icons/downArrowIcon";
import { RightArrowIcon } from "../../../../assets/Icons/RightArrowIcon";
import { useNavigate } from "react-router-dom";
import "./PagePopover.scss";

const pagesArray = [
  {
    title: "Company",
    link: "/company",
  },
  {
    title: "Career",
    link: "/career",
  },
  {
    title: "Blog",
    link: "/blog",
  },
  {
    title: "Utility - Sign in",
    link: "/login",
  },
  {
    title: "Utility - Sign up",
    link: "/signup",
  },
  {
    title: "Utility - Password Reset",
    link: "/reset-password",
  },
  {
    title: "Utility - Error 404",
    link: "/error-404",
  },
];

export default function PagePopover() {
  const router = useNavigate();

  return (
    <Popover className="relative">
      {({ open }) => (
        <>
          <Popover.Button className="flex gap-2 items-center focus:outline-none">
            Pages <DownArrowIcon />
          </Popover.Button>
          {open && (
            <Popover.Panel className="absolute w-[20rem] right-[-10rem]">
              <div className="pages__popover__container">
                <ul>
                  {pagesArray.map((val, idx) => (
                    <li onClick={() => router(val.link)} key={idx}>
                      {val.title} <RightArrowIcon />
                    </li>
                  ))}
                </ul>
              </div>
            </Popover.Panel>
          )}
        </>
      )}
    </Popover>
  );
}
