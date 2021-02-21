import { useRootStore } from "../rootStore"

export const useAccessSettingsStore = () => {
  return useRootStore().settings;
}
