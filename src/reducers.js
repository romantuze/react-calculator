const initialState = {
  previous: null,
  current: null,
  operator: null,
  operatorClicked: false
}
export function calculatorReducer(state = initialState, action) {
  let count;
  switch (action.type) {
    case 'APPEND':
      if (state.current === null) {
        count = `${action.payload}`;
        return { ...state,
          current: count
        };
      }
      else if (state.operatorClicked) {
        count = `${action.payload}`;
        return { ...state,
          current: count,
          operatorClicked: false
        };
      }
      else {
        count = `${state.current}${action.payload}`;
        return { ...state,
          current: count
        };
      }
    case 'CLEAR':
      return {
        previous: null,
        current: null,
        operator: null,
        operatorClicked: false
      };
    case 'SIGN':
      if (state.current !== null) {
        count = state.current.charAt(0) === '-' ? state.current.slice(1) : `-${state.current}`;
        return { ...state,
          current: count
        };
      }
      else return state;
    case 'PERCENT':
      count = `${parseFloat(state.current)/100}`;
      return { ...state,
        current: count
      };
    case 'DOT':
      if (state.current.indexOf('.') === -1) {
        count = `${parseFloat(state.current)}.`;
        return { ...state,
          current: count
        };
      }
      else return state;
    case 'DIVIDE':
      return { ...state,
        operator: (a, b) => a / b,
        previous: state.current,
        operatorClicked: true
      };
    case 'TIMES':
      return { ...state,
        operator: (a, b) => a * b,
        previous: state.current,
        operatorClicked: true
      };
    case 'MINUS':
      return { ...state,
        operator: (a, b) => a - b,
        previous: state.current,
        operatorClicked: true
      };
    case 'ADD':
      return { ...state,
        operator: (a, b) => a + b,
        previous: state.current,
        operatorClicked: true
      };
    case 'EQUAL':
      if (state.previous) {
        count = state.operator(parseFloat(state.current), parseFloat(state.previous));
        return { ...state,
          current: count,
          previos: null
        };
      }
      else return state;
    default:
      return state;
  }
}

export default calculatorReducer;