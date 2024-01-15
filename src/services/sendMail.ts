"use server";

import { Resend } from "resend";
import EmailTemplate from "@/components/email/EmailTemplate";
import { EmailFormData } from "@/interfaces/FormData";


export const sendEmail = async (formData: EmailFormData) => {

  const name = formData.name;
  const email = formData.email;
  const phone = formData.phone;
  const message = formData.message;
  
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "E-commerse store admin <manager@estore-demo.pp.ua>",
      to: email,
      subject: "New order",
      react: EmailTemplate({ name, email, phone, message }),
    });
    return {
      error: null,
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      error: (error as Error).message,
      success: false,
    };
  }
};
