import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuth } from "@/hooks/useAuth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getOrderItemsQuery } from "@/resolvers/query";
import Loader from "@/components/Loader/Loader";
import toast from "react-hot-toast";
import { submitRefundRequestMutation } from "@/resolvers/mutation";
import useToastMessage from "@/hooks/useToastMessage";

const ApplyForRefund = ({ refetch_refund }) => {
  const showToastMessage = useToastMessage();
  const { session } = useAuth();
  const [current_page, setCurrentPage] = React.useState(1);
  const [state, setState] = React.useState({
    order_item_id: "",
    refund_reason: "",
    description: "",
  });
  const [open, setOpen] = React.useState(false);

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["order-items", session?.token, current_page],
    queryFn: () =>
      getOrderItemsQuery({ token: session?.token, page: current_page }),
    enabled: !!session?.token && !!current_page,
  });

  const { mutate, isPending } = useMutation({
    mutationKey: ["submit-refund-request", session?.token],
    mutationFn: submitRefundRequestMutation,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!state.order_item_id || !state.refund_reason || !state.description) {
      toast.error("Please fill in all the fields");
      return;
    }

    const variables = {
      order_item_id: state.order_item_id,
      refund_reason: state.refund_reason,
      refund_description: state.description,
    };

    mutate(
      {
        variables,
        token: session?.token,
      },
      {
        onSuccess: () => {
          toast.success("Refund request submitted successfully");
          refetch_refund();
          setOpen(false);
        },
        onError: (err) => {
          showToastMessage(err?.response?.data?.message);
        },
      }
    );

    // Submit the refund request
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="px-5 py-2 text-white bg-red-400 rounded-md ">
          Apply for Refund
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Submit a request for refund</DialogTitle>
          <DialogDescription>
            <p className="text-sm">
              You can submit a refund request for the items you have purchased
              by filling out the form below. Please note that the refund request
              will be reviewed by our team and you will be notified of the
              status of your request via email.
            </p>
          </DialogDescription>
          <div className="w-full">
            {isLoading ? (
              <Loader />
            ) : isError ? (
              <div>
                <p>There was an error fetching the data</p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <div>
                  <p>Order Item</p>
                  <select
                    name="order_item_id"
                    id="order_item_id"
                    onChange={handleChange}
                    defaultValue={state.order_item_id}
                    className="w-full p-2 text-xs border border-gray-300 rounded-md"
                  >
                    <option value="">Select an order item</option>
                    {data?.data?.map((item) => (
                      <option
                        value={item.id}
                        key={item.id}
                        className="text-xs text-wrap"
                      >
                        {`Item Number #${item.order_item_number} - ${item.product.title}`}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="refund_reason">Refund Reason</label>
                  <select
                    name="refund_reason"
                    id="refund_reason"
                    onChange={handleChange}
                    defaultValue={state.refund_reason}
                    className="w-full p-2 text-sm border border-gray-300 rounded-md"
                  >
                    <option value="">Select a reason</option>
                    <option value="Fitting Issue">Fitting Issue</option>
                  </select>
                </div>
                <div>
                  <p>Refund description</p>
                  <textarea
                    name="description"
                    placeholder="Enter a description for the refund request"
                    id="description"
                    onChange={handleChange}
                    value={state.description}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  ></textarea>
                </div>
                <div>
                  <button
                    className="w-full px-5 py-2 text-white bg-red-400 rounded-md"
                    onClick={onSubmit}
                    disabled={isPending}
                  >
                    {isPending ? "Submitting..." : "Submit Refund Request"}
                  </button>
                </div>
              </div>
            )}
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ApplyForRefund;
