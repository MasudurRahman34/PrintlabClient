import Loader from "@/components/Loader/Loader";
import { deleteUploadedArtworkMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsClock } from "react-icons/bs";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdDelete, MdOutlineLock } from "react-icons/md";

import CheckStatus from "./CheckStatus";
import { useRouter } from "next/router";
import { BsCheckSquareFill } from "react-icons/bs";
import { checkPdfFile } from "@/lib/fileChecker";
import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";

const UploadArtworkCard = ({
  product,
  refetch,
  handleSkip,
  file_check_flags,
  file_check_loading,
  file_check_refetch,
  isPending: isPendingSkip,
}) => {
  const showToastMessage = useToastMessage();
  const { session } = useAuth();
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const { discount_type, discount, discount_code } = router.query;

  const [checkFile, setCheckFile] = useState({
    Bleed: {
      isLoading: false,
      result: null,
      instruction: "Every page should have minimum bleed",
    },
  });

  // generating link for discount save
  const link =
    discount_code && discount_type && discount
      ? `?discount_type=${discount_type}&discount=${discount}&discount_code=${discount_code}`
      : "";

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

      let i = 0;

      do {
        const checkType = checkFileKeys[i];

        const result = await checkPdfFile(selectedFile, checkType);

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

      // if all the checks are passed then upload the file
      const allChecksPassed = checkFileKeys.every(
        (key) => checkFile[key].result
      );

      if (allChecksPassed) {
        console.log("I am passed");
      }
    } else {
      alert("Please select a file to upload");
    }
  };

  const uploadFile = (file, isForceUpload = false) => {
    setShowProgress(true);
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/cart/${product.id}/files`; // Replace with your upload URL
    const formData = new FormData();
    formData.append("files", file);
    isForceUpload && formData.append("is_force_upload", 1);

    axios
      .post(url, formData, {
        onUploadProgress: (progressEvent) => {
          const percentComplete = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );
          setUploadProgress(percentComplete);
        },
        headers: {
          Authorization: `Bearer ${session?.token}`,
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
        setShowProgress(false);
        refetch();
        setFile(null);
        showToastMessage(error?.response?.data?.message);
      });
  };

  const deleteUploadedArtwork = () => {
    mutate(
      { file_id: product.file.id, token: session?.token },
      {
        onSuccess: () => {
          refetch();
          setFile(null);
          setUploadProgress(0);
          setShowProgress(false);
          toast.success("Artwork deleted successfully");
        },
        onError: (error) => {
          refetch();
          toast.error(error.response.data.message);
        },
      }
    );
  };

  const handleUploadFile = ({ isForceUpload }) => {
    uploadFile(file, isForceUpload);
  };

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
              {product?.product?.title}{" "}
              <span className="font-semibold">
                {product.is_skipped === 1 && "- Skipped"}
              </span>
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 mb-3 md:gap-4 lg:gap-6">
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
                onChange={handleFileChange}
              />
            </div>
            <button
              className="flex px-2 py-2 text-sm font-medium border rounded-md md:text-lg lg:text-xl md:font-semibold lg:font-bold md:px-8 lg:px-8 border-typography hover:bg-black hover:text-white "
              disabled={product?.file && isPendingSkip}
              onClick={() => {
                handleSkip({ skip_cart_id: product.id });
              }}
            >
              {isPendingSkip ? "Skipping" : "Skip, Add Artwork Later"}
            </button>
          </div>

          {product?.file ? (
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
            <div className="mt-2 text-start md:mt-5">
              {file_check_loading ? (
                <div>
                  <Loader />
                </div>
              ) : (
                !file && (
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
                )
              )}
            </div>
          )}

          {file ? (
            <>
              <div className="grid gap-4 mt-3 grid-col-span-1">
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
              </div>
              <div>
                {Object.keys(checkFile).every(
                  (key) => !checkFile[key].isLoading
                ) &&
                Object.keys(checkFile).every((key) => checkFile[key].result) ? (
                  <button
                    className="flex px-4 py-2 mt-5 text-sm font-medium text-white rounded-md md:text-base md:font-semibold lg:text-lg lg:font-bold bg-secondgraphy "
                    onClick={handleUploadFile}
                  >
                    Upload Artwork
                    <IoCloudUploadOutline className="ml-2 text-lg md:text-xl lg:text-2xl" />
                    {/* <Loader /> */}
                  </button>
                ) : (
                  <button
                    className="flex px-4 py-2 mt-5 text-sm font-medium text-white rounded-md md:text-base md:font-semibold lg:text-lg lg:font-bold bg-secondgraphy "
                    onClick={() => {
                      handleUploadFile({ isForceUpload: true });
                    }}
                  >
                    Force Upload
                    <IoCloudUploadOutline className="ml-2 text-lg md:text-xl lg:text-2xl" />
                    {/* <Loader /> */}
                  </button>
                )}
              </div>
            </>
          ) : null}
          <div className="flex items-center w-full gap-2 mt-2 md:mt-5">
            {showProgress && (
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
        </div>
      </div>

      <div className="flex p-2 py-5 mt-5 mb-5 text-white border rounded-md bg-secondgraphy border-typography md:p-5 md:mb-10 ">
        <p className="mr-2 ">
          <BsClock className="text-xl md:text-2xl lg:text-3xl" />
        </p>
        <p className="text-xs font-normal text-white md:text-sm">
          Please note, on completion of your order we offer a 15 minute window
          to make any final amends to your uploaded artwork via Orders in the
          MyAccount area. After these 15 minutes, no further changes can be made
          and all artwork will be processed for printing
        </p>
      </div>
      <div className="justify-center hidden mt-5 mb-5 mr-auto lg:flex lg:justify-end md:mb-10 md">
        <button
          className="flex px-5 py-3 text-sm font-medium rounded-md md:text-lg lg:text-base md:font-semibold lg:font-bold md:px-10 lg:px-16 xl:px-20 bg-primary hover:bg-primary text-secondgraphy "
          onClick={() => {
            router.push("/checkout" + link);
          }}
        >
          <MdOutlineLock className="text-base md:text-xl mt-[2px] md:mt-0 lg:text-2xl mr-1 " />
          Continue To Delivery & Payment
        </button>
      </div>
      <div className="fixed bottom-0 left-0 z-50 flex justify-center w-full py-5 mr-auto bg-white border border-t-2 shadow-inner lg:hidden">
        <button
          className="flex px-5 py-3 text-sm font-medium rounded-md md:text-lg lg:text-base md:font-semibold lg:font-bold md:px-10 lg:px-16 xl:px-20 bg-primary hover:bg-primary text-secondgraphy "
          onClick={() => {
            router.push("/checkout" + link);
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
