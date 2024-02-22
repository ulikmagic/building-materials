import { IForm } from "@/types/api";
import { NextRequest } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  const form: IForm = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.TOKEN
    }
  })

  let response: boolean = false

  try {
    const result = await transport.verify()
    response = result
  } catch (err) {
    response = false
  }

  if (!response) {
    return Response.json({ send: false })
  }

  try {
    const result = await transport.sendMail({
      from: form.gmail,
      to: process.env.EMAIL,
      subject: `Пришла заявка от ${form.name}`,
      html: `
        <p><strong>Имя: </strong> ${form.name}</p>
        <p><strong>Номер телефона: </strong> ${form.number}</p>
        ${form.gmail.length > 0 ? `<p><strong>Почта: </strong> ${form.gmail}</p>` : ''}
        <p><strong>Текст заявки: </strong> ${form.text}</p>
      `,
    })

    return Response.json({ send: true })
  } catch (err) {
    return Response.json({ send: false })
  }
}