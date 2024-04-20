import Box from "@/components/ui/Box";
import React from "react";

const UserInformationForm = () => {
  return (
    <form action="" className="text-sm md:text-base">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-primary">
        <h1 className="w-full max-w-[200px] font-bold">First Name</h1>
        <input type="text" className="w-full p-2 border border-primary" />
      </div>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-primary">
        <h1 className="w-full max-w-[200px] font-bold">Last Name</h1>
        <input type="text" className="w-full p-2 border border-primary" />
      </div>
      <div className="flex items-center gap-2 px-4 py-3">
        <h1 className="w-full max-w-[200px] font-bold">Email</h1>
        <input type="email" className="w-full p-2 border border-primary" />
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

const UserInformationTable = () => {
  return (
    <div>
      <div className="flex gap-2 px-4 py-3 text-sm border-b md:text-base border-primary">
        <h1 className="w-full max-w-[200px] font-bold">First Name</h1>
        <p>Tanmoy</p>
      </div>
      <div className="flex gap-2 px-4 py-3 text-sm border-b md:text-base border-primary ">
        <h1 className="w-full max-w-[200px] font-bold">Last Name</h1>
        <p>Hassan</p>
      </div>
      <div className="flex gap-2 px-4 py-3 text-sm md:text-base ">
        <h1 className="w-full max-w-[200px] font-bold">Email</h1>
        <p>taijulislam.st9@gmail.com</p>
      </div>
    </div>
  );
};

const UserInformation = () => {
  const [isEdit, setIsEdit] = React.useState(false);
  return (
    <Box
      boxTitle="User Information"
      buttonText={isEdit ? "Cancel" : "Edit"}
      action={() => {
        setIsEdit(!isEdit);
      }}
    >
      {isEdit ? <UserInformationForm /> : <UserInformationTable />}
    </Box>
  );
};

export default UserInformation;
