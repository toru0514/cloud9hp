import {NextRequest, NextResponse} from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const hasMeaningfulText = (value: string) =>
  /[一-龠ぁ-ヴーａ-ｚＡ-Ｚa-zA-Z0-9]/.test(value);

export async function POST(req: NextRequest) {
  const {name, email, content, website, turnstileToken} = await req.json();

  if (website) {
    return new NextResponse("Spam detected", {status: 400});
  }

  if (!hasMeaningfulText(content || "")) {
    return new NextResponse("No meaningful content", {status: 400});
  }

  if (!turnstileToken) {
    return new NextResponse("Token missing", {status: 400});
  }

  if (!process.env.TURNSTILE_SECRET_KEY) {
    return new NextResponse("Turnstile not configured", {status: 500});
  }

  const params = new URLSearchParams();
  params.append("secret", process.env.TURNSTILE_SECRET_KEY);
  params.append("response", turnstileToken);

  const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    headers: {"Content-Type": "application/x-www-form-urlencoded"},
    body: params.toString(),
  });

  const verificationResult = await verification.json();
  if (!verificationResult.success) {
    return new NextResponse("Turnstile verification failed", {status: 400});
  }

  const sanitizedContent = content ?? "";
  const sanitizedName = name ?? "";
  const sanitizedEmail = email ?? "";

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
    subject: "【お問い合わせ】木材工房cloud9 ホームページより",
    text: `
お名前: ${sanitizedName}
メールアドレス: ${sanitizedEmail}

お問い合わせ内容:
${sanitizedContent}
    `,
  };

  // ユーザー宛の自動返信メール（追加）
  const userMail = {
    from: `"Cloud9 Woodwork" <${process.env.GMAIL_USER}>`,
    to: email,
    subject: "【木材工房cloud9】お問い合わせありがとうございます",
    text: `
${sanitizedName} 様

木材工房cloud9です。

このたびはお問い合わせいただき、
誠にありがとうございます。

以下の内容で、お問い合わせを承りました。

＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝
お名前：${sanitizedName}
メールアドレス：${sanitizedEmail}

お問い合わせ内容：
${sanitizedContent}
＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝＝

内容を確認のうえ、通常1〜3営業日以内に担当者よりご連絡いたします。
今しばらくお待ちいただけますと幸いです。

ご不明点や追加のご連絡がございましたら、
遠慮なく本メール宛にご返信ください。

今後とも、どうぞよろしくお願いいたします。

────────────────────
木材工房cloud9
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
