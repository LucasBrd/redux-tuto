/**
 * Enums
 */
export const ETodoVisibilityFilter = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_UNCOMPLETED: "SHOW_UNCOMPLETED"
}

export const ETodoActionType = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  SET_VISIBILITY_FILTER: "SET_VISIBILITY_FILTER"
}

/**
 * Action creators
 */
export function addTodo(text) {
  return {
    type: ETodoActionType.ADD_TODO,
    payload: {
      todoText: text
    }
  }
}

export function toggleTodo(_id) {
  return {
    type: ETodoActionType.TOGGLE_TODO,
    payload: {
      todoId: _id
    }
  }
}

export function setVisibilityFilter(_filter) {
  let foundFilter = Object.values(ETodoVisibilityFilter).find(f => f === _filter);
  if(!foundFilter) {
    throw new Error(`Visibility filter does not exists : ${_filter}`);
  }

  return {
    type: ETodoActionType.SET_VISIBILITY_FILTER,
    payload: {
      visibilityFilter: _filter
    }
  }
}