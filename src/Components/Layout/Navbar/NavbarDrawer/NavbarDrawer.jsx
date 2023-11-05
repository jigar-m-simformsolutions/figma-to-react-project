import { Disclosure } from "@headlessui/react";
import OutlineButton from "../../../design-patterns/OutlinedButton/OutlinedButton";
import { MenuOutlined, CloseOutlined, RightOutlined } from "@ant-design/icons";

export default function NavbarDrawer() {
  return (
    <Disclosure>
      {({ open, close }) => (
        <>
          <Disclosure.Button>
            <MenuOutlined />
          </Disclosure.Button>

          {open && (
            <Disclosure.Panel className="drawer__wrapper">
              <div>
                <div className="drawer__close__btn" onClick={close}>
                  <CloseOutlined />
                </div>
                <div className="drawer__list__item">
                  <ul>
                    <li>Home</li>
                    <li>
                      <span>Landing </span>
                      <RightOutlined />
                    </li>
                    <li>
                      <span>Pages </span>
                      <RightOutlined />
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
