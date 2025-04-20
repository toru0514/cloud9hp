import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";

// Vercel は Edge Runtime で nodemailer が動かないため、明示的に Node.js を使う
export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const {name, email, content} = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"Cloud9 Form" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    subject: "【お問い合わせ】Cloud9 ホームページより",
    text: `
お名前: ${name}
メールアドレス: ${email}

お問い合わせ内容:
${content}
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({success: true});
  } catch (error) {
    console.error("メール送信エラー:", error);
    return new NextResponse("メール送信に失敗しました", {status: 500});
  }
}
