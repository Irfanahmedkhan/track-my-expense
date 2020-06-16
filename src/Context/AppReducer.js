export default (state, action) => {
    switch (action.type) {
        case 'ADD_INCOME':
            return {
                ...state,
                incometransactions: [action.payload, ...state.incometransactions]
            }

        case "ADD_EXPENSE":
            return {
                ...state,
                expensetransactions: [action.payload, ...state.expensetransactions]
            };
        case "DELETE_TRANSACTION":
            return {
                ...state,
                incometransactions: state.incometransactions.filter(
                    incometransaction => incometransaction.id !== action.payload
                ),
                expensetransactions: state.expensetransactions.filter(
                    expensetransaction => expensetransaction.id !== action.payload
                )
            };

        default:
            return state;
    }
} 