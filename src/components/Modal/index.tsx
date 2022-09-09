import React, { useState } from "react";
import { ButtonOutline, ButtonPrimary, ButtonClose } from "@/components/Button";
import MyInput from "@/components/Input";
const MyModal = (props: any) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  return (
    <div>
      {isOpenModal && (
        <div
          className="py-12 bg-gray-700 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
          id="modal"
        >
          <div
            role="alert"
            className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
          >
            <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
              <MyInput title=" Owner Name" placeholder="Testing" />
              <MyInput
                title=" Card Number"
                placeholder="XXXX - XXXX - XXXX - XXXX"
              />
              <MyInput title=" Expiry Date" placeholder="MM/YY" />
              <MyInput title=" CVC" placeholder="MM/YY" />

              <div className="flex items-center justify-start w-full">
                <ButtonPrimary>Submit</ButtonPrimary>
                <ButtonOutline
                  onClick={() => {
                    setIsOpenModal(false);
                  }}
                >
                  Cancel
                </ButtonOutline>
              </div>
              <ButtonClose
                onClick={() => {
                  setIsOpenModal(false);
                }}
              />
            </div>
          </div>
        </div>
      )}

      <div className="w-full flex justify-center py-12" id="button">
        <ButtonPrimary
          onClick={() => {
            setIsOpenModal(true);
          }}
        >
          Open Modal
        </ButtonPrimary>
      </div>
    </div>
  );
};
export default MyModal;
