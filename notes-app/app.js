const yargs = require('yargs')
const notesUtils = require('./notes.js')

// customize yargs version
yargs.version('1.1.0')

// Create Add Command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtils.addNote(argv.title, argv.body)
    }
})

// Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title to delete',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtils.removeNote(argv.title)
    }
})

// Create List Command
yargs.command({
    command: 'list',
    describe: 'List notes',
    handler() {
        notesUtils.listNotes()
    }
})

// Create Read Command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title to read',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notesUtils.readNote(argv.title)
    }
})

yargs.parse()