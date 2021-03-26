// var vs let vs const
// Block scoped and can be reassigned 
//let name;
//name ='pual'
//console.log(name)
//let name ='jon'
//console.log(name)
//cannot be reassigned 
//name ='jon';
//console.log(name);

//const number;
//number = 15
//console.log(number)
//const number =17
//console.log(number)
/*


// var is function scoped and declaration loads up before
the file is read*/
console.log(x)
var x = 10;

// let must be declared first before being called;
//else error occurs//

//console.log(y)
// let y=15 error!

console.log(3 === "3")

let myNum = 5;
let myStr = '5';
console.log(typeof myNum); //typeof tells you data type

console.log(typeof myStr);
console.log(myNum + myStr) // concatenates int with the string and turns it into a string

// Git
// Version control system designed to keep a
//chronological timeline of all your code changes.
//to traverse file system in terminal:
// cd name_of_folder -- moves you down
// cd ..-lists items inside existing folder
// pwd - specifies directory path you're currently in

// To initiate a git repository
// git init
// Staging files for a commit
// git add <file_name> OR git add . to add all of
//the files inside the folder that you are in and 
//stage them for a Commit // git commit -m " your commit message here"

// to view the commit:
//git log
// Shows us commit hash, branch name, commit
//Message, and other metadata

// Go to github.com and click create repository
// Name our repository, make sure to leave it
 //public and keep all other options deselected
// Click create repository
// Copy the HTTPS url provided (one that ends with
//.git)
// Go back to vscode
//link your local repository with remote
//repository by typing;
// git remote add origin <paste the link>
// to push to move repository
///git push origin master