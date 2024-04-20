import Box from "@/components/ui/Box";
import React from "react";

const PasswordForm = () => {
  return (
    <form action="" className="text-sm md:text-base">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-primary">
        <h1 className="w-full max-w-[200px] font-bold">Current Password</h1>
        <input type="password" className="w-full p-2 border border-primary" />
      </div>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-primary">
        <h1 className="w-full max-w-[200px] font-bold">New Password</h1>
        <input type="password" className="w-full p-2 border border-primary" />
      </div>
      <div className="flex items-center gap-2 px-4 py-3">
        <h1 className="w-full max-w-[200px] font-bold">Confirm Password</h1>
        <input type="password" className="w-full p-2 border border-primary" />
      </div>

      <div className="px-4 py-3 ">
        <button className="w-full px-4 py-2 rounded text-secondgraphy bg-primary">
          Save Changes
        </button>

        <button className="w-full px-4 py-2 mt-2 border rounded border-primary text-secondgraphy">
          Cancel
        </button>
      </div>
    </form>
  );
};

const PasswordTable = () => {
  return (
    <div className="text-sm md:text-base">
      <div className="flex gap-2 px-4 py-3 border-b border-primary ">
        <h1 className="w-full max-w-[200px] font-bold"> Password</h1>
        <p>********</p>
      </div>
    </div>
  );
};

const Password = () => {
  const [isEdit, setIsEdit] = React.useState(false);
  return (
    <Box
      boxTitle="Password"
      buttonText="change"
      action={() => {
        setIsEdit(!isEdit);
      }}
    >
      {isEdit ? <PasswordForm /> : <PasswordTable />}
    </Box>
  );
};

export default Password;
