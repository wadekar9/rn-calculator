
import { clear } from "../Context/ActionCreators"

export const OnButtonPressed = (data, dispatch) => {
    dispatch(clear());
}