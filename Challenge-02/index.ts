function myForEach<T> (items: T[], forEachFunc: (v: T) => void): void {
    items.reduce((_, v) => {
        forEachFunc(v);
        return undefined;
    }, undefined);
};
myForEach(['a', 'b', 'c'], (v) => console.log(`forEach ${v}`));


function myFilter<A> (items: A[], filterFunc: (v: A) => boolean): A[] {
    return items.reduce((a, v) => (filterFunc(v) ? [...a, v] : a), [] as A[]);
};
console.log(myFilter([1, 2, 3, 4, 5, 6], (v) => v % 2 === 0));
console.log(myFilter(['a', 'b', 'c', 'd', 'e', 'f'], (v) => v === 'a'));


function myMap<M, K> (items: M[], mapFunc: (v: M) => K): K[] {
    return items.reduce((a, v) => [...a, mapFunc(v)], [] as K[]);
}
console.log(myMap([1, 2, 3, 4, 5, 6], (v) => v * 10).toString());
