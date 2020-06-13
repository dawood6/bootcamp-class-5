const { act } = require("react-dom/test-utils");

const numberReducer = (state, action) => {
    switch (action.type) {
        case 'INCREAMENT':
            return state + action.val
        case 'DECREAMENT':
            return state - action.val
    }
}
export default numberReducer