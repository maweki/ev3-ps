exports.motor = function(port) {
    var ev3dev = require('ev3dev-lang');
    var ports = {'A': ev3dev.OUTPUT_A,
     'B': ev3dev.OUTPUT_B,
     'C': ev3dev.OUTPUT_C,
     'D': ev3dev.OUTPUT_D}
    return new ev3dev.Motor(ports[port]);
};

exports.run = function(motor) {
    return function(speed) {
        motor.speedSp = speed;
        motor.command = 'run-forever';
        return true;
    }
};

exports.stop = function(motor) {
        motor.command = 'stop';
        return true;
};
