
let color1 = getInput(0);
let color2 = getInput(1);
const message = ColorCombinator(color1, color2);



function ColorCombinator(color1, color2) {
    if (color1 === 'red' && color2 === 'yellow') {
    return 'When you combine red and yellow, you get orange!';
    }
    else if (color1 === 'red' && color2 === 'blue') {
        return("When you combine red and blue, you get purple!")
    }
    else if (color1 === 'yellow' && color2 === 'blue') {
        return( 'When you combine yellow and blue, you get green!')
    }
    else if (color1 !== 'red' || color1 !== 'yellow' || color1 !=='blue' )
    return "Sorry, one of those colors is not a primary color!"
}

console.log(message);





module.exports = ColorCombinator


function getInput(i) {
    return process.argv[i + 2];
}