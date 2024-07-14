import Loader from "@/components/Loader/Loader";
import { deleteUploadedArtworkMutation } from "@/resolvers/mutation";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { IoCloudUploadOutline } from "react-icons/io5";
import { MdDelete, MdOutlineLock } from "react-icons/md";

import { useRouter } from "next/router";

import { useAuth } from "@/hooks/useAuth";
import LabAccordion from "@/components/ui/LabAccordion";

const UploadDesignService = ({
  product,
  refetch,
  handleSkip,
  file_check_flags,
  file_check_loading,
  file_check_refetch,
  isPending: isPendingSkip,
}) => {
  const { session } = useAuth();
  const router = useRouter();
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showProgress, setShowProgress] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationKey: "delete_uploaded_artwork",
    mutationFn: deleteUploadedArtworkMutation,
  });

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      // set state as loading

      await uploadFile(selectedFile);
    } else {
      alert("Please select a file to upload");
    }
  };

  const uploadFile = (file) => {
    setShowProgress(true);
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
        toast.error(
          error.response.data.message?.files?.length > 0
            ? error.response.data.message.files[0]
            : error.response.data.message
        );
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

          <div className="mb-3">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <h1 className="text-lg font-bold md:text-2xl">
                Design Request Form
              </h1>
              <Link
                className="px-4 py-2 font-semibold border rounded-md border-secondgraphy hover:bg-secondgraphy hover:text-white"
                href="/assets/docs/Design+Request+Form+-+Tradeprint (1).docx"
                download
              >
                Download Design Request Form
              </Link>
            </div>
            <div className="mt-2">
              <p className="mb-2 text-sm">
                Tell us what you need by filling in and submitting the Design
                Request Form. This will help us work together to create your
                perfect design. Once submitted one of our graphic designers will
                contact you within 24 working hours.
              </p>
              <p className="text-sm">
                Do you have any logos, colours, images or copy you want to
                include within your design? Upload these supporting files
                alongside your Design Request Form to help ensure we use the
                correct elements within your design.
              </p>
            </div>
            <div className="w-full py-1 mt-2 bg-secondary" />
          </div>

          <div className="flex items-center justify-center gap-2 mb-3 md:gap-4 lg:gap-6">
            <div>
              <label
                htmlFor="artwork_file"
                className="flex px-2 py-2 text-sm font-medium text-center rounded-md cursor-pointer text-secondgraphy lg:text-xl md:font-semibold lg:font-bold md:px-8 lg:px-8 xl:px-16 bg-primary hover:bg-primary "
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
          <div>
            <LabAccordion title="What's provided within the Design Service">
              <div>
                <div className="mb-3 text-center">
                  <h1 className="text-xl font-semibold">
                    Creation Service Summary
                  </h1>
                  <p className="mt-3 text-start">
                    We work with you to create your design from scratch,
                    following your instructions provided on the{" "}
                    <strong>Design Request form.</strong>
                  </p>
                </div>
                <div>
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

export default UploadDesignService;
