import * as readline from 'node:readline';
import { exit, stdin, stdout } from 'node:process';

let todoz = readline.createInterface({
    input: stdin,
    output: stdout,
    prompt: "(todoz:) "
});

todoz.prompt();

todoz.on('line', (input) => {
    switch (input.trim()) {
        case 'add':
            console.log('adds a task');
            break;
        case 'edit':
            console.log('edits a task');
            break;
        case 'checkout':
            console.log('ends a task');
            break;
        case 'help':
            console.log('view avaliable commands');
            break;
        case 'exit':
            console.log('press CTRL-c to exit');
            break;
        default:
            console.log(`${input} is an unknown command`);
    }
    todoz.prompt();
}).on('close', () => {
      console.log('Have a great day!');
      exit(0);
});
