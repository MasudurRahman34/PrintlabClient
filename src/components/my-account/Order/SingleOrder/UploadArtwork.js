import Loader from "@/components/Loader/Loader";
import CheckStatus from "@/components/pages/Artwork/CheckStatus";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { checkPdfFile } from "@/lib/fileChecker";
import {
  deleteUploadedArtworkMutation,
  uploadFileMutation,
} from "@/resolvers/mutation";
import { fileCheckCombinationQuery } from "@/resolvers/query";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { BsCheckSquareFill } from "react-icons/bs";
import { IoCloudUploadOutline } from "react-icons/io5";
import { MdDelete } from "react-icons/md";

const UploadArtwork = ({ item, refetch }) => {
  const showToastMessage = useToastMessage();
  const { session } = useAuth();
  const router = useRouter();
  const [file, setFile] = useState(null);

  const [checkFile, setCheckFile] = useState({
    Bleed: {
      isLoading: false,
      result: null,
      instruction: "Every page should have minimum bleed",
    },
    /* A4check: {
      isLoading: false,
      result: null,
      instruction: "Every page should be A4 size",
    },
    A2check: {
      isLoading: false,
      result: null,
      instruction: "Every page should be A2 size",
    },
    Lettercheck: {
      isLoading: false,
      result: null,
      instruction: "Every page should be letter size",
    },
    A3check: {
      isLoading: false,
      result: null,
      instruction: "Every page should be A3 size",
    }, */
  });

  // getting combination file check flags
  const {
    data: file_check_flags,
    isLoading: file_check_loading,
    refetch: file_check_refetch,
    isError: file_check_error,
  } = useQuery({
    queryKey: ["file_check_flag", item.combination, session?.token],
    queryFn: () =>
      fileCheckCombinationQuery({
        combination: item.combination,
        token: session?.token,
      }),
    enabled: !!item.combination && !!session?.token,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: "upload_file",
    mutationFn: uploadFileMutation,
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
    const formData = new FormData();
    formData.append("files", file);
    isForceUpload && formData.append("is_force_upload", 1);

    mutate(
      {
        formdata: formData,
        token: session?.token,
        cart_id: item.cart_id,
      },
      {
        onSuccess: () => {
          refetch();
          setFile(null);
          toast.success("Artwork uploaded successfully");
        },
        onError: (error) => {
          refetch();
          showToastMessage(error.response.data.message);
        },
      }
    );
  };

  const handleUploadFile = ({ isForceUpload }) => {
    uploadFile(file, isForceUpload);
  };

  useEffect(() => {
    if (file_check_flags && !file_check_error) {
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
  }, [file_check_flags, file_check_error]);
  return (
    <div>
      <p className="pb-4">No file uploaded</p>
      <div className="text-secondgraphy">
        <Dialog>
          <DialogTrigger asChild>
            <span className="font-bold underline cursor-pointer">
              Click here
            </span>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Upload File</DialogTitle>
            </DialogHeader>
            <div className="grid py-4">
              <div>
                <label
                  htmlFor="artwork_file"
                  className="flex items-center justify-center px-2 py-2 text-sm font-medium text-center rounded-md cursor-pointer text-secondgraphy lg:text-xl md:font-semibold lg:font-bold md:px-8 lg:px-8 xl:px-16 bg-primary hover:bg-primary "
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

              {item?.file ? (
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
                              <div
                                className="flex items-center gap-3"
                                key={idx}
                              >
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
                </>
              ) : null}
            </div>
            <DialogFooter>
              {file && (
                <div>
                  {Object.keys(checkFile).every(
                    (key) => !checkFile[key].isLoading
                  ) &&
                  Object.keys(checkFile).every(
                    (key) => checkFile[key].result
                  ) ? (
                    <button
                      className="flex px-4 py-2 mt-5 text-sm font-medium text-white rounded-md md:text-base md:font-semibold bg-secondgraphy "
                      onClick={handleUploadFile}
                      disabled={isPending}
                    >
                      {isPending ? "Uploading..." : "Upload Artwork"}
                      <IoCloudUploadOutline className="ml-2 text-lg md:text-xl lg:text-2xl" />
                      {/* <Loader /> */}
                    </button>
                  ) : (
                    <button
                      className="flex px-4 py-2 mt-5 text-sm font-medium text-white rounded-md md:text-base md:font-semibold bg-secondgraphy "
                      onClick={() => {
                        handleUploadFile({ isForceUpload: true });
                      }}
                      disabled={isPending}
                    >
                      {isPending ? "Uploading..." : "Force Upload Artwork"}
                      <IoCloudUploadOutline className="ml-2 text-lg md:text-xl lg:text-2xl" />
                      {/* <Loader /> */}
                    </button>
                  )}
                </div>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>{" "}
        to upload artwark
      </div>
    </div>
  );
};

export default UploadArtwork;
