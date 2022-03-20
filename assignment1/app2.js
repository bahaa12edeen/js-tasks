let day = window.prompt("enter value from 1 - 7 to choose day a week: ");

    day = parseInt(day);

switch(day){
    case 1:
        console.log("your day is: Saturday" + "\n" + "day: " + day);
        document.write("your day is: Saturday");
    break;

    case 2:
        console.log("your day is: Sunday" + "\n" + "day: " + day);
        document.write("your day is: Sunday");
    break;

    case 3:
        console.log("your day is: Monday" + "\n" + "day: " + day);
        document.write("your day is: Monday");
    break;

    case 4:
        console.log("your day is: Tuesday" + "\n" + "day: " + day);
        document.write("your day is: Tuesday");
    break;

    case 5:
        console.log("your day is: Wednesday" + "\n" + "day: " + day);
        document.write("your day is: Wednesday");
    break;

    case 6:
        console.log("your day is: Thursday" + "\n" + "day: " + day);
        document.write("your day is: Thursday");
    break;

    case 7:
        console.log("your day is: Friday" + "\n" + "day: " + day);
        document.write("your day is: Friday");
    break;

    default:
        console.log("value entered not valid" + "\n" + "day: " + day);
        document.write("value entered not valid" + "<br>" + "- day: " + day);
}