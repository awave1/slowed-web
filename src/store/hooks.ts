import { createTypedHooks } from "easy-peasy";
import { AppStore } from "./types/AppStore";

const typedHooks = createTypedHooks<AppStore>();

export const useAction = typedHooks.useStoreActions;
export const useDispatch = typedHooks.useStoreDispatch;
export const useStore = typedHooks.useStoreState;
