let b: number = 2;

// custom type

type Student = {
	name: string;
	age: number;
	courses: string[];
};

const std1: Student = {
	name: 'Hamza',
	age: 20,
	courses: [ 'Eng', 'Urdu', 'Maths' ]
};

// =======================

const arr:[boolean, number, string]= [true,1 , "abc"]
const arr1:[boolean, number, ...string[]]= [true,1 , "abc", "afas", "asfd"]

// =======================

const course: string[] = ["AI", "JS", "IOT"];
course[0] = "MS"

const mycourse: readonly string[] = ["AI", "JS", "IOT"];
// ye change nahi ho ga because of read only
// mycourse[0] = "MS"

// =========================

enum Student1{
    name="Hamza",
    age=22
}

console.log(Student1.name);
