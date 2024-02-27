// Leap years checker with JavaScript. Programmed by Pcykho Duke.
// Special thanks to Angela Yu @ AppBrewary.


/* This is how to work out whether if a particular year is a leap year:
A year is a leap year if it is evenly divisible by 4 ;
except if that year is also evenly divisible by 100;
unless that year is also evenly divisible by 400. */


var year = prompt ("What year do you want to check?");

var remaindersOf4 = ( year % 4 );
var remaindersOf100 = ( year % 100 );
var remaindersOf400 = ( year % 400 );


if (remaindersOf400 === 0) {
    alert ( year + " is a leap year." )
} else {    
    
    if (remaindersOf100 === 0) {
        alert ( year + " is not a leap year." )
    } else {
        
        if (remaindersOf4 === 0) {
            alert ( year + " is a leap year." )
        } else {
            alert ( year + " is not a leap year." )
        }        
        
    }
    
}

