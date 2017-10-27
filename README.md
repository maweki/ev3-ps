# EV3 with purescript

## Setup

You should use `nvm` (https://github.com/creationix/nvm) to handle a local node installation and use it `nvm use stable`.

Install global dependencies `npm install -g bower pulp purs`.

`cd` into the project directory and install local dependencies `npm install bluebird ev3dev-lang`.

Start working on the project.

## Trying it out

Build it with `pulp build --to test.js`.

scp it to the robot `scp test.js robot@192.168.1.X:` and run it `ssh robot@192.168.1.X node test.js`

## Interface

### JS Interface

The JS interface works the following way:

```
var ev3dev = require('ev3dev-lang');
var m1 = new ev3dev.Motor(ev3dev.OUTPUT_B); // create motor interface for some physical port
console.log(m1.speed); // print current actual speed
m1.speedSp = 500; // set target speed
m1.command = 'run-forever'; // give command - now the motor starts
```

The JS interface exposes every attribute provided by the ev3dev kernel interface. Here are all commands and modes documented: http://docs.ev3dev.org/projects/lego-linux-drivers/en/ev3dev-jessie/motors.html#tacho-motor-subsystem  

Alternatively, if this is done quickly, one could autogenerate bindings: https://github.com/ev3dev/ev3dev-lang/blob/develop/spec.json as it is done for the js interface

### Purescript FFI

To create a reference to a JS function from PS, define the function in `Module.purs` with its type `foreign import motor :: String -> Motor` and then provide an implementation in `Module.js`:

```
exports.motor = function(port) {
    var ev3dev = require('ev3dev-lang');
    var ports = {'A': ev3dev.OUTPUT_A,
     'B': ev3dev.OUTPUT_B,
     'C': ev3dev.OUTPUT_C,
     'D': ev3dev.OUTPUT_D}
    return new ev3dev.Motor(ports[port]);
};
```

### Functional Interface

There is no real functional interface yet. That's what we can work on :)

I exposed some functions for movement that look pure in the types but aren't.

Alternatively, if this is done quickly, one could autogenerate bindings: https://github.com/ev3dev/ev3dev-lang/blob/develop/spec.json as it is done for the js interface
