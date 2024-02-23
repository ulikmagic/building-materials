import { IAuthForm } from "@/components/Header/components/AuthModal";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const form: IAuthForm = await request.json();
  let auth = false

  if (form.username === process.env.USERNAME && form.password === process.env.PASSWORD) {
    auth = true
  }

  return Response.json({ auth })
}