import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { BsClock } from "react-icons/bs";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineLock } from "react-icons/md";

const UploadArtworkCard = ({ product }) => {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
      setUploadProgress(0); // Reset progress on new file selection
      uploadFile(selectedFile);
    } else {
      alert("Please select a PDF file.");
    }
  };

  console.log(product);

  const uploadFile = (file) => {
    const url = `https://printlabapi.devtaijul.com/api/v1/cart/${product.id}/files`; // Replace with your upload URL
    const formData = new FormData();
    formData.append("files", file);

    axios
      .post(url, formData, {
        onUploadProgress: (progressEvent) => {
          const percentComplete = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentComplete);
        },
      })
      .then((response) => {
        setUploadProgress(100);
        toast.success("File uploaded successfully");
      })
      .catch((error) => {
        setUploadProgress(0);
        toast.error(error.response.data.message);
      });
  };

  return (
    <div className="w-full px-5 mt-5 lg:w-2/3">
      <div className="flex justify-center bg-white">
        <div className="py-4 md:py-6 lg:py-10">
          <div className="flex gap-2 md:gap-4 lg:gap-6">
            <div>
              <label
                htmlFor="artwork_file"
                className="flex px-2 py-2 text-base font-medium rounded-md cursor-pointer text-secondgraphy md:text-lg lg:text-xl md:font-semibold lg:font-bold md:px-8 lg:px-8 xl:px-16 bg-primary hover:bg-primary "
              >
                <IoCloudUploadOutline className=" text-base md:text-lg lg:text-xl mr-[2px] md:mr-2  font-semibold mt-1" />
                Add Artwork
              </label>

              <input
                type="file"
                id="artwork_file"
                className="sr-only"
                multiple
                onChange={handleFileChange}
                accept="application/pdf,application/vnd.ms-excel"
              />
            </div>
            <button className="flex px-2 py-2 text-base font-medium border rounded-md md:text-lg lg:text-xl md:font-semibold lg:font-bold md:px-8 lg:px-8 border-typography hover:bg-black hover:text-white ">
              Skip, Add Artwork Later
            </button>
          </div>
          <div className="flex items-center gap-2 mt-2 md:mt-5">
            {file && (
              <>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-center">{uploadProgress}%</p>
              </>
            )}
          </div>
          <div className="mt-2 text-center md:mt-5">
            <p className="text-sm font-normal md:text-base md:font-medium text-typography">
              {" "}
              Artwork Later Accepted file types for this product:
            </p>
            <h4 className="text-sm font-medium md:text-base lg:text-lg md:font-serif lg:font-bold">
              PDF
            </h4>
          </div>
        </div>
      </div>

      <div className="flex p-2 py-5 mt-5 mb-5 border rounded-md border-typography md:p-5 md:mb-10 ">
        <p className="mr-2 ">
          <BsClock className="text-xl md:text-2xl lg:text-3xl" />
        </p>
        <p className=" text-[10px] font-normal text-typography md:text-sm">
          Please note, on completion of your order we offer a 15 minute window
          to make any final amends to your uploaded artwork via Orders in the
          MyAccount area. After these 15 minutes, no further changes can be made
          and all artwork will be processed for printing
        </p>
      </div>
      <div className="flex justify-end mt-5 mb-5 mr-auto md:mb-10">
        <button
          className="flex  text-[14px] md:text-lg lg:text-xl font-medium md:font-semibold lg:font-bold py-3 px-5 md:px-10 lg:px-16 xl:px-20 bg-primary hover:bg-primary text-secondgraphy rounded-md  "
          onClick={() => {
            router.push("/checkout");
          }}
        >
          <MdOutlineLock className="text-base md:text-xl mt-[2px] md:mt-0 lg:text-2xl mr-1 " />
          Continue To Delivery & Payment
        </button>
      </div>
    </div>
  );
};

export default UploadArtworkCard;
