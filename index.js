#!/usr/bin/env node

const process = require('node:process');

function helpFlag(){
    console.log(`Please enter fields using the format: generate (length (#))(numbers)(uppercase)(symbols) \n
        (length(#)): specify the length you want your password to be. If you don't specify an amount, the default length is 8.\n
        (numbers):   specify whether you want numbers in your password or not. \n
        (uppercase): specify whether you want uppercase letters or not. \n
        (symbols):   specify whether you want symbols in your password or not.\n
        \n
        *if (numbers), (uppercase) and/or (symbols) aren't specified, none will be included.\n
        \n
        Example: \n
        generate length 10 numbers symbols\n
        generate uppercase symbols\n
        generate length 7 uppercase`);
}

function handleArgs(args){
    const defaultLength = 8;
    let length = defaultLength;
    let numbers = false;
    let upperCase = false;
    let symbols = false;

    try{
        for(let i=0; i< args.length; i++){
            const arg = args[i];
            switch(arg){
                case 'help':
                    helpFlag();
                    return;
                case 'length':
                    if(i+1 >= args.length || isNaN(args[i + 1])){
                        throw new Error('Invalid password length. Please enter a positive number.');
                    }
                    length = parseInt(args[i+1], 10);
                    if (length <=0){
                        throw new Error('Invalid password length. Please enter a positive number.');
                    }
                    i++
                    break;
                case 'numbers':
                    numbers = true;
                    break;
                case 'uppercase':
                    upperCase = true;
                    break;
                case 'symbols':
                    symbols = true;
                    break;
                default: 
                    helpFlag();
                    return;
                    
            }
        }
    }
}

handleArgs(process.argv.slice(2));