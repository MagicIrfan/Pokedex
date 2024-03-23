interface Statistic{
    name:string;
    value:number;
}
export class PokemonStatistics {
    
    private readonly _pv : Statistic;
    private readonly _attack : Statistic;
    private readonly _defense : Statistic;
    private readonly _specialAttack : Statistic;
    private readonly _specialDefense : Statistic;
    private readonly _speed : Statistic;

    constructor(statistics: number[]) {
        this._pv = {name:"HP", value:statistics[0]};
        this._attack = {name:"Attack", value:statistics[1]};
        this._defense = {name:"Defense", value:statistics[2]};
        this._specialAttack = {name:"Special Attack", value:statistics[3]};
        this._specialDefense = {name:"Special Defense", value:statistics[4]};
        this._speed = {name:"Speed", value:statistics[5]};
    }

    get pv(): Statistic {
        return this._pv;
    }

    get attack(): Statistic {
        return this._attack;
    }

    get defense(): Statistic {
        return this._defense;
    }

    get specialAttack(): Statistic {
        return this._specialAttack;
    }

    get specialDefense(): Statistic {
        return this._specialDefense;
    }

    get speed(): Statistic {
        return this._speed;
    }
}