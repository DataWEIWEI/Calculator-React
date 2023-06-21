import ACTIONS from "./action";

const reducer = (state = {
    currentOperand: "",
    lastOperand: "*",
    operation: "321",
}, action) => {
    switch (action.type) {
        case ACTIONS.ADD_DIGIT:
            if (state.currentOperand === '0' && state.digit === '0')
                return state;
            if (state.currentOperand === '.' && state.currentOperand.includes('.'))
                return state;
            if (state.currentOperand === '0' && state.digit !== '.')
                return {
                    ...state,
                    currentOperand: action.state,
                };
            if (state.currentOperand === '.' && state.currentOperand !== '')
                return {
                    ...state,
                    currentOperand: '0.'
                };
            return {
                ...state,
                currentOperand: state.currentOperand + action.digit,
            }
        default:
            return state;
    }
};

export default reducer;
