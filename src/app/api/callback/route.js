const nodemailer = require("nodemailer");

export async function POST(request) {
  const res = await request.json()
  console.log(res);
  const transporter = nodemailer.createTransport({
    host: "mail.hosting.reg.ru",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  });
  (async () => {
    try {
      const info = await transporter.sendMail({
        from: '"info@funduk.studio" <info@funduk.studio>', // sender address
        // to:  `${process.env.ADMIN_EMAIL}, ${process.env.NODEMAILER_EMAIL}`, // list of receivers
        to:  `${process.env.ADMIN_EMAIL}`,
        subject: "Новая заявка с сайта funduk.studio", // Subject line
        html: `<div>
          <ul>
            <li>Номер телефона: ${res.formData.area}</li>
          </ul>
        </div>`
      });
    } catch (err) {
      console.error("Error while sending mail", err);
    }
  })();

  return Response.json({ res })
}