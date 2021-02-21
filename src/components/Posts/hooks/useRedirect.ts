import { useHistory } from "react-router";
import { useGetLoginUserName } from "../../../shared/components/Parts/Header/hooks/useLoginUser";

export const useRedirectToHomeWhenUserNotAuth = () => {
  let history = useHistory();
  const username = useGetLoginUserName();

  if (!username) {
    history.push("/");
    return true;
  }

  return false;
}