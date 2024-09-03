//  Immidiately Invoked function Expressions (IIFE)

(function avinash(){                           //  named IIFE
    console.log(`My name is avinash`);
}) ();                                        // if two functins are given , must use ';'

( () => {                           //  unnamed IIFE
    console.log(`My name is Vikas`);
}) ();

( (name) => {                           //  named IIFE
    console.log(`My name is Vikas friend of ${name}`);
}) ("Avinash")