
let color = getInput(0);
const message = ColorDeconstructor(color);



function ColorDeconstructor(color) {
    if (color === 'orange') {
    return "Orange is made by combining red and yellow!";
    }
    else if (color === 'purple') {
        return("Purple is made by combining red and blue!")
    }
    else if (color === 'green') {
        return( 'Green is made by combining blue and yellow!')
    }
    else if (color !== 'orange' || color !== 'purple' || color !=='green' )
    return "Sorry, that's not a secondary color!"
}

console.log(message);





module.exports = ColorDeconstructor


function getInput(i) {
    return process.argv[i + 2];
}