import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const { name, email, query } = await req.json()

  try {
    const data = await resend.emails.send({
      from: 'Website <website@neha-aradhya.in>',
      to: [process.env.RECEIVING_EMAIL || "" ], // Replace with your receiving email
      subject: `New Query from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Query:</strong><br/>${query}</p>
      `,
    })

    return NextResponse.json({ message: 'Your letter has been sent!' })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'There was an error sending your letter.' }, { status: 500 })
  }
}