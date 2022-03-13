const fs = require('fs');
const {
    filterByQuery,
    findById,
    createNewAnimal,
    validateAnimal,
} = require('../lib/animals.js');
const { animals } = require('../data/animals');
jest.mock('fs');

test('creates an animal object', () => {
    const animal = createNewAnimal(
        { name: "Darlene", id: "jflajdflajd"},
        animals
    );

    expect(animal.name).toBe("Darlene");
    expect(animal.id).toBe("jflajdflajd");
});

test('filter by query', () => {
    const startingAnimals = [
        {
            id: "7",
            name: "Bodhi",
            species: "Doggo",
            diet: "herbivore",
            personalityTraits: ["zany"],
        },
    ];

    const updatedAnimals = filterByQuery({ species: "Doggo" }, startingAnimals);

    expect(updatedAnimals.length).toEqual(1);
});

test('finds by id', () => {
    const startingAnimals = [
        {
            id: "7",
            name: "Bodhi",
            species: "Doggo",
            diet: "herbivore",
            personalityTraits: ["zany"],
        },
        {
            id: "8",
            name: "Cassie",
            species: "Doggo",
            diet: "herbivore",
            personalityTraits: ["hungry", "zany", "goofy"],
        },
    ];

    const result = findById("7", startingAnimals);

    expect(result.name).toBe("Bodhi");
});

test("validates personality traits", () => {
    const animal = {
        id: "7",
        name: "Bodhi",
        species: "Doggo",
        diet: "herbivore",
        personalityTraits: ["zany"],
    };
  
    const invalidAnimal = {
        id: "7",
        name: "Bodhi",
        species: "Doggo",
        diet: "herbivore",
    };
  
    const result = validateAnimal(animal);
    const result2 = validateAnimal(invalidAnimal);
  
    expect(result).toBe(true);
    expect(result2).toBe(false);
  });