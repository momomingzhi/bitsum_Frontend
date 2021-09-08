"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = exports.Stage = exports.Payload = exports.Rocket = exports.RocketFactory = void 0;
/** @format */
class RocketFactory {
    buildRocket() {
        const rocket = new Rocket();
        const payload = this.createPayload();
        const stage = this.createStages();
        rocket.payload = payload;
        rocket.stage = stage;
        return rocket;
    }
    createPayload() {
        return new Payload(0);
    }
    createStages() {
        const engine = new Engine(100);
        const stage = new Stage([engine]);
        return [stage];
    }
}
exports.RocketFactory = RocketFactory;
class Rocket {
}
exports.Rocket = Rocket;
class Payload {
    constructor(weight) {
        this.weight = weight;
    }
}
exports.Payload = Payload;
class Stage {
    constructor(engines) {
        this.engines = engines;
    }
}
exports.Stage = Stage;
class Engine {
    constructor(power) {
        this.power = power;
    }
}
exports.Engine = Engine;
const rocketFactory = new RocketFactory();
const rocket = rocketFactory.buildRocket();
