import {IModel} from "./model";

export interface IController {
    handleIncrement: IModel["increment"];
    handleDecrement: IModel["decrement"];
}
