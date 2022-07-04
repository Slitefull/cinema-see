import { LS_AUTH_KEY } from "@/constants/localStorage";


export const getIsAuth = () => !!localStorage.getItem(LS_AUTH_KEY);
