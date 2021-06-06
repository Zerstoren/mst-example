import {types, Instance} from "mobx-state-tree";
import { connectReduxDevtools } from "mst-middlewares"
import Form from "./components/Form/store/form";
import PostsList from "./components/Posts/store/postsList";
import UsersList from "./components/Users/store/usersList";
import Settings from "./shared/store/settings/settings";
import {createContext, useContext} from "react";
import {UserBase} from "./shared/store/user/userBase";

export const RootStore = types.model("root", {
  form: Form,
  postsList: PostsList,
  usersList: UsersList,
  settings: Settings,
  loginUser: UserBase,
}).create({
  form: {},
  postsList: {posts: []},
  usersList: {users: []},
  settings: {lang: "en"},
  loginUser: {},
});

connectReduxDevtools(require("remotedev"), RootStore);

export type TRootStore = Instance<typeof RootStore>;

export const RootStoreContext = createContext<TRootStore>(RootStore);

export const useRootStore = () => {
  return useContext(RootStoreContext);
}
