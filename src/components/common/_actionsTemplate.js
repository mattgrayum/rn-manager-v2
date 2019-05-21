// index.js ////////////////////////////////////////////////////////////////////
export const actionName = param => {
    return {
        type: 'action_name',
        payload: param          // optional
    }
}

export const action2Name = param => {
    return {
        type: 'action_2_name',
        payload: param          // optional
    }
}

// etc.

