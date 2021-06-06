import { useEffect } from "react"
import { useAccessUsersListStore } from "../store/usersList";
import {useAccessUserBaseStore} from "../../../shared/store/user/access.user";

export const useGetUsersList = () => {
  const store = useAccessUsersListStore();

  useEffect(() => {
    store.load();
  }, [store]);

  return store;
}

export const useLoginAction = () => {
  const store = useAccessUserBaseStore();

  return (id: number) => {
    store.setUser(id);
  }
}