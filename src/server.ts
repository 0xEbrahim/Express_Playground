class Cons {
  login() {}
  logout() {}
}

const pro = Cons.prototype;
console.log(pro);
for (let key in pro) console.log(key);

console.log("Worked");
