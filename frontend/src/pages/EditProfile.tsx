import React from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";

const EditProfile:React.FC = () => {
  return (
    <div className="flex items-center justify-center h-dvh">
      <div className=" bg-white rounded-lg shadow w-1/3 h-1/2 flex flex-col gap-5 items-center justify-center">
        <div className="mx-auto h-25 w-25 rounded-full bg-blue-50">
          <img className="h-full w-full" src="/user_profile_icon.png" alt="" />
        </div>
        <div>
          <InputField title="email" disabled/>
          <InputField title="email" />
          <InputField title="email" />
        </div>
        <div className="text-center">
          <Button className="bg-slate-200 text-gray-800 border-2" onClick={() => {}}>Cancel</Button>
          <Button onClick={() => {}}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
