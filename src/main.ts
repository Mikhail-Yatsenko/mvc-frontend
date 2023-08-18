import {CounterView} from "./modules/counter/Counter.view.ts";
import {CounterView as CounterViewSecond} from "./modules/counter-second/Counter.view.ts";

const counter = new CounterView(document.getElementById('root-counter'))
counter.mount();

const counterTwo = new CounterViewSecond(document.getElementById('root-counter-second'));
counterTwo.mount();
