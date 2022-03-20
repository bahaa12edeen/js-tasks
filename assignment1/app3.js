let operation = window.prompt("enter value from 1 - 4 to choose math operation: {1:+, 2:*, 3:-, 4:/}"),
    num1 = window.prompt("enter value of first number: "),
    num2 = window.prompt("enter value of second number: ");

    operation = parseInt(operation);
    num1 = parseInt(num1);
    num2 = parseInt(num2);

switch(operation){
    case 1:
        console.log("sum result: " + (num1 + num2) + "\n" + "num1: " + num1 + "\n" + "num2: " + num2 + "\n" + "operation: " + "+");
        document.write("sum result: " + (num1 + num2));
    break;

    case 2:
        console.log("multi result: " + (num1 * num2) + "\n" + "num1: " + num1 + "\n" + "num2: " + num2 + "\n" + "operation: " + "*");
        document.write("multi result: " + (num1 * num2));
    break;

    case 3:
        console.log("sub result: " + (num1 - num2) + "\n" + "num1: " + num1 + "\n" + "num2: " + num2 + "\n" + "operation: " + "-");
        document.write("sub result: " + (num1 - num2));
    break;

    case 4:
        console.log("divide result: " + (num1 / num2) + "\n" + "num1: " + num1 + "\n" + "num2: " + num2 + "\n" + "operation: " + "/");
        document.write("divide result: " + (num1 / num2));
    break;

    default:
        console.log("value entered not valid");
        document.write("value entered not valid");
}