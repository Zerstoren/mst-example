import { useRootStore } from "../rootStore"

export const useAccessUserStore = () => {
  return useRootStore().user;
}
