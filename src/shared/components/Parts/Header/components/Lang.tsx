import { observer } from "mobx-react";
import { useChangeLanguage, useGetCurrentLanguage } from "../hooks/useSettings";

const Lang = () => {
  const currentLanguage = useGetCurrentLanguage();
  const selectLanguageEn = useChangeLanguage("en");
  const selectLanguageRu = useChangeLanguage("ru");
  
  return (
    <>
      <div 
        className={currentLanguage === "en" ? "active" : ""}
        onClick={currentLanguage === "en" ? undefined : selectLanguageEn}
      >Lang: En</div>
      <div 
        className={currentLanguage === "ru" ? "active" : ""}
        onClick={currentLanguage === "ru" ? undefined : selectLanguageRu}
      >Lang: Ru</div>
    </>
  );
}

export default observer(Lang);
