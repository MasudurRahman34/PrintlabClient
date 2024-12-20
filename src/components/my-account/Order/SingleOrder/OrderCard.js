import { useAuth } from "@/hooks/useAuth";
import useToastMessage from "@/hooks/useToastMessage";
import { formatPrice } from "@/lib/utils";
import axios from "axios";
import React from "react";
import UploadArtwork from "./UploadArtwork";
import { useMutation } from "@tanstack/react-query";
import { deleteUploadedArtworkMutation } from "@/resolvers/mutation";
import toast from "react-hot-toast";
import UploadDesignFile from "./UploadDesignFile";
import DateFormatter from "@/components/ui/DateFormatter";

const OrderCard = ({ fullWidth, item, refetch }) => {
  const { session } = useAuth();
  const showToastMessage = useToastMessage();
  const [isGenerating, setIsGenerating] = React.useState(false);

  const { mutate, isPending } = useMutation({
    mutationKey: "delete_uploaded_artwork",
    mutationFn: deleteUploadedArtworkMutation,
  });

  const handleDownload = async (url, filename, fileExtension) => {
    try {
      setIsGenerating(true);
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${session?.token}`,
        },
        responseType: "blob",
      });

      const result = await response.data;

      const blob = new Blob([result]);
      const link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = `${filename}`;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsGenerating(false);
    } catch (error) {
      showToastMessage(error.response.data.message);
      setIsGenerating(false);
    }
  };

  const deleteUploadedArtwork = () => {
    mutate(
      { file_id: item.file.id, token: session?.token },
      {
        onSuccess: () => {
          refetch();
          toast.success("Artwork File deleted successfully");
        },
        onError: (error) => {
          showToastMessage(error.response.data.message);
          refetch();
        },
      }
    );
  };

  return (
    <div
      className={` mb-4 overflow-hidden  rounded border border-secondgraphy ${
        fullWidth ? "w-full" : "max-w-xl w-full"
      }`}
    >
      <div className="flex items-center justify-between gap-5 px-3 py-2 bg-secondgraphy">
        <div className="flex flex-col justify-between w-full gap-2 text-white md:items-center md:flex-row">
          <p className="text-sm">
            Order placed{" "}
            <span className="font-semibold">
              <DateFormatter dateInput={item.created_at} />
            </span>
          </p>
          <p className="text-sm">
            Item <span className="font-semibold">{item.id}</span>
          </p>
          <p className="text-sm">
            Order Total{" "}
            <span className="font-semibold">{formatPrice(item.total)}</span>
          </p>
        </div>
        {/* <div>
          <button className="underline">Close</button>
        </div> */}
      </div>
      <div className="w-full ">
        <div className="w-full bg-secondgraphy">
          <div className="grid w-full grid-cols-12 ">
            <div className="w-full col-span-12 p-4 bg-white border border-secondgraphy md:col-span-5">
              <div>
                {item.status === "Pending" || item.status === "On Hold" ? (
                  <h1 className="text-xl font-semibold text-yellow-600">
                    {item.status}
                  </h1>
                ) : item.status === "Processing" ||
                  item.status === "Designing" ||
                  item.status === "Printing" ||
                  item.status === "Dispatched" ? (
                  <h1 className="text-xl font-semibold text-green-500">
                    {item.status}
                  </h1>
                ) : (
                  <h1 className="text-xl font-semibold text-red-500">
                    {item.status}
                  </h1>
                )}
                <p className="text-sm">
                  Item Number{" "}
                  <span className="font-semibold">
                    #{item.order_item_number}
                  </span>
                </p>
              </div>
              <div className="mb-2">
                <h1 className="text-xl font-semibold">
                  {item.product_title || item.product.title}
                </h1>

                <p className="text-sm">
                  Qty: {item.quantity}, Cobination: {item.combination_string},
                </p>
              </div>
              {item?.quantity_variation && (
                <div>
                  <h1 className="text-lg font-semibold">Quantity</h1>
                  <div>
                    {Object.keys(item.quantity_variation).map((key) => (
                      <div key={key} className="text-sm ">
                        <strong>{key}</strong> :{" "}
                        <div className="inline">
                          {Object.keys(item.quantity_variation[key]).map(
                            (key2) => (
                              <span key={key2}>
                                {item.quantity_variation[key][key2] > 0 && (
                                  <>
                                    <strong>{key2}</strong> (
                                    {item.quantity_variation[key][key2]}){", "}
                                  </>
                                )}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div>
                <h1 className="text-lg font-semibold">
                  {item.artwork_service.title}
                </h1>
              </div>
            </div>
            <div className="w-full col-span-12 p-4 bg-white border md:col-span-5 border-secondgraphy">
              <div className="mb-3">
                <h1 className="text-lg font-semibold">Delivery To</h1>
                <p className="text-sm">
                  {item.shipping_address.first_name +
                    " " +
                    item.shipping_address.last_name}
                </p>
                <p className="text-sm">
                  {item.shipping_address.address},{" "}
                  {item.shipping_address.country}, {item.shipping_address.phone}
                  , {item.shipping_address.email},{" "}
                  {item.shipping_address.post_code}
                </p>
              </div>
              <div className="">
                <h1 className="text-lg font-semibold">Delivery By</h1>
                <p className="text-sm">
                  <DateFormatter dateInput={item.delivery_date} />
                </p>
              </div>
              {item.tracking_number && (
                <div className="">
                  <h1 className="text-lg font-semibold">Delivery By</h1>
                  <p className="text-sm">{item.tracking_number}</p>
                </div>
              )}
            </div>
            <div className="w-full col-span-12 p-4 bg-white border md:col-span-2 border-secondgraphy">
              <h1 className="text-lg font-semibold">File</h1>
              <div>
                {item?.file ? (
                  <div>
                    <button
                      onClick={() => {
                        handleDownload(
                          item.file.url,
                          item.file.slug,
                          item.file.extension
                        );
                      }}
                      className="flex items-center w-12 gap-2 p-2 bg-gray-200 rounded"
                      disabled={isGenerating}
                    >
                      {isGenerating ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          className="w-8 h-8 animate-spin text-secondgraphy"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" />
                          <path
                            fillRule="evenodd"
                            d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z"
                          />
                        </svg>
                      ) : (
                        <img
                          src={
                            item.file.extension === "pdf"
                              ? "/assets/images/icons8-pdf-96.png"
                              : "/assets/images/icons8-docs-480.png"
                          }
                          alt="Docs"
                        />
                      )}
                    </button>
                    {item.file.is_force_upload === 1 && (
                      <p className="text-red-500">Force Uploaded</p>
                    )}

                    <button
                      onClick={deleteUploadedArtwork}
                      className="p-2 mt-2 text-red-500 underline rounded hover:bg-red-500 hover:text-white"
                      disabled={isPending}
                    >
                      {isPending ? "Removing..." : "Remove"}
                    </button>
                  </div>
                ) : item.is_design_service ? (
                  <UploadDesignFile item={item} refetch={refetch} />
                ) : (
                  <UploadArtwork item={item} refetch={refetch} />
                )}
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
