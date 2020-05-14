const msg = 'This is my first java script code';
const msg1 = 'this is my\n first java script code';
const msg2 = 'this is my\n' + 
             '\'first\' java script code';

//literals:
//Object = {}
//Boolean = true, false
//String = ' ', ""
//ES6: Template Literals ---> Back Tick Chars --> ``

let product = function(){
    return 'Apple';
}
let name = 'Tom';
const mailBody = `Hi ${name} ${2+4} ${product()},

This is Anand here!
Thanks for adding me in your 'mailing' list

Have a great day !

Regards,
Anand
`
console.log(mailBody);