import CircularProgress from "@mui/material/CircularProgress";

export default function LoadSpinner() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <CircularProgress />
    </div>
  );
}
