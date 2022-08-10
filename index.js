const express = require('express');
const cors = require('cors');


const notes = [
    {
        "id": 1,
        "content": "Todo number 1",
        "date": "10/8/2022",
        "important": true
    },
    {
        "id": 2,
        "content": "Todo number 2",
        "date": "11/8/2022",
        "important": true
    },
    {
        "id": 3,
        "content": "Todo number 3",
        "date": "12/8/2022",
        "important": true
    }
]

const app = express()

//middle wares
app.use(cors())
app.use(express.json())

// puerto "x" elegido x heroku || puerto 3001
const port = proce.env.PORT || 3001

app.listen(port, ()=> {
    console.log("server up on ", port)
})

app.get('/', (req, res) => {
    res.send(`<h1>Hello World</h1>`)
})

// all notes
app.get('/api/notes', (req, res) => {
    res.json(notes)
})

// one note
app.get('/api/notes/:id', (req, res) => {
    const {id} = req.params
    const note = notes.find(note => note.id === parseInt(id))
    if(note){
        res.json(note)
    }else{
        res.status(404).end()
    }
})

//
app.get((req, res) => {
    const note = req.body

    if(!note || !note.content){
        return res.status(404).json({
            error: "note.content missing"
        })
    }

    const ids = notes.map(note => note.id)
    const maxId = Math.max(...ids)

    const newNote = {
        id: maxId + 1,
        content: note.content,
        important: typeof note.important !== undefined ? note.important : false,
        date: new Date().toISOString()
    }
})