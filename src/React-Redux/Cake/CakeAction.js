import {BUY_CAKE} from './CakeType';


// Action creater that return an object
export const buyCake = () =>{
console.log('buyCake Funtoin call')
  return {
    type: BUY_CAKE
  }
}