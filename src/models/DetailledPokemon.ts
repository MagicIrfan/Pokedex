import GenderRate from "./GenderRate";
import {PokemonStatistics} from "./PokemonStatistics";
import {PokemonEvolutionChain} from "./PokemonEvolutionChain";
import {PokemonMove} from "./PokemonMove";

export default class DetailedPokemon {

    private readonly _id: number;
    private readonly _name: string;
    private readonly _description: string;
    private readonly _growthRate : string;
    private readonly _cry : string;
    private readonly _shape : string;
    private readonly _genus : string;
    private readonly _weight : number;
    private readonly _height : number;
    private readonly _captureRate : number;
    private readonly _baseHappiness : number;
    private readonly _eggGroups : string[];
    private readonly _genderRate?: GenderRate;
    private readonly _statistics: PokemonStatistics;
    private readonly _types: string[];
    private readonly _abilities: string[];
    private readonly _evolutions: PokemonEvolutionChain | undefined;
    private readonly _moves: PokemonMove[];
    private readonly _locations: string[];

    constructor(builder: DetailedPokemonBuilder) {
        this._id = builder.id;
        this._name = builder.name;
        this._description = builder.description;
        this._types = builder.types;
        this._abilities = builder.abilities;
        this._growthRate = builder.growthRate;
        this._cry = builder.cry;
        this._shape = builder.shape;
        this._genus = builder.genus;
        this._eggGroups = builder.eggGroups;
        this._genderRate = builder.genderRate;
        this._statistics = builder.statistics;
        this._weight = builder.weight;
        this._height = builder.height;
        this._captureRate = builder.captureRate;
        this._baseHappiness = builder.baseHappiness;
        this._evolutions = builder.evolutions;
        this._moves = builder.moves;
        this._locations = builder.locations;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get types(): string[] {
        return this._types;
    }

    get abilities(): string[] {
        return this._abilities;
    }

    get growthRate(): string {
        return this._growthRate;
    }

    get cry(): string {
        return this._cry;
    }

    get shape(): string {
        return this._shape;
    }

    get genus(): string {
        return this._genus;
    }

    get eggGroups(): string[] {
        return this._eggGroups;
    }

    get genderRate(): GenderRate {
        return this._genderRate as GenderRate;
    }

    get statistics(): PokemonStatistics {
        return this._statistics;
    }

    get weight(): number {
        return this._weight;
    }

    get height(): number {
        return this._height;
    }

    get captureRate(): number {
        return this._captureRate;
    }

    get baseHappiness(): number {
        return this._baseHappiness;
    }

    get evolutions(): PokemonEvolutionChain {
        return this._evolutions as PokemonEvolutionChain;
    }

    get moves(): PokemonMove[] {
        return this._moves;
    }

    get locations() : string[] {
        return this._locations;
    }

    // La méthode de construction statique pour le Builder
    static builder(): DetailedPokemonBuilder {
        return new DetailedPokemonBuilder();
    }
}

export class DetailedPokemonBuilder {
    id!: number;
    name!: string;
    description!: string;
    types!: string[];
    abilities: string[] = [];
    growthRate!: string;
    cry!: string;
    shape!: string;
    genus!: string;
    weight!: number;
    height!: number;
    baseHappiness!: number;
    captureRate!: number;
    eggGroups !: string[];
    genderRate!: GenderRate;
    statistics!: PokemonStatistics;
    evolutions?: PokemonEvolutionChain;
    moves: PokemonMove[] = [];
    locations: string[] = [];

    withId(id: number): this {
        this.id = id;
        return this;
    }

    withName(name: string): this {
        this.name = name;
        return this;
    }

    withDescription(description: string): this {
        this.description = description;
        return this;
    }

    withTypes(types: string[]): this {
        this.types = types;
        return this;
    }

    withAbilities(abilities: string[]): this {
        this.abilities = abilities;
        return this;
    }

    withGrowthRate(growthRate: string): this {
        this.growthRate = growthRate;
        return this;
    }

    withCry(cry: string): this {
        this.cry = cry;
        return this;
    }

    withShape(shape: string): this {
        this.shape = shape;
        return this;
    }

    withGenus(genus: string): this {
        this.genus = genus;
        return this;
    }

    withEggGroups(eggGroups: string[]): this {
        this.eggGroups = eggGroups;
        return this;
    }

    withGenderRate(genderRate: GenderRate): this {
        this.genderRate = genderRate;
        return this;
    }

    withStatistics(statistics: PokemonStatistics): this {
        this.statistics = statistics;
        return this;
    }

    withWeight(weight: number): this {
        this.weight = weight;
        return this;
    }

    withHeight(height: number): this {
        this.height = height;
        return this;
    }

    withBaseHappiness(baseHappiness: number): this {
        this.baseHappiness = baseHappiness;
        return this;
    }

    withCaptureRate(captureRate: number): this {
        this.captureRate = captureRate;
        return this;
    }

    withEvolutions(evolutions:PokemonEvolutionChain) : this{
        this.evolutions = evolutions;
        return this;
    }

    withMoves(moves:PokemonMove[]) : this{
        this.moves = moves;
        return this;
    }

    withLocations(locations:string[]) : this{
        this.locations = locations;
        return this;
    }

    build(): DetailedPokemon {
        return new DetailedPokemon(this);
    }
}