import { useAccessSettingsStore } from "../../../../store/settings/access.settings"

export const useGetCurrentLanguage = () => {
  return useAccessSettingsStore().lang;
}

export const useChangeLanguage = (lang: string) => {
  const store = useAccessSettingsStore();

  return () => {
    store.changeLanguage(lang);
  }
}