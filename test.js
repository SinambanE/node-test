const fs = require('fs')

fs.writeFileSync('notes.txt', 'I AM THE GREATEST ENGINEER IN THE WORLD\n')

fs.appendFileSync('notes.txt', 'YES YOU ARE!!\n')