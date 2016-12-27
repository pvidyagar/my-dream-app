const INITIAL_STATE:String ='' ;

export function AppNameReducer(state:String = INITIAL_STATE, action: any) {

  switch (action.type) {
    case 'NEW':
      return action.payload;

    default:
      return state;
  }
}
