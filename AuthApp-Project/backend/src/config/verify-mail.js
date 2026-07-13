import nodeMailer from "nodemailer";

export const verify = async (token, email) => {
  //! STEP 1: CREATE A TRANSPORT
  const transport = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.AUTH_USER,
      pass: process.env.AUTH_PASS,
    },
  });

  //! STEP 2: CONFIGURE A MAIL
  const mailConfiguration = {
    from: process.env.AUTH_USER,
    to: email,
    subject: "Verification Email",
    html: `
        <h1>Welcome User</h1>
        <p>Please verify yourself</p>
        <a href='http://localhost:5173/verify-email/${token}'>
            <button>Verify</button>
        </a>
    `,
  };

  //! STEP 3: SEND A MAIL
  transport.sendMail(mailConfiguration, (err, info) => {
    if (err) {
      throw new Error(err);
    }
    console.log("Email sent successfully", info);
  });
};
