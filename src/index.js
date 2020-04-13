const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT

const multer = require('multer')
const upload = multer({
    dest: 'images',
    limits: {
        fileSize: 1000000,
    },
    fileFilter(req, file, cb) {
        //if (!file.originalname.endsWith('.pdf')) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('Please upload a PDF'))
        }
        cb(undefined, true)


        /* cb(new Error('File must be a JPG'))
        cb(undefined, true)
        cb(undefined, false) */
    }
})


app.post('/upload', upload.single('upload'), (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})



app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})




/* const main = async() => {
    /* const task = await Task.findById('5e8d53e8f13cd13c147cd708')
    await task.populate('owner').execPopulate()

    console.log(task.owner) 
    const user = await User.findById('5e8d5ec42197113dbcf93f57')
    await user.populate('tasks').execPopulate()
    console.log(user.tasks)
}

main() */

/* const bcrypt = require('bcrypt')

const myFunction = async() => {
    const password = 'Red12345!'
    const hashedPassword = await bcrypt.hash(password, 8)

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bcrypt.compare('Red12345!', hashedPassword)
    console.log(isMatch)
}







/* app.post('/users', (req, res) => {
    const user = new User(req.body)

    user.save().then(() => {
        res.status(201).send(user)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get('/users', (req, res) => {
    User.find({}).then((users) => {
        res.send(users)
    }).catch((e) => {
        res.status(500).send()
    })
})

app.get('/users/:id', (req, res) => {
    const _id = req.params.id

    User.findById(_id).then((user) => {
        if (!user) {
            return res.status(404).send()
        }

        res.send(user)
    }).catch((e) => {
        res.status(500).send()
    })

    console.log(req.params)
})

app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        res.status(201).send(task)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get('/tasks', (req, res) => {
    Task.find({}).then((tasks) => {
        res.send(tasks)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.get('/tasks/:id', (req, res) => {
    const _id = req.params.id

    Task.findById(_id).then((task) => {
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
        console.log(task)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
}) */