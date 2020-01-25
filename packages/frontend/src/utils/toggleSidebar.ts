import ACTIONS from '../context/actions';

interface ToggleSidebar {
    isAnimating: boolean,
    isOpen: boolean
    dispatch: Function,
}

const toggleSidebar = ({ isAnimating, isOpen, dispatch }: ToggleSidebar) => {
    // if it's already animating, don't do anything at all!
    if (!isAnimating) {
        if (isOpen) {
            dispatch({ type: ACTIONS.CLOSE_SIDEBAR })
        } else {
            dispatch({ type: ACTIONS.OPEN_SIDEBAR })
        }
    }
}

export default toggleSidebar;
