import {BUY_CAKE} from './CakeType';


// Action creater that return an object
export const buyCake = (number = 1) =>{
console.log('buyCake Funtoin call')
  return {
    type: BUY_CAKE,
    payload: number
  }
}