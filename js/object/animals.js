let animals = [
    {
        type: "dog",
        sound:"woof!",
    },
    {
        type: "cat",
        sound: "meow~",
    },
    {
        type: "cow",
        sound: "moo-moo",
    },
    {
        type: "pig",
        sound: "oink-oink",
    },
];

function sounds(animal,sound){
    console.log("What does the", animal, "say?");
    console.log(sound);
}

for(let i = 0; i <animals.length; i++) {
    sounds(animals[i].type,animals[i].sound);
}