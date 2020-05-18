console.log("hello");
console.error("keshva is dangerous");
console.log(console);
var a = 1;
let b = 2;
const c = 3; // initialization is impo here
// diff btwn var and let?
/*
number- NaN, Number Constructor
string :
null
undefind
array
object
function
boolean
*/

let s1;
let s2;
let s3;
s1 = "kj";
s2 = "kj";
// we can not assign var in normal string
s3 = `kj${s1}`;
console.log(s3);

let x = [];
x.push(9);
x.pop();
console.log(x.len);
x.len = 3;
console.log(x.len, x);
console.log(x.len, x);
console.log(x.len, x);

const kj = {
  name: "khyati",
  last: "jha",
  year: 2000,
  calAge: (x) => x - year,
  changeName: (x) => {
    name = x;
  },
};
// what is closure
console.log(kj.name);
kj.beautiful = 1;
console.log(kj.beautiful);
console.log("kj", kj);

const { name } = kj;
const { last: firstname } = kj;
console.log(firstname);

// spread op
const newObj = { ...kj };
newObj.name = "keshav";
console.log("newObj", newObj);
console.log("kj", kj);
const { last: first, ...data } = kj;
console.log("data", data);

function a() {
  s1 = "chichi";
  function b() {
    console.log(this.s1);
  }
  b();
  const c = () => {
    console.log(this.s1);
  };
  c();
}
a();
