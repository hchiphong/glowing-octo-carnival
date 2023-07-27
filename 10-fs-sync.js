const { readFileSync, writeFileSync } = require('fs')
console.log('starting')
const first = readFileSync('./content/first.txt', 'utf8')

console.log(first)

writeFileSync('./content/result-sync.txt',
    `Here is the result ${first}`
    // , {flag: 'a'}
)

console.log('done with the task')
