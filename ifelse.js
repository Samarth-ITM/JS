letter = prompt("Enter letter:");

switch (letter){
    case 'A': case 'E': case 'I': case 'O': case 'U':
        console.log("Vowel");
        break;
    default:
        console.log("Not Vowel");
        break;
}

console.log("\n\n\n")

day = Number(prompt("Enter number:"));

switch (day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tueday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Holiday");
        break;
}