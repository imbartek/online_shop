const initialState = {
    isOpen: false
}

const toggleMenu = (state = initialState, action) => {
    switch(action.type){
        case 'TOGGLE_MENU':
            return {
                isOpen: action.isOpen
            };

        default:
            return state;
    }
}

export default toggleMenu;