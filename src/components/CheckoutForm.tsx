"use client";

import React, { useState } from "react";
import { TextField, Button, Typography, Grid } from "@mui/material";

import {
  parsePhoneNumberFromString,
  AsYouType,
  isValidPhoneNumber,
  validatePhoneNumberLength,
} from "libphonenumber-js";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { submitOrder } from "@/redux/features/cart/cartThunk";
import { FormData } from "@/interfaces/FormData";
import { useRouter } from "next/navigation";

const CheckoutForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [phoneError, setPhoneError] = useState<string>("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    phone: "",
  });

  const hasFieldErrors = (): boolean => {
    return firstNameError || lastNameError || !!phoneError;
  };

  const getPhoneNumberErrorMessage = (error: string): string => {
    switch (error) {
      case "INVALID_FORMAT":
        return "Invalid phone number format.";
      case "TOO_SHORT":
        return "Phone number is too short.";
      case "UNKNOWN":
        return "Unknown phone number error.";
      default:
        return "Invalid phone number.";
    }
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    let formattedValue = value;

    if (name === "firstName") {
      const isValid = /^[a-zA-Z\s]+$/.test(value);
      setFirstNameError(!isValid);
    }

    if (name === "lastName") {
      const isValid = /^[a-zA-Z\s]+$/.test(value);
      setLastNameError(!isValid);
    }

    if (name === "phone") {
      const country = "UA";
      const formatter = new AsYouType(country);
      formattedValue = formatter.input(value);

      const isValid = isValidPhoneNumber(formattedValue, country);
      const lengthError = validatePhoneNumberLength(formattedValue, country);

      setPhoneError(
        lengthError
          ? getPhoneNumberErrorMessage(lengthError)
          : isValid
          ? ""
          : "Invalid phone number"
      );
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: formattedValue,
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const phoneNumberObject = parsePhoneNumberFromString(formData.phone, "UA");
    const phoneNumber = phoneNumberObject
      ? phoneNumberObject.formatInternational()
      : "";
    const formattedPhoneNumber = phoneNumber.replace(/\s/g, "");

    const payload = {
      email: formData.email,
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formattedPhoneNumber,
    };

    const result = await dispatch(submitOrder(payload));

    if (result?.success) {
      router.push("/thankyou");
    }
  };

  return (
    <div className="m-4">
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleFormChange}
              fullWidth
              required
              error={firstNameError}
              helperText={firstNameError ? "Invalid first name." : ""}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleFormChange}
              fullWidth
              required
              error={lastNameError}
              helperText={lastNameError ? "Invalid last name." : ""}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleFormChange}
              fullWidth
              required
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleFormChange}
              fullWidth
              required
              error={!!phoneError}
              helperText={phoneError}
            />
          </Grid>

          <Grid item xs={12} className="flex justify-center">
            <div className="flex-grow mt-6 md:max-w-96 ">
              <Button
                disabled={hasFieldErrors()}
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                className="submit-order-btn"
              >
                Submit
              </Button>
            </div>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CheckoutForm;
