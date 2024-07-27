// This is function like react useState()
function simpleState<T> (initial: T): [() => T, (v: T) => void] {
    let val: T = initial;
    return [
        () => val,
        (v: T) => {
            val = v;
        },
    ];
}

const [st1getter, st1setter] = simpleState(10);
console.log(st1getter());
st1setter(62);
console.log(st1getter());

const [st2getter, st2setter] = simpleState<string | null>(null);
console.log(st2getter());
st2setter('str');
console.log(st2getter());

interface Rank<T> {
    item: T;
    rank: number;
}

function ranker<T> (items: T[],rank: (v: T) => number): T[] {

    const ranks: Rank<T>[] = items.map((item) => ({
        item,
        rank: rank(item),
    }));

    ranks.sort((a, b) => a.rank - b.rank);

    return ranks.map((rank) => rank.item);
}

interface Pokemon {
    name: string;
    hp: number;
}

const pokemon: Pokemon[] = [
    {
        name: 'Bulbasaur',
        hp: 20,
    },
    {
        name: 'Megaasaur',
        hp: 5,
    },
];

const ranks = ranker(pokemon, ({hp}) => hp);
console.log(ranks);