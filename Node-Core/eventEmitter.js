const EventEmitter = require('events');
const myEmitter = new EventEmitter();

let n = 0;
const someFunct = function () {
    n++
    console.log(`value of n is : ${n}`);
}

myEmitter.on('event', someFunct);

myEmitter.emit('event')
myEmitter.emit('event')
myEmitter.emit('event')

// handling Errors.

const EventEmitter1 = require('events');
const myEmitterErr = new EventEmitter1();

const handleError = function (errorCode) {
    console.error("this is an error log of code :", errorCode);
}

myEmitterErr.on('error', handleError);

myEmitterErr.emit('error', 5)


