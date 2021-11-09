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
console.log(addToCollection('first born', 'eyedea & abilities', '2001'));
console.log(addToCollection('traveller', 'chris stapleton', '2015'));
console.log(addToCollection('most known uknown', 'three 6 mafia', '2005'));
console.log(addToCollection('black sands', 'bonobo', '2010'));
console.log(addToCollection('imaginary appalacia', 'colter wall', '2015'));
console.log(addToCollection('redneck shit', 'wheeler walker jr.', '2016'));

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
    artist = artist.toLowerCase()
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

console.log('------STRETCH---------');

function search(find) {
    let searchResults = [];
    find = find.toString()
    find = find.toLowerCase()
    for(album of collection) {
        for(item of Object.values(album)) {
            if(item.includes(find)) {
                searchResults.push(album);
            }
        }
    }
    return searchResults;
}
console.log(search('CHRIS'));//test
console.log(search('skrillex'));