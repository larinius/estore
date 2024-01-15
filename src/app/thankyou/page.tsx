"use client";

import PageTitle from "@/components/ui/PageTitle";
import { Button, Typography } from "@mui/material";
import Link from "next/link";

export default function ThankYou() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="content flex flex-col w-full min-h-96 mx-auto justify-between text-center">
        <PageTitle text={"Thank You for the purchase!"} />
        
        <div className="confirm flex flex-col items-center space-y-4">
          <Typography variant='h5' color="textSecondary" className="h-24">
            Order submitted successfully
          </Typography>

          <Button variant="contained" color="primary" className="self-center">
            <Link href="/" passHref>
              <Typography variant="body1" color="inherit">
                Return to the home page
              </Typography>
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
