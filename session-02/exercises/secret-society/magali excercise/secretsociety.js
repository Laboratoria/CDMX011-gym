//A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
//Create a function that takes in an array of names and returns the name of the secret society.
function societyName(friends) {
    return friends.map(i=> i[0].toUpperCase()).sort().join('')
}
societyName(["Adam", "sarah", "Malcolm"])// AMS
