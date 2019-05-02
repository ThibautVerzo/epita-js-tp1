/* FIXME:
*
* export a function that updates a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
* - the updated element must not share the same reference as the previous one.
*
*/
import {getState, setState} from "../store";

const update = (index, element) => {
    var list = getState();
    if (index >= 0 && index < list.length)
        list[index] = element;
    setState(list);
};

export default update;
