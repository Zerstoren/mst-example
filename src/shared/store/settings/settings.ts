import { Instance, SnapshotIn, types } from "mobx-state-tree";

const Settings = types.model("Settings", {
  lang: types.string,
}).actions((self) => ({
  changeLanguage(lang: string) {
    self.lang = lang;
  }
}));

export type TSettingsInstance = Instance<typeof Settings>;
export type TSettingSnapshotIn = SnapshotIn<typeof Settings>;

export default Settings;
