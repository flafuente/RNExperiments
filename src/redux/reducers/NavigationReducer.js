import { SignedIn } from '../../routes/Navigator';

const initialState = SignedIn.router.getStateForAction(SignedIn.router.getActionForPathAndParams('Login'));
export default (state = initialState, action) => {
  const nextState = SignedIn.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};