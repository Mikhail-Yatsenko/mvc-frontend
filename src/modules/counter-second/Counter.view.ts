import {IView} from "../../types/counter-second/view";
import {CounterController} from "./Counter.controller";
import {CounterModel} from "./Counter.model.ts";

export class CounterView implements IView {
    model: CounterModel;
    controller: CounterController;
    root: HTMLElement;

    private title: HTMLElement;
    private incrementButton: HTMLElement;
    private decrementButton: HTMLElement;

    constructor(root: HTMLElement) {
        this.root = root;
        this.model = new CounterModel(this);
        this.controller = new CounterController(this.model);

        this.title = document.createElement("h1");
        this.title.innerText = 'Value = 0';
        this.incrementButton = document.createElement("button");
        this.incrementButton.innerText = 'increment';
        this.decrementButton = document.createElement("button");
        this.decrementButton.innerText = 'decrement';

        this.bindListeners();
    }

    private bindListeners() {
        this.incrementButton.addEventListener('click', this.controller.handleIncrement.bind(this));
        this.decrementButton.addEventListener('click', this.controller.handleDecrement.bind(this));
    }

    public updateTitle() {
        this.title.innerText = `Value = ${this.model.value}`;
    }

    public mount() {
        this.root.appendChild(this.title);
        this.root.appendChild(this.incrementButton);
        this.root.appendChild(this.decrementButton);
    }
}
