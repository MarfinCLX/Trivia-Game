const quizDataBase = {
programming: {
easy: [
  {
  question: 'What whill this code output? Python: print("Hello")',
  choices: ["Hello", "Error", "0", "Nothing"],
  correctAnswer: "Hello",
  image: "Images/Images_Programming/programming_N1.png"
  }, {
question: "Which programming language is shown in the image?", 
choices: ["Java", "JavaScript", "Python", "C++"],
correctAnswer: "Python",
image: "Images/Images_Programming/python-svgrepo-com.svg"
  }, {
question: "What is HTML used for?",
choices: ["Games", "Website sctructure", "Music", "Video"],
correctAnswer: "Website sctructure",
image: ""
  }, {
question: "What does CSS do?",
choices: ["Runs programs", "Creates databases", "Builds applications", "Styles websites"],
correctAnswer: "Styles websites",
image: ""
  }, {
question: "What will this code output? C++: cout << 5",
choices: ["5", "Cout", "Error", "Nothing"],
correctAnswer: "5",
image: "Images/Images_Programming/programming_N3.png"
  }, {
question: "What will this code output? Java: System.out.println(\"10\")",
choices: ["System.out.printIn", "10", "Nothing", "Page not defined"],
correctAnswer: "10",
image: ""
  }, {
question: " What does SQL do?",
choices: ["Builds applications", "Styles websites", "Creates databases", "Games"],
correctAnswer: "Creates databases",
image: ""
  }, {
question: "What will this code output? JavaScript: console.log(3 + 4)",
choices: ["Nothing", "3 + 4", "Error", "7"],
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
choices: ["5", "10", "0", "Nothing"],
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
choices: ["Changes border color", "Changes background color", "Changes font size", "Changes text color"],
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
choices: ["Creates a variable", "Repeats a block of code", "Deletes a file", "Opens a website"],
correctAnswer: "Repeats a block of code",
image: ""
  }, {
question: "What does JavaScript do on websites?",
choices: ["Styles websites", "Creates databases", "Adds interactivity", "Runs programs"],
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
    question:"Which sign shows a pedestrian crossing?",
choices: ["Red circle", "Yellow triangle", "Green square", "Blue square with person"],
correctAnswer: "Blue square with person",
image: ""
}, {
    question:"What does a yellow trafic light mean?",
choices: ["Stop", "Slow down and be careful", "Go", "Turn right"],
correctAnswer: "Slow down and be careful",
image: ""
}, {
    question:"Which sign indicates a speed limit of 50km/h?",
choices: ["Blue square with 50", "Red circle with 50", "Yellow triangle with 50", "White rectangle with 50"],
correctAnswer: "Red circle with 50",
image: ""
}, {
    question:"Which sign warns about a slippery road?",
choices: ["Yellow triangle with car", "Blue circle with stripes", "Red circle", "Green square"],
correctAnswer: "Yellow triangle with car",
image: ""
}, {
    question:"What does the 'No parking' sign mean?",
choices: ["Parking allowed", "Only buses", "One hour parking", "No parking"],
correctAnswer: "No parking",
image: ""
}, {
    question:"What should you do at a pedestrian crossing with people?",
choices: ["Pass", "Slow down", "Stop", "Honk"],
correctAnswer: "Stop",
image: ""
}, {
    question:"Which sign shows approaching a railway crossing? ",
choices: ["Red circle", "Yellow sign with train", "Blue square with car", "Green circle"],
correctAnswer: "Yellow sign with train",
image: ""
}
], 
medium: [
{
    question:"What does the 'Priority road' sign mean?",
choices: ["Road with out priority", "Priority road", "Slow down", "Only for buses"],
correctAnswer: "Priority road",
image: ""
}, {
    question:"How to act a 'Give way' sign?",
choices: ["Go", "Always stop", "Yield", "Honk"],
correctAnswer: "Yield",
image: ""
}, {
    question:"What does a solid white line on the road mean?",
choices: ["Overtake allowed", "Overtaking forbidden", "Only for bikes", "Only in daytime"],
correctAnswer: "Overtaking forbidden",
image: ""
}, {
    question:"Which sign forbids turning right?",
choices: ["Red circle with right arrow", "Blue circle", "Yellow triangle", "Green square"],
correctAnswer: "Red circle with right arrow",
image: ""
}, {
    question:"What does the 'No overtaking' sign mean?",
choices: ["Overtake allowed", "Only for trucks", "No overtaking", "Only at night"],
correctAnswer: "No overtaking",
image: ""
}, {
    question:"What does a yellow rectangle with red border on road mean?",
choices: ["Danger", "Temporary restriction", "Pedestrians", "Parking"],
correctAnswer: "Temporary restriction",
image: ""
}, {
    question:"How to act an traffic cones and road narrowing?",
choices: ["Go faster", "Honk", "Slow down", "Stop"],
correctAnswer: "Slow down",
image: ""
}, {
    question:"What does a blue circle with white arrow right mean?",
choices: ["Tur right forbidden", "Go straigth allowed", "Parking", "Turn right mandatory"],
correctAnswer: "Turn right mandatory",
image: ""
}, {
    question:"Which sign shows start of residential area?",
choices: ["Blue square with house", "Red circle", "Yellow triangle", "Green rectangle"],
correctAnswer: "Blue square with house",
image: ""
}, {
    question:"What does the 'Children' sign mean?",
choices: ["Playground", "Attention, children", "No speed reduction", "Only pedestrians"],
correctAnswer: "Attention, children",
image: ""
}
],   
hard: [
    {
    question:"What does a double solid line on the road mean?",
choices: ["Overtake allowed", "No overtaking in both directions", "Only buses", "Only at night"],
correctAnswer: "No overtaking in both directions",
image: ""
}, {
    question:"How to act at flashing yellow traffic light at intersection?",
choices: ["Go", "Slow down and yield", "Always stop", "Turn immediately"],
correctAnswer: "Slow down and yield",
image: ""
}, {
    question:"What does the 'End of speed limit zone' sign mean?",
choices: [ "Start of residential area", "Speed limited", "Yield", "Speed limit ends"],
correctAnswer: "Speed limit ends",
image: ""
}, {
    question:"How to act at railway crossing with barrier?",
choices: ["Pass always", "Ignore", "Stop if barrier closed", "Slow down and go"],
correctAnswer: "Stop if barrier closed",
image: ""
}, {
    question:"What does the 'Disabled parking zone' sign mean?",
choices: ["Only for disabled", "Anyone can park", "Only buses", "No parking"],
correctAnswer: "Only for disabled",
image: ""
}, {
    question:"Which sign forbids all vehicles?",
choices: ["Red circle without symbol", "Blue square", "Yellow triangle", "White rectangle"],
correctAnswer: "Red circle without symbol",
image: ""
}, {
    question:"What does the 'Dead end' sign mean?",
choices: ["Road closed", "Detour", "Pedestrian zone", "Dead end"],
correctAnswer: "Dead end",
image: ""
}, {
    question:"How to act at 'Two-way-traffic' sign?",
choices: ["Go straight only", "Drive in opposite lane", "Careful, two-way traffic", "No overtaking"],
correctAnswer: "Careful, two-way traffic",
image: ""
}, {
    question:"What does the 'Start of restricted parking zone' sign mean?",
choices: ["Parking forbidden", "Time-limited parking", "Parking allowed", "Only buses"],
correctAnswer: "Time-limited parking",
image: ""
}, {
    question:"Which sign warns about an intersection with roundabout",
choices: ["Blue square", "Yellow rectangle", "Triangle with circular arrows", "Red circle"],
correctAnswer: "Triangle with circular arrows",
image: ""
}
]
},
history: {
    easy: [
        {
    question:"Who was the first Roman Emperor?",
choices: ["Julius Caesar", "Nero", "Augustus", "Trajan"],
correctAnswer: "Augustus",
image: ""
}, {
    question:"In which city are the Pyramids of Giza located?",
choices: ["Baghdad", "Athens", "Rome", "Cairo"],
correctAnswer: "Cairo",
image: ""
}, {
    question:"What is the ancient Roman amphitheatre called?",
choices: ["Colosseum", "Parthenon", "Acropolis", "Forum"],
correctAnswer: "Colosseum",
image: ""
}, {
    question:"Who discovered America in 1492?",
choices: ["Christopher Columbus", "Vasco de Gama", "Magellan", "Cook"],
correctAnswer: "Christoper Columbus",
image: ""
}, {
    question:"Which civilization built the pyramids?",
choices: ["Romans", "Egyptians", "Greeks", "Persians"],
correctAnswer: "Egyptians",
image: ""
}, {
    question:"What was Darwin's ship called?",
choices: ["Victoria", "Discovery", "Endeavour", "Beagle"],
correctAnswer: "Beagle",
image: ""
}, {
    question:"Where was Ancient Greece located?",
choices: ["Italy", "Greece", "Spain", "Egypt"],
correctAnswer: "Greece",
image: ""
}, {
    question:"Who was a famous Roman General?",
choices: ["Alexander", "Napaleon", "Stalin", "Caesar"],
correctAnswer: "Caesar",
image: ""
}, {
    question:"Which ancient city was destroyed by Mount Vesuvius?",
choices: ["Troy", "Sparta", "Pompeii", "Athens"],
correctAnswer: "Pompeii",
image: ""
}, {
    question:"Which empire built roads across Europe?",
choices: ["Ottoman Empire", "British Empire", "Roman Empire", "Persian Empire"],
correctAnswer: "Roman Empire",
image: ""
}
],
medium: [
    {
    question:"In what year did World War I begin?",
choices: ["1914", "1918", "1939", "1942"],
correctAnswer: "1914",
image: ""
}, {
    question:"Who was the leader of Nazi Germani?",
choices: ["Mussolini", "Hitler", "Stalin", "Churchill"],
correctAnswer: "Hitler",
image: ""
}, {
    question:"Where did the French Revolution take place?",
choices: ["Rome", "Berlin", "Lisbon", "Paris"],
correctAnswer: "Paris",
image: ""
}, {
    question:"Who was Emperor of France?",
choices: ["Napaleon", "Caesar", "Alexander", "William"],
correctAnswer: "Napaleon",
image: ""
}, {
    question:"Which country landed on the Moon first?",
choices: ["China", "USSR", "USA", "UK"],
correctAnswer: "USA",
image: ""
}, {
    question:"What was Columbus flagship called?",
choices: ["Titanic", "Victory", "Santa Maria", "Endeavour"],
correctAnswer: "Santa Maria",
image: ""
}, {
    question:"Which empire ruled the Ottomans?",
choices: ["Roman Empire", "Ottoman Empire", "Byzantine Empire", "Persian Empire"],
correctAnswer: "Ottoman Empire",
image: ""
}, {
    question:"Where was the Trojan Horse story set?",
choices: ["Sparta", "Rome", "Athens", "Troy"],
correctAnswer: "Troy",
image: ""
}, {
    question:"Which side won WW II/ WWII in Europe?",
choices: ["Axis", "Allies", "USSR only", "Germany"],
correctAnswer: "Allies",
image: ""
}, {
    question:"Whare was the Taj Mahal built?",
choices: ["India", "Egypt", "China", "Turkey"],
correctAnswer: "India",
image: ""
}
],
hard: [
    {
    question:"In what year did the Berlin Wall fall?",
choices: ["1961", "1979", "1989", "1991"],
correctAnswer: "1989",
image: ""
}, {
    question:"Who commanded Allied forces in Normandy",
choices: ["Eisenhower", "Churchill", "Patton", "Montgomery"],
correctAnswer: "Eisenhower",
image: ""
}, {
    question:"In what year did WW II/ WWII end?",
choices: ["1939", "1945", "1944", "1950"],
correctAnswer: "1945",
image: ""
}, {
    question:"Which empire used legions first?",
choices: ["Greek", "Persian", "Egyptian", "Roman"],
correctAnswer: "Roman",
image: ""
}, {
    question:"Who developed the theory of relativity?",
choices: ["Newton", "N.Tesla", "Einstein", "Galileo"],
correctAnswer: "Einstein",
image: ""
}, {
    question:"Which battle defeated Napaleon?",
choices: ["Austerlitz", "Waterloo", "Leipzig", "Trafalgar"],
correctAnswer: "Waterloo",
image: ""
}, {
    question:"Which country launched the first satellite?",
choices: ["USA", "China", "France", "USSR"],
correctAnswer: "USSR",
image: ""
}, {
    question:"What was Germany's WW II / WWII plan called?",
choices: ["Blitzkrieg", "Neptune", "Barbarossa", "Overlord"],
correctAnswer: "Barbarossa",
image: ""
}, {
    question:"Where did Germany surrender in WW II / WWII",
choices: ["Berlin", "Paris", "Kiev", "Rome"],
correctAnswer: "Berlin",
image: ""
}, {
    question:"Which empire was the largest in history?",
choices: ["Roman Empire", "British Empire", "Mongol Empire", "Ottoman Empire"],
correctAnswer: "British Empire",
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
