import React from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const EditProfile:React.FC = () => {

  const navigate = useNavigate();
  const handleCancel = ()=>{
    navigate(-1);
  }

  return (
    <div className="flex items-center justify-center h-dvh">
      <div className=" bg-white rounded-lg shadow w-1/3 h-1/2 flex flex-col gap-5 items-center justify-center">
        <div className="mx-auto h-25 w-25 rounded-full bg-blue-50">
          <img className="h-full w-full" src="/user_profile_icon.png" alt="" />
        </div>
        <div>
          <InputField title="email" disabled/>
          <InputField title="name" />
        </div>
        <div className="text-center">
          <Button className="bg-slate-400 text-gray-800 border-0 hover:bg-slate-300 mr-5" onClick={handleCancel}>Cancel</Button>
          <Button onClick={() => {}}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
