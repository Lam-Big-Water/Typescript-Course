interface Database13<K, T> {
    get(id: K): T;
    set(id: K, value: T): void;
}

interface Persistable13 {
    saveToString(): string;
    restoreFromString(storedState: string): void;
}

type DBKeyType = string | number | symbol;

class InMemoryDatabase13<K extends DBKeyType, T> implements Database13<K, T> {
    protected db: Record<K, T> = {} as Record<K, T>;
    get(id: K): T {
        return this.db[id];
    }
    set(id: K, value: T): void {
        this.db[id] = value;
    }
}

class PersistentMemoryDB13<K extends DBKeyType, T> extends InMemoryDatabase13<K, T> implements Persistable13 {
    saveToString(): string {
        return JSON.stringify(this.db);
    }

    restoreFromString(storedState: string): void {
        this.db = JSON.parse(storedState);
    }
}

const myDB13 = new PersistentMemoryDB13<string, number>();
myDB13.set('foo', 13);
// myDB.db['foo'] = 'baz';
console.log('1-' +myDB13.get('foo'));
const saved13 = myDB13.saveToString();
myDB13.set('foo', 14);
console.log('2-' +myDB13.get('foo'));

const myDB13_2 = new PersistentMemoryDB13<string, number>();
myDB13_2.restoreFromString(saved13);
console.log('3-' + myDB13_2.get('foo'));