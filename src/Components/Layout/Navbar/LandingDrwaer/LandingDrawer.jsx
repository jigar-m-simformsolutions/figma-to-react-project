import { useState } from "react";
import { RightArrowIcon } from "../../../../assets/Icons/RightArrowIcon";
import { DownArrowIcon } from "../../../../assets/Icons/downArrowIcon";

export default function LandingDrawer() {
  const [parentListOpen, setParentListOpen] = useState(false);
  const [childListOpen1, setChildListOpen1] = useState(false);
  const [childListOpen2, setChildListOpen2] = useState(false);

  return (
    <span onClick={() => setParentListOpen((ps) => !ps)}>
      <span>Landing </span>
      {parentListOpen ? <DownArrowIcon /> : <RightArrowIcon />}
      {parentListOpen && (
        <ul>
          <li onClick={() => setChildListOpen1((ps) => !ps)}>
            <span>Services</span>
            {childListOpen1 ? <DownArrowIcon /> : <RightArrowIcon />}
            {childListOpen1 && (
              <ul>
                <li>Software Library</li>
                <li>Insurance</li>
                <li>Converence</li>
                <li>Rental</li>
              </ul>
            )}
          </li>
          <li onClick={() => setChildListOpen2((ps) => !ps)}>
            <span>Products</span>
            {childListOpen2 ? <DownArrowIcon /> : <RightArrowIcon />}
            {childListOpen2 && (
              <ul>
                <li>Desktop App</li>
                <li>Mobile App</li>
              </ul>
            )}
          </li>
        </ul>
      )}
    </span>
  );
}
