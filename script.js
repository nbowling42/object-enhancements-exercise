// Same keys and values
function createInstructor(first, last) {
    return {
        first,
        last
    };
};

// Computed property names
const favNum = 42;

const instructor = {
    firstName: 'Nate',
    [favNum] : 'My favorite number'
};

// Object methods
const teacher = {
    firstName: 'Nate',
    sayHi() {
        return 'Hi!';
    },
    sayBye() {
        return this.firstName + ' says bye!';
    }
};

// createAnimal function
function createAnimal(animal,callback,noise) {
    return {
        animal,
        [callback]() {
            return noise;
        }
    };
};