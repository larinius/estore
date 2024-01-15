import { Typography } from "@mui/material";

const PageTitle = ({ text }: { text: string }) => {
  const decodedText = decodeURIComponent(text);

  return (
    <div className="page-title my-2 uppercase">
      <Typography variant="h4" component="h1" color="textSecondary">
        {decodedText}
      </Typography>
    </div>
  );
};

export default PageTitle;
