import {useRootStore} from "../../../store";

export const useAccessUserBaseStore = () => {
  return useRootStore().loginUser;
}

export const useAccessUserStore = () => {
  return useRootStore().loginUser.user;
}
