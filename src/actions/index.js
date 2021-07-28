// This is action

export const increment = 'INCREMENT';
export const decrement = 'DECREMENT';

export const incNumber = () => {
    return{
        type: increment
    }
}

export const decNumber = () => {
    return{
        type: decrement
    }
}