"use client"

import { Alert, Snackbar } from "@mui/material";
import { useEffect, useState } from "react";

import {
  selectMessage,
  showErrorMessage,
  showSuccessMessage,
} from "../redux/features/message/messageSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const NotificationSnackbar = () => {
  const dispatch = useAppDispatch();
  const message = useAppSelector(selectMessage);

  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
  const [errorSnackbarOpen, setErrorSnackbarOpen] = useState(false);

  useEffect(() => {
    if (message.errorMessage) {
      setErrorSnackbarOpen(true);
    }
  }, [message.errorMessage]);

  useEffect(() => {
    if (message.successMessage) {
      setSuccessSnackbarOpen(true);
    }
  }, [message.successMessage]);

  const handleErrorSnackbarClose = () => {
    dispatch(showErrorMessage(""));
    setErrorSnackbarOpen(false);
  };

  const handleSuccessSnackbarClose = () => {
    dispatch(showSuccessMessage(""));
    setSuccessSnackbarOpen(false);
  };

  return (
    <div>
      <Snackbar
        open={successSnackbarOpen}
        autoHideDuration={7000}
        onClose={handleSuccessSnackbarClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={handleSuccessSnackbarClose}
          variant="filled"
          severity="success"
          sx={{ width: "100%" }}
        >
          {message.successMessage}
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorSnackbarOpen}
        autoHideDuration={7000}
        onClose={handleErrorSnackbarClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert
          onClose={handleErrorSnackbarClose}
          variant="filled"
          severity="error"
          sx={{ width: "100%" }}
        >
          {message.errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default NotificationSnackbar;
