import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";

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

  // 管理者宛のメール（既存）
  const adminMail = {
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

  // ユーザー宛の自動返信メール（追加）
  const userMail = {
    from: `"Cloud9 Woodwork" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "【木材工房Cloud9】お問い合わせありがとうございます",
    text: `
${name} 様

木材工房Cloud9へのお問い合わせありがとうございます。
以下の内容でお問い合わせを受け付けました。

＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
お名前：${name}
メールアドレス：${email}

お問い合わせ内容：
${content}
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

担当者より通常1〜3日以内にご連絡いたします。
今しばらくお待ちくださいませ。

────────────────────
木材工房Cloud9
https://cloud9woodwork.com/
Email: cloud9woodwork@gmail.com
────────────────────
    `,
  };

  try {
    // 並列で両方のメールを送信
    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(userMail),
    ]);

    return NextResponse.json({success: true});
  } catch (error) {
    console.error("メール送信エラー:", error);
    return new NextResponse("メール送信に失敗しました", {status: 500});
  }
}
