import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

type SubmitBtnProps = {
  formType: boolean;
};

export default function SubmitBtn({ formType }: SubmitBtnProps) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-[#001eb9] text-white rounded-md h-[2.5rem] w-[10rem] text-sm"
      disabled={pending}
    >
      {formType ? (
        <span className="flex items-center justify-center">
          {pending ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>Add product</>
          )}
        </span>
      ) : (
        <span className="flex items-center justify-center">
          {pending ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>Save changes</>
          )}
        </span>
      )}
    </button>
  );
}
