import {useRootStore} from "../../../store";

export const useAccessSettingsStore = () => {
  return useRootStore().settings;
}
