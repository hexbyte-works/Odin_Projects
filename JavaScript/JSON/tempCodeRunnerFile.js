const name= ['SpongeBob', 'patrick', 'squidward', 'sandy']
const person= {
    "name": "spongebob",
    'age':30,
    'isemployed':true,
    'hobbies': ["jellyfishing", 'karate','cooking']
};

const jsonString = JSON.stringify(person)

console.log(jsonString)
