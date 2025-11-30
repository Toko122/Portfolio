import Contact from '../../../models/contact'
import { NextResponse } from "next/server";
import connectDb from '@/lib/connectDb';
import nodemailer from 'nodemailer'
export async function POST(req) {
      try{
        await connectDb()

        const { name, email, message } = await req.json();

        if (!name || !email || !message) {
          return NextResponse.json(
           { message: "All fields are required" },
           { status: 400 }
          );   
        }
              
        const newMessage = new Contact({
            name,
            email,
            message
        })


        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.USER_EMAIL,
                pass: process.env.NODEMAILER
            }
        })

        const mailOptions = {
           from: email,
           to: process.env.USER_EMAIL,
           subject: `New Contact Form Message from ${name}`,
           html: `
             <h2>📩 New Message Received</h2>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> <p>${message}</p></p>
             
           `,
         };     

         await transporter.sendMail(mailOptions)

         return NextResponse.json(
           { message: "Message sent successfully!" },
           { status: 200 }
         );         

      }catch(err){
        return NextResponse.json({message: "server error"}, {status: 500})
      }
}