import { NextResponse } from "next/server";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import { validateString, getErrorMessage } from "@/lib/utils";
import React from "react";

const resend = new Resend('re_5DCb4JQQ_G7EG62kM2q7E4UZw28mC5f58'); // use env var

export async function POST(req: Request) {
  const body = await req.json();
  const { senderEmail, message } = body;

  if (!validateString(senderEmail, 500) || !validateString(message, 5000)) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const data = await resend.emails.send({
      from: "Message from <onboarding@resend.dev>",
      to: "yaksean.dev@gmail.com",
      subject: "You got a message from the port",
      reply_to: senderEmail,
      react: React.createElement(ContactFormEmail, {
        message,
        senderEmail,
      }),
    });

    return NextResponse.json({ success: true, data });
  } catch (error: unknown) {
    return NextResponse.json({ error: getErrorMessage(error) }, { status: 500 });
  }
}
