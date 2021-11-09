console.log('***** Music Collection *****')
//Create collection, and function to add to it
let collection = [];
function addToCollection(title, artist, yearPublished) {
    let album = {
        title: `${title}`,
        artist: `${artist}`,
        year: `${yearPublished}`
    }
    collection.push(album)
    return album;
}

//test func
console.log(addToCollection('First Born', 'Eyedea & Abilities', '2001'));
console.log(addToCollection('Traveller', 'Chris Stapleton', '2015'));
console.log(addToCollection('Most Known Uknown', 'Three 6 Mafia', '2005'));
console.log(addToCollection('Black Sands', 'Bonobo', '2010'));
console.log(addToCollection('Imaginary Appalacia', 'Colter Wall', '2015'));
console.log(addToCollection('Redneck Shit', 'Wheeler Walker Jr.', '2016'));

console.log('Your current collection is:', collection);