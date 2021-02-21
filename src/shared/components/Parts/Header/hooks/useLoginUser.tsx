import { useRootStore } from "../../../../store/rootStore";
import { useAccessUserStore } from "../../../../store/user/access.user"

export const useGetLoginUserName = () => {
  const store = useAccessUserStore();
  return store?.username; 
}

export const useUserLogout = () => {
  const rootStore = useRootStore();
  return () => {
    rootStore.setUser(null);
  }
}