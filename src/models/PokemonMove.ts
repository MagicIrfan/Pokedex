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

    constructor(builder: PokemonMoveBuilder) {
        this._name = builder.name;
        this._description = builder.description;
        this._power = builder.power;
        this._accuracy = builder.accuracy;
        this._pp = builder.pp;
        this._priority = builder.priority;
        this._moveType = builder.moveType;
        this._pokemonType = builder.pokemonType;
        this._target = builder.target;
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

    public static builder(): PokemonMoveBuilder {
        return new PokemonMoveBuilder();
    }
}

export class PokemonMoveBuilder {
    name: string;
    description: string;
    power: number;
    accuracy: number;
    pp: number;
    priority: number;
    moveType: string;
    pokemonType: string;
    target: string;

    constructor() {
        this.name = '';
        this.description = '';
        this.power = 0;
        this.accuracy = 0;
        this.pp = 0;
        this.priority = 0;
        this.moveType = '';
        this.pokemonType = '';
        this.target = '';
    }

    setName(name: string): this {
        this.name = name;
        return this;
    }

    setDescription(description: string): this {
        this.description = description;
        return this;
    }

    setPower(power: number): this {
        this.power = power;
        return this;
    }

    setAccuracy(accuracy: number): this {
        this.accuracy = accuracy;
        return this;
    }

    setPp(pp: number): this {
        this.pp = pp;
        return this;
    }

    setPriority(priority: number): this {
        this.priority = priority;
        return this;
    }

    setMoveType(moveType: string): this {
        this.moveType = moveType;
        return this;
    }

    setPokemonType(pokemonType: string): this {
        this.pokemonType = pokemonType;
        return this;
    }

    setTarget(target: string): this {
        this.target = target;
        return this;
    }

    build(): PokemonMove {
        return new PokemonMove(this);
    }
}