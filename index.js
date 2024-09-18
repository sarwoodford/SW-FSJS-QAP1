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

handleArgs(process.argv.slice(2));