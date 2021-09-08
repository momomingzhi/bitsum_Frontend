"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondeStage = exports.FirstStage = exports.Satellite = void 0;
const rocket_1 = require("./rocket");
class Satellite extends rocket_1.Payload {
    constructor(id) {
        super(200);
        this.id = id;
    }
}
exports.Satellite = Satellite;
class FirstStage extends rocket_1.Stage {
    constructor() {
        super([
            new rocket_1.Engine(1000),
            new rocket_1.Engine(1000),
            new rocket_1.Engine(1000),
            new rocket_1.Engine(1000),
        ]);
    }
}
exports.FirstStage = FirstStage;
class SecondeStage extends rocket_1.Stage {
    constructor() {
        super([new rocket_1.Engine(1000)]);
    }
}
exports.SecondeStage = SecondeStage;
class FreightRocketFactory {
    constructor() {
        this.satellitedId = 0;
    }
    buildRocket() {
        const rocket = new rocket_1.Rocket();
        const payload = this.createPayload();
        const stage = this.createStages();
        rocket.payload = payload;
        rocket.stage = stage;
        console.log(rocket);
        return rocket;
    }
    createPayload() {
        return new Satellite(this.satellitedId++);
    }
    createStages() {
        return [new FirstStage(), new SecondeStage()];
    }
}
console.log('ㅎㅇㅎㅇ');
const freightRocketFactory = new FreightRocketFactory();
const freightRocket = freightRocketFactory.buildRocket();
