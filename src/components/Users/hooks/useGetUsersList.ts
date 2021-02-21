import { useEffect } from "react"
import { useRootStore } from "../../../shared/store/rootStore";
import { useAccessUsersListStore } from "../store/usersList";

export const useGetUsersList = () => {
  const store = useAccessUsersListStore();

  useEffect(() => {
    store.load();
  }, [store]);

  return store;
}

export const useLoginAction = () => {
  const store = useRootStore();

  return (id: number) => {
    store.setUser(id);
  }
}