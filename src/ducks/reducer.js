const CHANGE_BT_INPUT = "CHANGE_BATTLETAG_INPUT";
const SET_BATTLETAG = "SET_BATTLETAG";

export function setBattleTag() {
  return {
    type: SET_BATTLETAG
  };
}

export function changeBTInput(input) {
  return {
    type: CHANGE_BT_INPUT,
    payload: input
  };
}

const initialState = {
  battleTagInput: "",
  battleTag: null
};

export default function reducer(state = initialState, action) {
  console.log("state, action", state, action);
  switch (action.type) {
    case CHANGE_BT_INPUT:
      return {
        ...state,
        battleTagInput: action.payload
      };

    case SET_BATTLETAG:
      return {
        ...state,
        battleTag: state.battleTagInput
      };
    default:
      // console.log("state", state);
      return state;
  }
}
