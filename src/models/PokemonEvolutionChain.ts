import {PokemonEvolutionDetail} from "./PokemonEvolutionDetail";
import PokemonSpecie from "./PokemonSpecie";

export class PokemonEvolutionChain {

    private readonly _pokemon : PokemonSpecie;
    private readonly _evolvesTo : PokemonEvolutionChain[] = [];
    private readonly _details : PokemonEvolutionDetail[] = [];

    constructor(builder : PokemonEvolutionChainBuilder) {
        this._pokemon = builder.pokemon;
        this._evolvesTo = builder.evolvesTo;
        this._details = builder.details;
    }

    get pokemon(): PokemonSpecie {
        return this._pokemon;
    }

    get evolvesTo(): PokemonEvolutionChain[] {
        return this._evolvesTo;
    }

    get details(): PokemonEvolutionDetail[] {
        return this._details;
    }

    static builder() : PokemonEvolutionChainBuilder{
        return new PokemonEvolutionChainBuilder();
    }
}

class PokemonEvolutionChainBuilder{
    pokemon !: PokemonSpecie;
    evolvesTo !: PokemonEvolutionChain[];
    details !: PokemonEvolutionDetail[];

    withPokemon(pokemon : PokemonSpecie) : PokemonEvolutionChainBuilder{
        this.pokemon = pokemon;
        return this;
    }

    withEvolvesTo(evolvesTo: PokemonEvolutionChain[]) : PokemonEvolutionChainBuilder{
        this.evolvesTo = evolvesTo;
        return this;
    }

    withDetails(details : PokemonEvolutionDetail[]) : PokemonEvolutionChainBuilder{
        this.details = details;
        return this;
    }

    build() : PokemonEvolutionChain{
        return new PokemonEvolutionChain(this);
    }
}