export class Todo {
    id: number;
    title: string;
    complete = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
