import * as readline from 'node:readline';
import * as fs from 'node:fs';
import { exit, stdin, stdout } from 'node:process';


const DEFAULT_TASKS_PATH = "./tasks.js";


export default class Todoz {
    readline;
    #tasksPath;

    constructor(tasksPath = null) {
        this.readline = readline.createInterface({
            input: stdin,
            output: stdout,
            prompt: "(todoz:) "
        });
        this.readline.prompt();
        this.#tasksPath = (tasksPath)? tasksPath : DEFAULT_TASKS_PATH;
    }

    run() {
        this.readline.on('line', (input) => {
            switch (input.trim().toLowerCase()) {
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
                    this.readline.close();
                    exit(0);
                default:
                    console.log(`${input} is an unknown command`);
            }
            this.readline.prompt();
        })

        this.readline.on('close', () => {
            console.log('Have a great day!');
        });
    }
}
