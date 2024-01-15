import { RootState } from "@/redux/store";
import { ThunkAction } from "@reduxjs/toolkit";

import { showErrorMessage, showSuccessMessage } from "../message/messageSlice";
import { clearCart } from "./cartSlice";
import { FormData } from "@/interfaces/FormData";

import { sendEmail } from "@/services/sendMail";
import { convertCartToPlainList } from "@/utils/ProductHelpers";

export const submitOrder =
  (form: FormData): ThunkAction<Promise<any>, RootState, unknown, any> =>
  async (dispatch: any, getState: any) => {
    const products = getState().cart.items;
    const productList = convertCartToPlainList(products);
    const emailformData = {
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      phone: form.phone,
      message: productList,
    };

    try {
      console.log("Order details", form);
      console.log("Ordered products", productList);

      const response = await sendEmail(emailformData);

      if (response.success) {
        dispatch(showSuccessMessage("Order successful"));
        dispatch(clearCart());
      } else {
        dispatch(
          showErrorMessage(
            `Error: ${response.error || "Failed to submit order"}`
          )
        );
      }

      return response;
    } catch (error) {
      console.log("Sending ERROR", form);
      dispatch(showErrorMessage("Error: Failed to submit order"));
    }
  };
