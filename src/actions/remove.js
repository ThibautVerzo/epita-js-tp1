/* FIXME:
*
* export a function that removes a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
import {setState, getState} from "../store";

const remove = (index) => {
    const list = getState();
    if (index >= 0 && index < list.length) {
        list.splice(index, 1);
        setState(list);
    }
};

export default remove;
