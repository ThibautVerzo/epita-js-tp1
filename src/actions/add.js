/* FIXME:
*
* export a function that adds a new element to the store.
*
* Rules:
* - add must be able to take either a single element
* or an array of new elements
* - you must use the functions from "../store"
*
*/
import {setState, getState} from "../store";

const add = (elements) => {
    const list = [...getState(), elements];
    setState(list);
};

export default add;
