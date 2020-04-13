const sgMail = require('@sendgrid/mail')



sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'olbiton@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'olbiton@gmail.com',
        subject: 'Sorry to see you go ',
        text: `We are sorry to see you go ${name}. Tell us why you are leaving us so we can improve our services later`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail
}












/* sgMail.send({
    to: 'olbiton@gmail.com',
    from: 'olbiton@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually get to you.'
}) */