interface Statistic{
    name:string;
    value:number;
}
export class Statistics{
    
    private readonly _pv : Statistic;
    private readonly _attack : Statistic;
    private readonly _defense : Statistic;
    private readonly _specialAttack : Statistic;
    private readonly _specialDefense : Statistic;
    private readonly _speed : Statistic;

    constructor(pv: number, attack: number, defense: number, specialAttack: number, specialDefense: number, speed: number) {
        this._pv = {name:"HP", value:pv};
        this._attack = {name:"Attack", value:attack};
        this._defense = {name:"Defense", value:defense};
        this._specialAttack = {name:"Special Attack", value:specialAttack};
        this._specialDefense = {name:"Special Defense", value:specialDefense};
        this._speed = {name:"Speed", value:speed};
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