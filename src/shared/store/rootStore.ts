import { Instance, types } from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';
import Settings from './settings/settings';
import User, { rootUserAction } from './user/user';

const RootData = types.model('RootStore', {
  settings: Settings,
  user: types.maybe(User)
});

type IRootData = Instance<typeof RootData>;

const RootStore = RootData.actions((self: IRootData) => {
  return {
    setUser: rootUserAction(self)
  }
});

type IRootStore = Instance<typeof RootStore>;

const rootStore: IRootStore = RootStore.create({
  settings: {
    lang: "en"
  }
});

makeInspectable(rootStore);

const useRootStore = () : IRootStore => rootStore;

export type {
  IRootData,
  IRootStore
};
export {
  useRootStore,
};
