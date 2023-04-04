//Modules
const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-aternative-flavor');
require('./7-mind-grenade')


sayHi(names.john);
sayHi('susan');
sayHi(names.peter);
sayHi(data.singlePerson.name);

