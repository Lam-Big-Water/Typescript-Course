const pokemon = [
    {
        name: 'Bulb',
        hp: 20
    },
    {
        name: 'Meg',
        hp: 5
    }
]

function ranker (items, rank) {
    // item == { name: 'Bulb', hp: 20 }, item == { name: 'Meg', hp: 5 }
    // rank(item) == rank: 20, rank(item) == rank: 5
    // ranks.map((rank) => rank.item) == [ { name: 'bulb', hp: 20 }, { name: 'sam', hp: 5 } ]
    const ranks = items.map((item) => ({item, rank: rank(item)}));
    ranks.sort((a, b) => a.rank - b.rank);

    return ranks.map((rank) => rank.item);
}

const ranks = ranker(pokemon, ({hp}) => hp);

const sam = pokemon.map((item) => console.log({item}));

const num = ({hp}) => hp;

const sam2 = pokemon.map((item) => console.log(num(item)));

const data = [
    {
    item: {name: 'bulb', hp: 20},
    rank: 20
    },
    {
    item: {name: 'sam', hp: 5},
    rank: 5
    },
]

const sam3 = data.map((d) =>(d.item));
console.log(sam3);