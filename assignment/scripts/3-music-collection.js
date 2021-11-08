console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {
        title: `${title}`,
        artist: `${artist}`,
        year: `${yearPublished}`
    }
    collection.push(album)
}
addToCollection('First Born', 'Eyedea & Abilities', '2001')
console.log(collection);