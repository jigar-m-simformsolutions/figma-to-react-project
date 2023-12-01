import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Disclosure } from "@headlessui/react";

export default function FaqQuesion({ key, question, answer }) {
  return (
    <div className="">
      <Disclosure
        key={key}
        as="div"
        className="w-full mb-4 shadow-md border rounded"
      >
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`w-full text-left flex justify-between items-center p-6 font-[700] ${
                open
                  ? "border-b-0 pb-0 text-[#1565D8] font-[700]"
                  : "font-[600]"
              }`}
            >
              <span>{question}</span>
              <span
                className={`text-base font-[900] ${
                  open ? "text-[#1565D8]" : ""
                }`}
              >
                {open ? <MinusOutlined /> : <PlusOutlined />}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel
              className={`text-left p-6 border-t-0 ${open ? "pt-2" : ""}`}
            >
              {answer}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
