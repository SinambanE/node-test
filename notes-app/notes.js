const fs = require('fs')
const chalk = require('chalk')

const getNotes = () => {
    return "Your notes..."
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find(note => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        const success = 'Note added!'
        console.log(chalk.green.inverse(success))
        saveNotes(notes)
    } else {
        const error = 'ERROR : Duplicate note exists!'
        console.log(chalk.red.inverse(error))
    }
}

const removeNote = (title) => {
    const notes = loadNotes()
    const newNotes = notes.filter(note => note.title !== title)
    
    if (notes.length === newNotes.length) {
        const error = 'ERROR : No matching note exists!'
        console.log(chalk.red.inverse(error))
    } else {
        const success = 'Note removed!'
        console.log(chalk.green.inverse(success))
        saveNotes(newNotes)
    }

}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.white.inverse('Your notes'))
    notes.forEach((note, index) => {
        console.log((index + 1).toString() + ". " + note.title)
    })
}

const readNote = (title) => {
    const notes = loadNotes()
    const targetNote = notes.find(note => note.title === title)
    if (targetNote) {
        const success = "Note Found!"
        console.log(chalk.green.inverse(success))
        console.log('Title : ' + chalk.cyan(targetNote.title))
        console.log('Body : ' + targetNote.body)
    } else {
        const error = "ERROR : No note found!"
        console.log(chalk.red.inverse(error))
    }
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}