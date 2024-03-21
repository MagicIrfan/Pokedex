import PokeType from "./pokeType";

export default class Pokemon{
    private readonly _id: number;
    private readonly _name: string;
    private readonly _types: PokeType[];

    constructor(id: number, name: string, types: PokeType[]) {
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

    get types(): any[] {
        return this._types;
    }
}