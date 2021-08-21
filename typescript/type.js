var log = function (data) {
  console.log(data);
};

// Strings
var str = "lets kick off";
log(str);

// Number
var num = 555;
log(num);

// Boolean
var check;
check = true;
var verify;
verify = false;
log(check);
log(verify);

// Arrays
var arrStr;
arrStr = ["SSS", "SWAT"];
log(arrStr);
var arrNum;
arrNum = [1, 3];
log(arrNum);

// Tuples
var role;
role = ["customer", 1];
log(role);

//  Enum
var music;
(function (music) {
  music["ARTIST"] = "MJ";
  music[(music["ALBUM"] = 3)] = "ALBUM";
})(music || (music = {}));
var alb = music.ALBUM;
var artist = music.ARTIST;
log(alb);
log(artist);

// Any

// Avoid any. Use only when data type is unknown.
var avoidAny;
avoidAny = "string";
log(avoidAny);
avoidAny = 2344;
log(avoidAny);
var anyArray;
anyArray = ["string", 325];
log(anyArray);

// Objects
var obj = {
  name: "Doe John",
  age: 60,
  isMale: false,
};
log(obj.name);
log(obj.age);
log(obj.isMale);
var user = {
  name: "John Doe",
  age: 30,
  isMale: true,
};
log(user.name);
log(user.age);
log(user.isMale);

// Classes
var UserAccount = /** @class */ (function () {
  function UserAccount(name, age, isMale) {
    this.name = name;
    this.age = age;
    this.isMale = isMale;
  }
  return UserAccount;
})();
// var createAccount = new UserAccount("dennis", 30, true);
// log(createAccount);
