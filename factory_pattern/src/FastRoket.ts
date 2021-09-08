/** @format */

import { Engine, Payload, Rocket, RocketFactory, Stage } from './rocket';

export class Satellite extends Payload {
    constructor(public id: number) {
        super(200);
    }
}
export class FirstStage extends Stage {
    constructor() {
        super([
            new Engine(1000),
            new Engine(1000),
            new Engine(1000),
            new Engine(1000),
        ]);
    }
}
export class SecondeStage extends Stage {
    constructor() {
        super([new Engine(1000)]);
    }
}
type FreightRocketStages = [FirstStage, SecondeStage];
class FreightRocketFactory implements RocketFactory {
    private satellitedId: number = 0;
    buildRocket(): Rocket {
        const rocket = new Rocket();
        const payload = this.createPayload();
        const stage = this.createStages();
        rocket.payload = payload;
        rocket.stage = stage;
        console.log(rocket);
        return rocket;
    }
    createPayload(): Satellite {
        return new Satellite(this.satellitedId++);
    }
    createStages(): FreightRocketStages {
        return [new FirstStage(), new SecondeStage()];
    }
}
console.log('ㅎㅇㅎㅇ');
const freightRocketFactory = new FreightRocketFactory();
const freightRocket = freightRocketFactory.buildRocket();
