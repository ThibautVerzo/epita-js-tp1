/* FIXME:
*
* export a function that gets a single element from the store.
*
* Rules:
* - you must use the functions from "../store"
*
*/
import {getState} from "../store";

const get = (index) => {
    const list = getState();
    if (index >= 0 && index < list.length)
        return list[index];
    else
        return null;
};

export default get;
