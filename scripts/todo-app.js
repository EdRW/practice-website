// Javascript ES6

// common functions
// getelementbyid
// getelementbytag
// createElement

// var means declare variable in the function scope
// let means declare variable in block scope

// for next week
// class, property, function, data types, data structures

var rootElement = document.getElementById("root");
rootElement.innerHTML = "Todo List Page";

var unorderedList = document.createElement("ul");

// let you repeat some instructions
// let i = 0
        //while less than 10
                    // i = i + i
for (let i=0; i<10; i++) {
    let listItem = document.createElement("li"); // list item
    listItem.innerHTML = i;
    unorderedList.appendChild(listItem);
}

rootElement.appendChild(unorderedList);
