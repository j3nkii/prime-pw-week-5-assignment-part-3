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

//showCollection function
console.log('--------show collection---------');
function showCollection(array) {
    console.log(array.length);
    for(album of array) {
        let values = Object.values(album)
        console.log(`${values[0]} by ${values[1]} in ${values[2]}`);
    }
}
showCollection(collection)//test showCollection

//create a find artist function
function findByArtist(artist) {
    let matchArtist = []
    for(album in collection) {
       if(collection[album].artist == artist){
           matchArtist.push(collection[album])
       }
    }
    return matchArtist;
}
//TESTCASES
console.log(`Search fo Bonobo:`, findByArtist('Bonobo'));
console.log(`Search for Skrillex.... :`, findByArtist('Skrillex'));
//testing to be sure it will add more than one album
addToCollection('Days to Come', 'Bonobo', '2006')
console.log(`Search for Bonobo:`, findByArtist('Bonobo'));


console.log('--------bullshit area----------');

let test = {
    fuck:[],
    shit: 'inya butt',

}
console.log(Object.values(test));