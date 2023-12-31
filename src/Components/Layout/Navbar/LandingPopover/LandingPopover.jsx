import { DocumentationIcon } from "../../../../assets/Icons/DocumentationsIcon";
import { OverviewIcon } from "../../../../assets/Icons/OverviewIcon";
import { DownArrowIcon } from "../../../../assets/Icons/downArrowIcon";
import { Popover } from "@headlessui/react";
import "./landingPopover.scss";

const servicesArray = [
  "Services",
  "Software Library",
  "Insurance",
  "Conference",
  "Rental",
];

const ProductsArray = ["Products", "Desktop App", "Mobile App"];

export default function LandingPopover({ isWhite }) {
  return (
    <Popover className="relative z-10">
      {({ open }) => (
        <>
          <Popover.Button className="flex gap-2 items-center focus:outline-none">
            Landing <DownArrowIcon isWhite={isWhite} />
          </Popover.Button>
          {open && (
            <Popover.Panel className="absolute right-[-17rem] w-[40rem]">
              <div className="landing-popover-container">
                <div className="left-box">
                  <p className="get-started-text">Get Started</p>
                  <div className="flex gap-4 items-center">
                    <span>
                      <OverviewIcon />
                    </span>
                    <div>
                      <p>Overview</p>
                      <p className="text-sm font-extralight">
                        Quick’s most important features
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <span>
                      <DocumentationIcon />
                    </span>
                    <div>
                      <p>Documentation</p>
                      <p className="text-sm font-extralight">
                        Setup and build tools
                      </p>
                    </div>
                  </div>
                </div>
                <div className="border"></div>
                <div className="right-box">
                  <ul className="flex flex-col gap-2 text-start">
                    {servicesArray.map((val, idx) => (
                      <li key={idx}>{val}</li>
                    ))}
                  </ul>
                  <ul className="flex flex-col gap-2 text-start">
                    {ProductsArray.map((val, idx) => (
                      <li key={idx}>{val}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Popover.Panel>
          )}
        </>
      )}
    </Popover>
  );
}
