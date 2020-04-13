const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})








// const me = new User({
//     name: 'Denis',
//     email: 'MYEMal@gmail.com   ',
//     password: 'worord123'
// })
// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log('Error!', error)
// })