export default class Pokemon{
    private readonly _id: number;
    private readonly _name: string;
    private readonly _types: string[];

    constructor(id: number, name: string, types: string[]) {
        this._id = id;
        this._name = name;
        this._types = types;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get types(): string[] {
        return this._types;
    }
}