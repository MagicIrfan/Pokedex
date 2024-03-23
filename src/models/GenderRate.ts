export default class GenderRate{

    private readonly _male : number;
    private readonly _female: number;

    constructor(male: number, female: number) {
        this._male = male;
        this._female = female;
    }

    get male(): number {
        return this._male;
    }

    get female(): number {
        return this._female;
    }
}