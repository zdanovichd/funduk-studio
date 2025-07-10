const nodemailer = require("nodemailer");

export async function POST(request) {
  const res = await request.json();
  console.log(res);

  try {
    const transporter = nodemailer.createTransport({
      host: "mail.hosting.reg.ru",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_EMAIL,
        pass: process.env.NODEMAILER_PASSWORD,
      },
    });

    const info = await transporter.sendMail({
      from: '"info@funduk.studio" <info@funduk.studio>',
      to: process.env.ADMIN_EMAIL,
      subject: "Новая заявка с сайта funduk.studio",
      html: `<div>
        <ul>
          <li>Номер телефона: ${res.phone}</li>
          <li>Согласие на обработку персональных данных: ${res.consentPrivacy ? 'Да' : 'Нет'}</li>
        </ul>
      </div>`
    });

    console.log("Message sent: %s", info.messageId);
    return Response.json({ success: true, message: "Email sent successfully" });

  } catch (err) {
    console.error("Error while sending mail", err);
    return Response.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}