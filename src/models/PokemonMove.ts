
export class PokemonMove{
    private readonly _name:string;
    private readonly _description:string;
    private readonly _power:number;
    private readonly _accuracy:number;
    private readonly _pp:number;
    private readonly _priority:number;
    private readonly _moveType:string;
    private readonly _pokemonType:string;
    private readonly _target:string;

    constructor(name: string, description: string, power: number, accuracy: number, pp: number, priority: number, moveType: string, pokemonType: string, target: string) {
        this._name = name;
        this._description = description;
        this._power = power;
        this._accuracy = accuracy;
        this._pp = pp;
        this._priority = priority;
        this._moveType = moveType;
        this._pokemonType = pokemonType;
        this._target = target;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get power(): number {
        return this._power;
    }

    get accuracy(): number {
        return this._accuracy;
    }

    get pp(): number {
        return this._pp;
    }

    get priority(): number {
        return this._priority;
    }

    get moveType(): string {
        return this._moveType;
    }

    get pokemonType(): string {
        return this._pokemonType;
    }

    get target(): string {
        return this._target;
    }
}