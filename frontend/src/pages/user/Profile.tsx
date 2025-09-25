import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";

const Profile:React.FC = () => {
    const navigate = useNavigate();
  const handleClick = ()=>{
    navigate(`/profile/123/edit`);
  }
  return (
    <div className="flex items-center justify-center">
      <div className=" bg-white rounded-lg shadow w-1/3 h-1/2 p-5 flex flex-col gap-5 items-center justify-center">
        <div className="mx-auto h-25 w-25 rounded-full bg-blue-50">
          <img className="h-full w-full" src="/user_profile_icon.png" alt="" />
        </div>
        <div className="text-center">
          <h3>
            <span className="font-medium text-slate-500">Hi, </span> Nasim K
          </h3>
        </div>
        <div className="text-center">
          <Button onClick={handleClick}>Edit Profile</Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
