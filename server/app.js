const express = require('express');
const app = express();

const PORT = 3001;


app.get('/', (req, res) => {
    res.send("hello");
})

app.get('/notes', (req, res) => {
   res.send(notes)
})

app.delete('/notes', (req, res) => {
    const {id} = req.body;
     notes = notes.filter((note) => note.id !== id);
     res.send(notes);
})

app.post('/notes', (req, res) => {
    const {note} = req.body;
    notes.push(note);
    res.send("Note added successfully")
})

app.listen(PORT);

console.log('Web Server is listening at port '+ (process.env.port || 3000));


var notes = [{
    id: "1",
    text: "Note for meeting One",
    title: "Note one",
    color: "#dfdfdf",
    date: "23 Jan 2022"

},
{
    id: "2",
    text: "Note for meeting Two",
    title: "Note two",
    color: "#dfdfdf",
    date: "23 Jan 2022"

},
{
    id: "3",
    text: "Note for meeting Three",
    title: "Note three",
    color: "#dfdfdf",
    date: "23 Jan 2022"

},
{
    id: "4",
    text: "Note for meeting Four",
    title: "Note Four",
    color: "#dfdfdf",
    date: "23 Jan 2022"

}

]