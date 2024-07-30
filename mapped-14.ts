type MyFlexibleDogInfo = {
    name: string;
    [key: string]: string | number;
};

const dog: MyFlexibleDogInfo = {
    name: 'lg',
    breed: 'mutt',
    age: 22
}


// 
interface DogInfo {
    name: string;
    age: number;
}

type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};

type DogInfoOptions = OptionsFlags<DogInfo>;

// 

type Listeners<Type> = {
    [Property in keyof Type as `on${Capitalize<string & Property>}Change`]?: (
        newValue: Type[Property]
    ) => void;
};

function listenToObject<T>(obj: T, listeners: Listeners<T>): void {
    throw 'Needs to be implemented';
}

const lg: DogInfo = {
    name: 'lg',
    age: 13,
};

type DogInfoListeners = Listeners<DogInfo>;

listenToObject(lg, {
    onNameChange: (v: string) => { },
    onAgeChange: (v: number) => { }
})