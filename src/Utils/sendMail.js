const CONFIG = require("../config/config");
const nodemailer = require("nodemailer");
const logger = require("../logger");



const sendMail = async ( email ) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: CONFIG.EMAIL.USER,
        Password: CONFIG.EMAIL.PASSWORD,
      },
    });

    const mailOption = {
      from: CONFIG.EMAIL.USER,
      to: email,
      subject: "hello friend how are you ",
      text: "hello friend where are you from ",
    };
    const data = await transporter.sendMail(mailOption);
      logger.info(`${data.accepted} ${data.response}${data.messageId}`);
     
  } catch (error) {
    return error;
  }
};

module.exports = sendMail;
