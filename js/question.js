const cLang = [
  {
    q: " Who is the father of C Language?",
    options: [
      " Bjarne Stroustrup",
      " Dennis Ritchie",
      " James A. Gosling",
      " Dr. E.F. Codd",
    ],
    answer: 1,
  },
  {
    q: " C Language developed at _____?",
    options: [
      " AT & T's Bell Laboratories of USA in 1972",
      " AT & T's Bell Laboratories of USA in 1970",
      " Sun Microsystems in 1973",
      " Cambridge        University in 1972",
    ],
    answer: 0,
  },
  {
    q: " For 16-bit compiler allowable range for integer constants is ______?",
    options: [
      " -3.4e38 to 3.4e38",
      " -32767 to 32768",
      " -32768 to 32767",
      " -32668 to 32667",
    ],
    answer: 2,
  },
  {
    q: " C programs are converted into machine language with the help of",
    options: [
      " An Editor",
      " A compiler",
      " An operating system",
      " None of the above",
    ],
    answer: 1,
  },
  {
    q: " A C variable cannot start with",
    options: [
      " An alphabet",
      " A number",
      " A special symbol other than underscore",
      " both (b) and (c)",
    ],
    answer: 3,
  },

  {
    q: " Which of the following is allowed in a C Arithmetic instruction",
    options: [" []", " {}", " ()", " None of the above"],
    answer: 2,
  },

  {
    q:
      " Which of the following shows the correct hierarchy of arithmetic operations in C",
    options: [" / + * -", " * - / +", " + - / *", " * / + -"],
    answer: 3,
  },

  {
    q: " What is an array?",
    options: [
      " An array is a collection of variables that are of the dissimilar data type",
      " An array is a collection of variables that are of the     same data type",
      " An array is not a collection of variables that are of the same data type",
      " None of the above",
    ],
    answer: 1,
  },

  {
    q: " What is right way to Initialize an array?",
    options: [
      " int num[6] = { 2, 4, 12, 5, 45, 5 };",
      " int n{} = { 2, 4, 12, 5, 45, 5 };",
      " int n{6} = { 2, 4, 12 };",
      " int n(6) = { 2, 4, 12, 5,     45, 5 };",
    ],
    answer: 0,
  },

  {
    q: " Array elements are always stored in _________ memory locations",
    options: [
      " Sequential",
      " Random",
      " Sequential and Random",
      " None of the above",
    ],
    answer: 0,
  },

  {
    q:
      " int fun(); - The declaration indicates the presence of a function defined inside the current module or in the same file.",
    options: ["True", "False"],
    answer: 0,
  },

  {
    q: " perror( ) function used to ?",
    options: [
      " Work same as printf()",
      " prints the error message specified by the compiler",
      " prints the garbage value assigned by the compiler",
      " None of the above",
    ],
    answer: 1,
  },

  {
    q: " Bitwise operators can operate upon?",
    options: [
      " double and chars",
      " floats and doubles",
      " ints and floats",
      " ints and chars",
    ],
    answer: 3,
  },

  {
    q: " What is C Tokens?",
    options: [
      " The smallest individual units of c program",
      " The basic element recognized by the compiler",
      " The largest individual units of     program",
      " A & B Both",
    ],
    answer: 3,
  },

  {
    q: " A C variable cannot start with",
    options: [
      " An alphabet",
      " A number",
      " A special symbol other than underscore",
      " both (b) and (c)",
    ],
    answer: 3,
  },

  {
    q: " Which is the right way to declare constant in C?",
    options: [
      " int constant var =10;",
      " int const var = 10;",
      " const int var = 10;",
      " B & C Both",
    ],
    answer: 3,
  },

  {
    q: " Which operators are known as Ternary Operator?",
    options: [" ::, ?", "?, :", " ?, ;;", " None of the above"],
    answer: 1,
  },

  {
    q: " In switch statement, each case instance value must be _______?",
    options: [" Constant", "Variable", " Special Symbol", " None of the above"],
    answer: 0,
  },

  {
    q: " What is the work of break keyword?",
    options: [
      " Halt execution of program",
      " Restart execution of program",
      " Exit from loop or switch statement",
      " None of the above",
    ],
    answer: 2,
  },

  {
    q: " Which one of the following is not a linear data structure?",
    options: [" Array", " Binary Tree", " Queue", " Stack"],
    answer: 1,
  },
];

const cppLang = [
  {
    q: " Delaration of a pointer more than once may cause ____",
    options: [" Error", " Abort", " Trap", " Null"],
    answer: 2,
  },
  {
    q: " Which one is not a correct variable type in C++?",
    options: [" float", " real", " int", " double"],
    answer: 0,
  },
  {
    q: " Which operation is used as Logical 'AND'",
    options: [" &", " ||", " &&", " +"],
    answer: 2,
  },
  {
    q: " An expression A.B in C++ means ____",
    options: [
      " A is member of object B",
      " B is member of Object A",
      " Product of A and B",
      " None of these",
    ],
    answer: 1,
  },
  {
    q: " A C++ code line ends with ___",
    options: [
      " A Semicolon (;)",
      " A Fullstop(.)",
      " A Comma (,)",
      " A Slash (/)",
    ],
    answer: 0,
  },

  {
    q: " ______ function is used to allocate space for array in memory",
    options: [" malloc()", " realloc()", " alloc()", " calloc()"],
    answer: 3,
  },

  {
    q:
      " A ponter pointing to a variable that is not initialized is called ____",
    options: [
      " Void Pointer",
      " Null Pointer",
      " Empty Pointer",
      " Wild Pointer",
    ],
    answer: 1,
  },

  {
    q: " Default constructor has ____ arguments",
    options: [
      " No argument",
      " One Argument",
      " Two Argument",
      " None of these",
    ],
    answer: 0,
  },

  {
    q: " A class whose objects can not be created is known as _____",
    options: [
      " Absurd Class",
      " Dead Class",
      " Super Class",
      " Abstract Class",
    ],
    answer: 3,
  },

  {
    q: " Which class allows only one object to be created",
    options: [
      " Nuclear Family Class",
      " Abstruct Class",
      " Sigleton Class",
      " Numero Uno Class",
    ],
    answer: 2,
  },

  {
    q: " Reusability of code in C++ is achieved through ____",
    options: [
      " Polymorphism",
      " Inheritance",
      " Encapsulation",
      " Both A and B",
    ],
    answer: 1,
  },

  {
    q: " In CPP, members of a class are ______ by default.",
    options: [" Public", " Private", " Protected", " Static"],
    answer: 1,
  },

  {
    q: " In C++ Program, inline fuctions are expanded during ____",
    options: [" Run Time", " Compile Time", " Debug Time", " Coding Time"],
    answer: 0,
  },

  {
    q:
      " To perfor file input/output operation in C++, we must include which header file ?",
    options: [" <fiostream>", " <ifstream>", " <ofstream>", " <fstream>"],
    answer: 3,
  },

  {
    q: " An exception in C++ can be generated using which keywords",
    options: [" thrown", " threw", " throw", " throws"],
    answer: 3,
  },

  {
    q: " A constructor is called whenever",
    options: [
      " an objective is declared",
      " an object is used",
      " a class is declared",
      " a class is used",
    ],
    answer: 0,
  },

  {
    q: " Which of the following are procedural languages?",
    options: [" Java", " Smalltalk", " C++", " C"],
    answer: 3,
  },

  {
    q: " C++ was originally developed by",
    options: [
      " Clocksin and Mellish",
      " Donald E Knuth",
      " Sir Richard Hadlee",
      " Bjarne Stroustrup",
    ],
    answer: 3,
  },

  {
    q: " Which of the following is not a storage class supported by C++ ?",
    options: [" Register", " Auto", " Mutable", " Dynamic"],
    answer: 3,
  },

  {
    q: "  Which of the following operators cannot be overloaded?",
    options: [" >>", " ?:", " Both 1 and 2", " no such operator exists"],
    answer: 1,
  },
];

const javaLang = [
  {
    q:
      " Which of the following option leads to the portability and security of Java?",
    options: [
      " Bytecode is executed by JVM",
      " The applet makes the Java code secure and portable",
      " Use of exception handling",
      " Dynamic binding     between objects",
    ],
    answer: 0,
  },
  {
    q: " Which of the following is not a Java features?",
    options: [
      " Dynamic",
      " Architecture Neutral",
      " Use of pointers",
      " Object oriented",
    ],
    answer: 2,
  },
  {
    q: " The \u0021 article referred to as a",
    options: [
      " Unicode escape sequenc",
      " Octal escape",
      " Hexadecimal",
      " Line feed",
    ],
    answer: 0,
  },
  {
    q: " _____ is used to find and fix bugs in the Java programs",
    options: [" JVM", " JRE", " JDK", " JDB"],
    answer: 3,
  },
  {
    q: " Which of the following is a valid declaration of a char?",
    options: [
      " char ch = '\\utea';",
      " char ca = 'tea';",
      " char cr = \u0223;",
      " char cc = 'itea';",
    ],
    answer: 0,
  },

  {
    q: " What is the return type of the hashCode() method in the Object class?",
    options: [" Object", " int", " long", " void"],
    answer: 1,
  },

  {
    q: " Which of the following is a valid long literal?",
    options: [" ABH8097", " L990023", " 904423", " 0xnf029L"],
    answer: 3,
  },

  {
    q: " What does the expression float a = 35 / 0 return?",
    options: [" 0", " Not a Number", " Infinity", " Run time exception"],
    answer: 2,
  },

  {
    q:
      " Evaluate the following Java expression, if x=3, y=5, and z=10: ++z + y - y + z + x++",
    options: [" 24", " 23", " 20", " 25"],
    answer: 0,
  },

  {
    q:
      " Which of the following tool is used to generate API documentation in HTML format from doc comments in source code?",
    options: [
      " javap tool",
      " javaw command",
      " Javadoc tool",
      " javah command",
    ],
    answer: 2,
  },

  {
    q:
      " Which of the following creates a List of 3 visible items and multiple selections abled?",
    options: [
      " new List(false, 3)",
      " new List(3, true)",
      " new List(true, 3)",
      " new List(3, false)",
    ],
    answer: 1,
  },

  {
    q: " Which of the following for loop declaration is not valid?",
    options: [
      " for ( int i = 99; i >= 0; i / 9 )",
      " for ( int i = 7; i <= 77; i += 7 )",
      " for ( int i = 20; i >= 2; - -i )",
      " for ( int i = 2; i     <= 20; i = 2* i )",
    ],
    answer: 0,
  },

  {
    q:
      " Which method of the Class.class is used to determine the name of a class represented by the class object as a String?",
    options: [" getClass()", " intern()", " getName()", " toString()"],
    answer: 2,
  },

  {
    q:
      " In which process, a local variable has the same name as one of the instance variables?",
    options: [
      " Serialization",
      " Variable Shadowing",
      " Abstraction",
      " Multi-threading",
    ],
    answer: 1,
  },

  {
    q: " Which of the following is true about the anonymous inner class?",
    options: [
      " It has only methods",
      " Objects can't be created",
      " It has a fixed class name",
      " It has no class name",
    ],
    answer: 3,
  },

  {
    q: " Which package contains the Random class?",
    options: [
      " java.util package",
      " java.lang package",
      " java.awt package",
      " java.io package",
    ],
    answer: 0,
  },

  {
    q: " What do you mean by nameless objects?",
    options: [
      " An object created by using the new keyword",
      " An object of a superclass created in the subclass",
      " An object without having any         name but having a reference-",
      " An object that has no reference",
    ],
    answer: 3,
  },

  {
    q: " An interface with no fields or methods is known as a ______",
    options: [
      " Runnable Interface",
      " Marker Interface",
      " Abstract Interface",
      " CharSequence Interface",
    ],
    answer: 1,
  },

  {
    q: " Which of the following is an immediate subclass of the Panel class?",
    options: [
      " Applet class",
      " Window class",
      " Frame class",
      " Dialog class",
    ],
    answer: 0,
  },

  {
    q: "  Which option is false about the final keyword?",
    options: [
      " A final method cannot be overridden in its subclasses.",
      " A final class cannot be extended.",
      " A final class cannot extend other     classes.",
      " A final method can be inherited.",
    ],
    answer: 2,
  },
];

const pythonLang = [
  {
    q: " What is the maximum possible length of an identifier?",
    options: [" 16", " 32", " 64", " None of these above"],
    answer: 3,
  },
  {
    q: "  Who developed the Python language?",
    options: [
      " Zim Den",
      " Guido van Rossum",
      " Niene Stom",
      " Wick van Rossum",
    ],
    answer: 1,
  },
  {
    q: " In which year was the Python language developed?",
    options: [" 1995", " 1972", " 1981", " 1989"],
    answer: 3,
  },
  {
    q: " In which language is Python written?",
    options: [" English", " PHP", " C", " All of the above"],
    answer: 2,
  },
  {
    q:
      " Which one of the following is the correct extension of the Python file?",
    options: [" .py", " .python", " .p", " None of these"],
    answer: 0,
  },

  {
    q: " In which year was the Python 3.0 version developed?",
    options: [" 2008", " 2000", " 2010", " 2005"],
    answer: 0,
  },

  {
    q: " What do we use to define a block of code in Python language?-",
    options: [" Key", " Brackets", " Indentation", " None of these"],
    answer: 2,
  },

  {
    q: " Which character is used in Python to make a single line comment?",
    options: [" /", " //", " #", " !"],
    answer: 2,
  },

  {
    q:
      " Which of the following statements is correct regarding the object-oriented programming concept in Python?",
    options: [
      " Classes are real-world entities while objects are not real",
      " Objects are real-world entities while classes are not real",
      " Both     objects and classes are real-world entities",
      " All of the above",
    ],
    answer: 0,
  },

  {
    q: " What is the method inside the class in python language?",
    options: [" Object", " Function", " Attribute", " Argument"],
    answer: 1,
  },

  {
    q: " Which of the following declarations is incorrect?",
    options: [" _x = 2", " __x = 3", " __xyz__ = 5", " None of these"],
    answer: 3,
  },

  {
    q:
      " Why does the name of local variables start with an underscore discouraged?",
    options: [
      " To identify the variable",
      " It confuses the interpreter",
      " It indicates a private variable of a class",
      " None of these",
    ],
    answer: 2,
  },

  {
    q: " Which of the following is not a keyword in Python language?",
    options: [" var", " raise", " try", " with"],
    answer: 0,
  },

  {
    q:
      "  Which of the following statements is correct for variable names in Python language?",
    options: [
      " All variable names must begin with an underscore",
      " Unlimited length",
      " The variable name length is a maximum of 2",
      " All of the     above",
    ],
    answer: 1,
  },

  {
    q: " Which of the following declarations is incorrect in python language?",
    options: [
      " xyzp = 5,000,000",
      " x y z p = 5000 6000 7000 8000",
      " x,y,z,p = 5000, 6000, 7000, 8000",
      " x_y_z_p = 5,000,000",
    ],
    answer: 1,
  },

  {
    q: " Which of the following words cannot be a variable in python language?",
    options: [" _val", " val", " try", " _try_"],
    answer: 2,
  },

  {
    q: " Which of the following operators is the correct option for power(ab)?",
    options: [" a ^ b", " a**b", " a ^ ^ b", " a ^ * b"],
    answer: 1,
  },

  {
    q: " Which of the following precedence order is correct in Python?",
    options: [
      " Parentheses, Exponential, Multiplication, Division, Addition, Subtraction",
      " Multiplication, Division, Addition, Subtraction,         Parentheses, Exponential",
      " Division, Multiplication, Addition, Subtraction, Parentheses, Exponential",
      " Exponential, Parentheses,         Multiplication, Division, Addition, Subtraction",
    ],
    answer: 0,
  },

  {
    q: " Which one of the following has the same precedence level?",
    options: [
      " Division, Power, Multiplication, Addition and Subtraction",
      " Division and Multiplication",
      " Subtraction and Division",
      " Power and     Division",
    ],
    answer: 1,
  },

  {
    q:
      " Which one of the following has the highest precedence in the expression?",
    options: [" Division", " Subtraction", " Power", " Parentheses"],
    answer: 3,
  },
];
