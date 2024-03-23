import {PokemonEvolutionDetail} from "./PokemonEvolutionDetail";
import Pokemon from "./Pokemon";

export class PokemonEvolutionChain {

    private readonly _pokemon : Pokemon;
    private readonly _evolvesTo : PokemonEvolutionChain[] = [];
    private readonly _details : PokemonEvolutionDetail[] = [];

    constructor(builder : PokemonEvolutionChainBuilder) {
        this._pokemon = builder.pokemon;
        this._evolvesTo = builder.evolvesTo;
        this._details = builder.details;
    }

    get pokemon(): Pokemon {
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
    pokemon !: Pokemon;
    evolvesTo !: PokemonEvolutionChain[];
    details !: PokemonEvolutionDetail[];

    withPokemon(pokemon : Pokemon) : PokemonEvolutionChainBuilder{
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