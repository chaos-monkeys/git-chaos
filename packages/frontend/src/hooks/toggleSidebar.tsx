import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from '../context/actionTypes';


const toggleSidebar = ({ isAnimating, state, dispatch }) => {
    const isOpen = state.open;


    if (!isAnimating) {
        if (!isOpen) {
            dispatch({ type: OPEN_SIDEBAR })
        } else {
            dispatch({ type: CLOSE_SIDEBAR })
        }
    }
}



export default toggleSidebar;
