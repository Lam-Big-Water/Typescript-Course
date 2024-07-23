function printIngredient (quantity: string, ingredient: string, extra?: string) {
    console.log(`${quantity} ${ingredient} ${extra ? ` ${extra}` : ""}`);
}

printIngredient('1c', 'Flour');
printIngredient('1c', 'Sugar', 'something more');

interface User {
    id: string;
    info?: {
        email?: string;
    };
}

function badWayToGetEmail (user: User): string {
    if (user.info) {
        return user.info.email!;
    }
    return "";
}

function smartWayToGetEmail (user: User): string {
    return user?.info?.email ?? "";
}

function addWithCallback (x: number, y: number, callback?: () => void) {
    console.log([x, y]);
    callback?.();
}

addWithCallback(1, 2);
addWithCallback(1, 2, () => console.log('data is counted'));