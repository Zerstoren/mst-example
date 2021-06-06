import {useAccessUserBaseStore, useAccessUserStore} from "../../../../store/user/access.user"

export const useGetLoginUserName = () => {
  const store = useAccessUserStore();
  return store?.username; 
}

export const useUserLogout = () => {
  const userStore = useAccessUserBaseStore();
  return () => {
    userStore.setUser(null);
  }
}