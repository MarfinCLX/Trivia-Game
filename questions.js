const quizDataBase = {
programming: {
easy: [
  {
  question: 'What whill this code output? Python: print("Hello")',
  choices: ["Hello", "Error", "0", "Nothing"],
  correctAnswer: "Hello",
  image: "Images/Images_Programming/programming_N2.png"
  }, {
question: "Which programming language is shown in the image?", 
choices: ["Python", "JavaScript", "Java", "C++"],
correctAnswer: "Python",
image: ""
  }, {
question: "What is HTML used for?",
choices: ["Games", "Website sctructure", "Music", "Video"],
correctAnswer: "Website sctructure",
image: ""
  }, {
question: "What does CSS do?",
choices: ["Styles websites", "Creates databases", "Builds applications", "Runs programs"],
correctAnswer: "Styles websites",
image: ""
  }, {
question: "What will this code output? C++: cout << 5",
choices: ["5", "Cout", "Error", "Nothing"],
correctAnswer: "5",
image: "Images/Images_Programming/programming_N3.png"
  }, {
question: "What will this code output? Java: System.out.println(\"10\")",
choices: ["10", "System.out.println", "Nothing", "Page not defined"],
correctAnswer: "10",
image: ""
  }, {
question: " What does SQL do?",
choices: ["Creates databases", "Styles websites", "Builds applications", "Games"],
correctAnswer: "Creates databases",
image: ""
  }, {
question: "What will this code output? JavaScript: console.log(3 + 4)",
choices: ["7", "3 + 4", "Error", "Nothing"],
correctAnswer: "7",
image: ""
  }, {
question: "What is a variable in programming?",
choices: ["A type of loop", "A container for storing data", "A function", "A type of array"],
correctAnswer: "A container for storing data",
image: ""
  }, {
question: "What does <p> tag in HTML represent?",
choices: ["Paragraph", "Heading", "List", "Link"],
correctAnswer: "Paragraph",
image: ""
  }
],
medium: [
  {
question: "What will this code output? Python: x = 5; print(x * 2)",
choices: ["10", "5", "0", "Nothing"],
correctAnswer: "10",
image: ""
  }, {
question: "What will this code output? JavaScript: let y = 8; console.log(y / 4);",
choices: ["2", "8", "Error 404", "Nothing"],
correctAnswer: "2",
image: ""
  }, {
question: "What does this HTML code do? HTML: <h1> Hello World </h1>",
choices: ["Creates a heading", "Creates a paragraph", "Creates a list", "Creates a link"],
correctAnswer: "Creates a heading",
image: ""
  }, {
question: "What does this CSS code do? CSS: color: red;",
choices: ["Changes text color", "Changes background color", "Changes font size", "Changes border color"],
correctAnswer: "Changes text color",
image: ""
  }, {
question: "What will this code output? C++: int a = 10; cout << a - 3;",
choices: ["Error", "10", "Error", "7"],
correctAnswer: "7",
image: ""
  }, {
question: "What will this code output? Java: int b = 15; System.out.println(b / 3);",
choices: ["45", "15", "5", "9"],
correctAnswer: "5",
image: ""
  }, {
question: "What does this SQL query do? SQL: SELECT * FROM users;",
choices: ["Updates all records in the User table", "Deletes all records from the users table", "Selects all columns from the users table", "Inserts a new record into the users table"],
correctAnswer: "Selects all columns from the users table",
image: ""
  }, {
question: "What will this code output? C#: int x = 3; console.WriteLine(x * x);",
choices: ["9", "3", "Error", "Nothing"],
correctAnswer: "9",
image: ""
  }, {
question: "What does a loop do in programming?",
choices: ["Repeats a block of code", "Creates a variable", "Deletes a file", "Opens a website"],
correctAnswer: "Repeats a block of code",
image: ""
  }, {
question: "What does JavaScript do on websites?",
choices: ["Adds interactivity", "Creates databases", "Styles websites", "Runs programs"],
correctAnswer: "Adds interactivity",
image: ""
  }
], 
hard: [
{
    question:"What will this code output? Python: print(10 // 3)",
choices: ["3.33...", "3", "Error", "4"],
correctAnswer: "3",
image: ""
}, {
    question:"What will this code output? JavaScript: console.log('Hi' * 3)",
choices: ["NaN", "HiHiHi", "3Hi", "Hi3"],
correctAnswer: "NaN",
image: ""
}, {
    question:"What will this HTML code do? HTML: <a href='google.com'> Open </a> ",
choices: ["Nothing, this code has an error", "Create a image", "Create a new file", "Creates a link to Google"],
correctAnswer: "Creates a link to Google",
image: ""
}, {
    question:"What does this CSS code do? CSS: display: none;",
choices: ["Changes the font size", "Shows the element", "Hides the element", "Changes the background color"],
correctAnswer: "Hides the element",
image: ""
}, {
    question:"What will this code output? C++: int a = 10; int b= 3; cout << a % b;",
choices: ["0", "Error", "1", "3"],
correctAnswer: "1",
image: ""
}, {
    question:"What will thhis code output? Java: for(int i=0; i<2; i++){ System.out.println(Go); }",
choices: ["Go 0 times", "Go 1 times", "Go 2 times", "Go 3 times"],
correctAnswer: "Go 2 times",
image: ""
}, {
    question:"What does this SQL query do? SQL: DELETE FROM users;",
choices: ["Updates all records in the User table", "Selects all columns from the users table", "Deletes all records from the users table", "Inserts a new record into the users table"],
correctAnswer: "Deletes all records from the users table",
image: ""
}, {
    question:"What will this code output? C#: int x = 5; int y = 2; console.WriteLine(x * y * 2 / 4);",
choices: ["5", "10", "Error", "2.5"],
correctAnswer: "5",
image: ""
}, {
    question:"What will this code output? Python: print(len('ARMADA'))",
choices: ["4", "5", "6", "7"],
correctAnswer: "6",
image: ""
}, {
    question:"What will this code output? JavaScript: let x = 5; if(x > 3){ console.log(´Yes´) }",
choices: ["0", "No", "Error", "Yes"],
correctAnswer: "Yes",
image: ""
}
]
},
trafficRules: {
    easy: [
        {
    question:"What does the STOP sign mean?",
choices: ["Full stop", "Go without stopping", "Caution", "Slow down"],
correctAnswer: "Full stop",
image: ""
}, {
    question:"Which sign warns about a roudabout?",
choices: ["Red circle with stripe", "Blue circle with white arrow", "Yellow rectangle", "Blue circle with circular arrows"],
correctAnswer: "Blue circle with circular arrows",
image: ""
}, {
    question:"What should you do at the 'No entry' sign?",
choices: ["Pass", "Turn", "Stop", "Slow down"],
correctAnswer: "Stop",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}
], 
medium: [
{
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}
],   
hard: [
    {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}
]
},
history: {
    easy: [
        {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}
],
medium: [
    {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}
],
hard: [
    {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}
]
},
geography: {
    easy: [
        {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}
    ],
    medium: [
        {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}
    ],
    hard: [
        {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}, {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
} , {
    question:"",
choices: ["", "", "", ""],
correctAnswer: "",
image: ""
}
    ]
}
}