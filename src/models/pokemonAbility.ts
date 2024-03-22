export default class PokemonAbility{
    private readonly _name:string;
    private readonly _hidden:boolean;
    private readonly _effect:string;

    constructor(name:string, hidden:boolean, effect:string) {
        this._name = name;
        this._hidden = hidden;
        this._effect = effect;
    }

    get name() : string{
        return this._name;
    }

    get hidden() : boolean{
        return this._hidden;
    }

    get effect() : string{
        return this._effect;
    }
}