import Loader from "@/components/Loader/Loader";
import { deleteUploadedArtworkMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsClock } from "react-icons/bs";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineLock } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { error, PDFDocument } from "pdf-lib";
import CheckStatus, { LoadingSpinner } from "./CheckStatus";
import { useRouter } from "next/router";
import { BsCheckSquareFill } from "react-icons/bs";
import { checkPdfFile } from "@/lib/fileChecker";

const standardPageSizes = {
  A4: { width: 595.28, height: 841.89 }, // in points
  A5: { width: 419.53, height: 595.28 },
  Letter: { width: 612, height: 792 },
  // Add more standard sizes if needed
};

const getPageSize = (width, height) => {
  for (const [size, dimensions] of Object.entries(standardPageSizes)) {
    if (
      Math.abs(width - dimensions.width) < 1 &&
      Math.abs(height - dimensions.height) < 1
    ) {
      return size;
    }
  }
  return "Unknown";
};

const UploadArtworkCard = ({
  product,
  refetch,
  handleSkip,
  file_check_flags,
  file_check_loading,
  file_check_refetch,
}) => {
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [checkFile, setCheckFile] = useState({
    Bleed: {
      isLoading: false,
      result: null,
      instruction: "Every page should have minimum bleed",
    },
  });

  const { mutate, isPending } = useMutation({
    mutationKey: "delete_uploaded_artwork",
    mutationFn: deleteUploadedArtworkMutation,
  });

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      // set state as loading

      setCheckFile((prev) => {
        const newState = {};
        for (const key in prev) {
          newState[key] = { ...prev[key], isLoading: true };
        }
        return newState;
      });

      /* setUploadProgress(0); */ // Reset progress on new file selection
      /* uploadFile(selectedFile); */

      // Check file type
      // creating array form checkfile object

      const checkFileKeys = Object.keys(checkFile);
      console.log(checkFileKeys);

      let i = 0;

      do {
        const checkType = checkFileKeys[i];
        console.log(checkType);
        const result = await checkPdfFile(selectedFile, checkType);
        console.log(result);

        setCheckFile((prev) => ({
          ...prev,
          [checkType]: {
            ...prev[checkType],
            result,
            isLoading: false,
          },
        }));

        i++;
      } while (i < checkFileKeys.length);
    } else {
      alert("Please select a file to upload");
    }
  };

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
        setFile(null);
        refetch();
        toast.success("File uploaded successfully");
      })
      .catch((error) => {
        setUploadProgress(0);
        refetch();
        setFile(null);
        toast.error(
          error.response.data.message?.files?.length > 0
            ? error.response.data.message.files[0]
            : error.response.data.message
        );
      });
  };

  const deleteUploadedArtwork = () => {
    mutate(
      { file_id: product.file.id },
      {
        onSuccess: () => {
          refetch();
          toast.success("Artwork deleted successfully");
        },
        onError: (error) => {
          refetch();
          toast.error(error.response.data.message);
        },
      }
    );
  };
  console.log(checkFile);

  useEffect(() => {
    if (file_check_flags && !file_check_flags.error) {
      const stateObj = {};
      for (
        let idx = 0;
        idx < file_check_flags.data.file_check_option.length;
        idx++
      ) {
        const tempObj = {
          isLoading: false,
          result: null,
          instruction: file_check_flags.data.instruction[idx],
        };

        stateObj[file_check_flags.data.file_check_option[idx]] = tempObj;
      }
      setCheckFile((prev) => ({
        ...prev,
        ...stateObj,
      }));
    }
  }, [file_check_flags]);

  return (
    <div className="w-full mt-5 lg:pl-4 lg:w-2/3">
      <div className="flex justify-center w-full px-6 bg-white">
        <div className="w-full py-4 md:py-6 lg:py-10">
          <div className="py-3 lg:hidden">
            <p className="text-sm font-normal md:text-base lg:text-lg md:font-medium lg:font-bold text-typography">
              Item <span className="font-bold">{product.id}</span> -{" "}
              {product?.product?.title}
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 md:gap-4 lg:gap-6">
            <div>
              <label
                htmlFor="artwork_file"
                className="flex px-2 py-2 text-sm font-medium text-center rounded-md cursor-pointer text-secondgraphy lg:text-xl md:font-semibold lg:font-bold md:px-8 lg:px-8 xl:px-16 bg-primary hover:bg-primary "
              >
                <IoCloudUploadOutline className="hidden md:block text-base md:text-lg lg:text-xl mr-[2px] md:mr-2  font-semibold mt-1" />
                Add Artwork
              </label>

              {/*  accept pdf only */}
              <input
                type="file"
                id="artwork_file"
                className="sr-only"
                accept=".pdf"
                multiple
                onChange={handleFileChange}
              />
            </div>
            <button
              className="flex px-2 py-2 text-sm font-medium border rounded-md md:text-lg lg:text-xl md:font-semibold lg:font-bold md:px-8 lg:px-8 border-typography hover:bg-black hover:text-white "
              onClick={() => {
                handleSkip({ skip_cart_id: product.id });
              }}
            >
              Skip, Add Artwork Later
            </button>
          </div>
          <div className="flex items-center w-full gap-2 mt-2 md:mt-5">
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
          {/* product?.file ? (
            isPending ? (
              <div>
                <Loader />
              </div>
            ) : (
              <div className="flex justify-between w-full gap-3">
                <div>
                  <p>Artwork Added </p>
                  <Link
                    href={product.file.slug}
                    target="_blank"
                    className="underline text-primary"
                  >
                    {product.file.slug}
                  </Link>
                </div>
                <div>
                  <button
                    className="text-sm font-medium text-primary"
                    onClick={deleteUploadedArtwork}
                  >
                    <MdDelete className="w-6 h-6 text-red-500" />
                  </button>
                </div>
              </div>
            )
          ) : (
            <div className="mt-2 text-center md:mt-5">
              <p className="text-sm font-normal md:text-base md:font-medium text-typography">
                {" "}
                Artwork Later Accepted file types for this product:
              </p>
              <h4 className="text-sm font-medium md:text-base lg:text-lg md:font-serif lg:font-bold">
                PDF
              </h4>
            </div>
          ) */}

          {file ? (
            <>
              <div className="grid grid-cols-2 gap-4 mt-3">
                {Object.keys(checkFile).map((key, idx) => {
                  const stateOfKey = checkFile[key];
                  return (
                    <CheckStatus
                      key={idx}
                      text={stateOfKey.instruction}
                      status={stateOfKey.isLoading}
                      isMatched={stateOfKey.result}
                    />
                  );
                })}
                {/*  <CheckStatus
                  text="Checking sided"
                  status={checkFile.file.singleSided.isLoading}
                  isMatched={
                    checkFile.file.singleSided.result === "Single-sided"
                  }
                />
                <CheckStatus
                  text="Checking Bleed"
                  status={checkFile.file.bleed.isLoading}
                  isMatched={checkFile.file.bleed.result === true}
                />
                <CheckStatus
                  text="Checking Size"
                  status={checkFile.file.singleSided.isLoading}
                  isMatched={checkFile.file.size.result === true}
                /> */}
              </div>
            </>
          ) : (
            <div className="mt-2 text-start md:mt-5">
              {file_check_loading ? (
                <div>
                  <Loader />
                </div>
              ) : (
                <div>
                  <div className="flex items-center gap-3">
                    <span>
                      <BsCheckSquareFill />
                    </span>{" "}
                    <p className="text-sm font-normal md:text-base md:font-medium text-typography">
                      {" "}
                      Artwork Later Accepted file types for this product:{" "}
                      <strong>PDF</strong>
                    </p>
                  </div>
                  {file_check_flags &&
                    !file_check_flags.error &&
                    file_check_flags.data.instruction.map(
                      (instruction, idx) => (
                        <div className="flex items-center gap-3" key={idx}>
                          <span>
                            <BsCheckSquareFill />
                          </span>{" "}
                          <p className="text-sm font-normal md:text-base md:font-medium text-typography">
                            {" "}
                            {instruction}
                          </p>
                        </div>
                      )
                    )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      <div className="flex p-2 py-5 mt-5 mb-5 text-white border rounded-md bg-secondgraphy border-typography md:p-5 md:mb-10 ">
        <p className="mr-2 ">
          <BsClock className="text-xl md:text-2xl lg:text-3xl" />
        </p>
        <p className=" text-[10px] font-normal text-white md:text-sm">
          Please note, on completion of your order we offer a 15 minute window
          to make any final amends to your uploaded artwork via Orders in the
          MyAccount area. After these 15 minutes, no further changes can be made
          and all artwork will be processed for printing
        </p>
      </div>
      <div className="flex justify-center mt-5 mb-5 mr-auto lg:justify-end md:mb-10">
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
