#!/usr/bin/env node

const process = require('node:process');

// PRESENT HELP FLAG BEFORE USER INPUTS ANYTHING

console.log (helpFlag());

// PASSWORD GENERATOR FUNCTION: chnages characters used based on user arguments passed in

function passwordGenerator(length, numbers, upperCase, symbols){
    let chars = 'abcdefghijklmnopqrstuvwxyz';

    if(numbers === true){
        chars += '0123456789';
    }

    if(upperCase === true){
        chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (symbols === true){
        chars += '!@#$%^&*()<>?_+=-:;.,/|';
    }

    let password = '';
    for (let i=0; i<length; i++){
        const random = Math.floor(Math.random() * chars.length);
        password += chars[random];
    }
    return password;
}

// HELP FLAG FUNCTION: presents information to user on how to use program and how to see the help message

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
        generate length 7 uppercase\n
        \n
        Running in Terminal: \n
        node index.js length 10 symbols\n
        node index.js numbers uppercase\n
        node index.js length 6 uppercase symbols \n
        \n
        Run: node index.js help to see this message`);
        
}

// HANDLE ARGS FUNCTION: changes the given randomized password based on which arguments the user specified
//                       and handles invalid length values

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

        // print password to user
        
        const password = passwordGenerator(length, numbers, upperCase, symbols);
        console.log(`Your Password: ${password}`);
    }catch (error){
        console.log(error.message);
        helpFlag();
    }
}
if (process.argv.length <= 2){
    console.log(`Your Password: ${passwordGenerator(8, false, false, false)}`);
}else{
    handleArgs(process.argv.slice(2));
}

