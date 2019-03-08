const types = {
  ADD: "ADD",
  REMOVE: "REMOVE"
}

export const actionCreators = {

  add: function add(item) {
    return {
        type: ADD,
        payload: {
            item: item,
        }
    }
  },

  remove: function remove(item) {
    return {
        type: REMOVE,
        payload: {
            item: item,
        }
    }
  }

}
 

const initialState = {
  items: [],
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action

  switch(type) {
    case types.ADD: {
      return { ...state,
        items: [...state.items, payload.item],
      }
    }

    case types.REMOVE: {
      return { ...state,
        items: [...state.items, payload.item],
      }
    }

    default: {
      return state
    }
  }
}
