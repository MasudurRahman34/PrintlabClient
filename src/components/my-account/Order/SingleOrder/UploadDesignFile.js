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
import LabAccordion from "@/components/ui/LabAccordion";
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

const UploadDesignFile = ({ item, refetch }) => {
  const showToastMessage = useToastMessage();
  const { session } = useAuth();
  const router = useRouter();
  const [file, setFile] = useState(null);

  const { mutate, isPending } = useMutation({
    mutationKey: "upload_file",
    mutationFn: uploadFileMutation,
  });

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      // set state as loading
    } else {
      alert("Please select a file to upload");
    }
  };

  const uploadFile = (file) => {
    const formData = new FormData();
    formData.append("files", file);

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
          toast.success("Design Request File uploaded successfully");
        },
        onError: (error) => {
          refetch();
          showToastMessage(error.response.data.message);
        },
      }
    );
  };

  const handleUploadFile = () => {
    uploadFile(file);
  };

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
          <DialogContent className="sm:max-w-xl">
            <DialogHeader>
              <DialogTitle className="text-sm md:text-base">
                Upload File
              </DialogTitle>
            </DialogHeader>
            <div className="grid py-4">
              <div className="mb-3">
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                  <h1 className="text-lg font-bold ">Design Request Form</h1>
                  <Link
                    className="px-4 py-2 text-sm font-semibold border rounded-md border-secondgraphy hover:bg-secondgraphy hover:text-white"
                    href="/assets/docs/Design+Request+Form+-+Tradeprint (1).docx"
                    download
                  >
                    Download Design Request Form
                  </Link>
                </div>
                <div className="mt-2">
                  <p className="mb-2 text-sm">
                    Tell us what you need by filling in and submitting the
                    Design Request Form. This will help us work together to
                    create your perfect design. Once submitted one of our
                    graphic designers will contact you within 24 working hours.
                  </p>
                  <p className="text-sm">
                    Do you have any logos, colours, images or copy you want to
                    include within your design? Upload these supporting files
                    alongside your Design Request Form to help ensure we use the
                    correct elements within your design.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-2 mb-3 md:gap-4 lg:gap-6">
                <div>
                  <label
                    htmlFor="artwork_file"
                    className="flex px-2 py-2 text-sm font-medium text-center rounded-md cursor-pointer text-secondgraphy md:font-semibold lg:font-bold md:px-8 lg:px-8 xl:px-16 bg-primary hover:bg-primary "
                  >
                    <IoCloudUploadOutline className="hidden md:block text-base md:text-lg lg:text-xl mr-[2px] md:mr-2  font-semibold mt-1" />
                    Upload Design Request File
                  </label>

                  {/*  accept pdf only */}
                  <input
                    type="file"
                    id="artwork_file"
                    className="sr-only"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              {file && (
                <div className="pb-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-semibold">
                        Selected file: {file.name}
                      </p>
                    </div>
                  </div>
                </div>
              )}
              <div>
                <LabAccordion title="What's provided within the Design Service">
                  <div>
                    <div className="mb-3 text-center">
                      <h1 className="text-base font-semibold">
                        Creation Service Summary
                      </h1>
                      <p className="mt-3 text-sm text-start">
                        We work with you to create your design from scratch,
                        following your instructions provided on the{" "}
                        <strong>Design Request form.</strong>
                      </p>
                    </div>
                    <div className="text-sm">
                      <p>What is provided as part of the Design Service:</p>
                      <ul className="list-disc list-inside">
                        <li>Initial design concepts</li>
                        <li>Unlimited revisions</li>
                        <li>Final print-ready artwork</li>
                      </ul>
                    </div>
                  </div>
                </LabAccordion>
              </div>
            </div>
            <DialogFooter>
              {file && (
                <button
                  className="flex px-4 py-2 mt-5 text-sm font-medium text-white rounded-md md:text-base md:font-semibold bg-secondgraphy "
                  onClick={handleUploadFile}
                  disabled={isPending}
                >
                  {isPending ? "Uploading..." : "Upload Design Request File"}
                  <IoCloudUploadOutline className="ml-2 text-lg md:text-xl lg:text-2xl" />
                  {/* <Loader /> */}
                </button>
              )}
            </DialogFooter>
          </DialogContent>
        </Dialog>{" "}
        to design request file
      </div>
    </div>
  );
};

export default UploadDesignFile;
