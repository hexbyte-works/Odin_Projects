const name= ['SpongeBob', 'patrick', 'squidward', 'sandy']
const person= {
    "name": "spongebob",
    'age':30,
    'isemployed':true,
    'hobbies': ["jellyfishing", 'karate','cooking']
};

const jsonString = JSON.stringify(person)

// console.log(jsonString)

async function reply(){
    const requestURL ="https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";
    const request = new Request(requestURL);
    const response = await fetch(request);
    const superHeroes = await response.json();
    return superHeroes;
}

reply().then((data)=> console.log(data))
reply().then((data)=> console.log(JSON.stringify(data)))