export class Todo {
    id: number;
    title: string;
    complete = false;
    editMode = false;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
