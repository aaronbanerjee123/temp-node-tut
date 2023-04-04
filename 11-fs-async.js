const { readFile, writeFile } = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        return;
    }
    let first = result;

    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) return;

        first += ` ${result}`;
        writeFile('./content/result-async.txt', `Here is the result ${first}`, (err, result) => {
            if (err) return;
            console.log('done with this task');
        });
    });
})

console.log('starting next task');