export function append(n) {
  return {
    type: 'APPEND',
    payload: n
  }
}

export const clear = () => ({ type: 'CLEAR' });

export const sign = () => ({ type: 'SIGN' });

export const percent = () => ({ type: 'PERCENT' });

export const times = () => ({ type: 'TIMES' });

export const divide = () => ({ type: 'DIVIDE' });

export const minus = () => ({ type: 'MINUS' });

export const add = () => ({ type: 'ADD' });

export const dot = () => ({ type: 'DOT' });

export const equal = () => ({ type: 'EQUAL' });