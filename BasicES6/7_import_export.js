import {sayHi,sayBye} from './say.js'
import *  as say from './say.js'
sayHi('Grai')
sayBye('Grai')

say.sayHi('TEST')
say.sayBye('TEST2')

// import from class export default
import User from './user.js'

//สร้าาง Object
const obj = new User('Grai')
obj.sayHi()