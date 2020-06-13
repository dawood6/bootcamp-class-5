const { act } = require("react-dom/test-utils");

const numberReducer = (state, action) => {
    switch (action.type) {
        case 'INCREAMENT':
            return state + 1
        case 'DECREAMENT':
            return state - 1
    }
}
export default numberReducer