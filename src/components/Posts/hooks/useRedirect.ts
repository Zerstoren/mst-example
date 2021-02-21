import { useHistory } from "react-router";
import { useGetLoginUserName } from "../../../shared/components/Parts/Header/hooks/useLoginUser";
import { USERS_ROUTE } from "../../Users/const";

export const useRedirectToHomeWhenUserNotAuth = () => {
  let history = useHistory();
  const username = useGetLoginUserName();

  if (!username) {
    setTimeout(() => history.push(USERS_ROUTE), 0);
    return true;
  }

  return false;
}