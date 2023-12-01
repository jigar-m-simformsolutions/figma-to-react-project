import { Disclosure } from "@headlessui/react";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";
import { RightArrowIcon } from "../../../../assets/Icons/RightArrowIcon";
import OutlineButton from "../../../design-patterns/OutlinedButton/OutlinedButton";
import "./Drawer.scss";

export default function Drawer({ isWhite }) {
  return (
    <Disclosure>
      {({ open, close }) => (
        <>
          <Disclosure.Button>
            <MenuOutlined
              className={`text-xl ${isWhite ? "text-white" : ""}`}
            />
          </Disclosure.Button>

          {open && (
            <Disclosure.Panel className="drawer-wrapper">
              <div>
                <div className="drawer-close-btn" onClick={close}>
                  <CloseOutlined className="text-xl" />
                </div>
                <div className="drawer-list-item">
                  <ul>
                    <li>Home</li>
                    <li>
                      <span>Landing </span>
                      <RightArrowIcon />
                    </li>
                    <li>
                      <span>Pages </span>
                      <RightArrowIcon />
                    </li>
                    <li>Docs</li>
                    <li>Help</li>
                    <li>
                      <OutlineButton block>Get it now</OutlineButton>
                    </li>
                  </ul>
                </div>
              </div>
            </Disclosure.Panel>
          )}
        </>
      )}
    </Disclosure>
  );
}
