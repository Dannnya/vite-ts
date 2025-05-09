import { useReducer } from 'react';

type State = { count: number };
type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

const reducer = ( state: State, action: Action ) => {
    switch (action.type) {
        case 'INCREMENT':
            if (state.count >= 5) {
                return { count: state.count * 3 };
            }
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

export const CounterComponent = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    
    return (
        <div>
            <p>Count: { state.count }</p>
            <button onClick={ () => dispatch({ type: 'INCREMENT'})} >Increment btn</button>
            <button onClick={ () => dispatch({ type: 'DECREMENT'})} >Derement btn</button>
        </div>
    )
};