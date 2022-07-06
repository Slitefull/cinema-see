import React, { createContext, Dispatch, FC, lazy, SetStateAction, useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes, } from "react-router-dom";
import { LOGIN_ROUTE, MOVIE_ROUTE, REGISTER_ROUTE, ROOT_ROUTE } from "@/constants/routes";
import { getIsAuth } from "@/utils/getIsAuth";
import { ThemeProvider } from "styled-components";
import Header from "@/components/header/header.component";
import { dark } from "@/themes/dark";
import { light } from "@/themes/light";
import { Themes } from "@/constants/themes";
import GlobalCSS from "@/global.css";


const LazyLoginRouter = lazy(() => import("@/pages/login/login"));
const LazyRegisterRouter = lazy(() => import("@/pages/register/register"));
const LazyCatalogRouter = lazy(() => import("@/pages/catalog/catalog"));
const LazyMovieRouter = lazy(() => import("@/pages/movie/movie"));
const LazyNotFoundRouter = lazy(() => import("@/pages/404/404"));

interface ThemePreferenceContextParams {
  currentTheme: Themes;
  setCurrentTheme: Dispatch<SetStateAction<Themes>>;
}

const themesMap = {
  light,
  dark
}

export const ThemePreferenceContext = createContext<ThemePreferenceContextParams | null>(null);

const App: FC = (): JSX.Element => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [currentTheme, setCurrentTheme] = useState<Themes>(Themes.dark)

  const theme = themesMap[currentTheme];

  useEffect(() => {
    const isAuthLS = getIsAuth();
    setIsAuth(isAuthLS)
  }, [])

  return (
    <ThemePreferenceContext.Provider value={{ currentTheme, setCurrentTheme }}>
      <ThemeProvider theme={theme}>
        {isAuth && <Header/>}
        <GlobalCSS/>
        <BrowserRouter>
          <Routes>
            <Route
              path={ROOT_ROUTE}
              element={isAuth
                ? <LazyCatalogRouter/>
                : <Navigate to={LOGIN_ROUTE}/>
              }/>
            <Route
              path={LOGIN_ROUTE}
              element={isAuth
                ? <Navigate to={ROOT_ROUTE}/>
                : <LazyLoginRouter setIsAuth={setIsAuth}/>
              }/>
            <Route
              path={REGISTER_ROUTE}
              element={isAuth
                ? <Navigate to={ROOT_ROUTE}/>
                : <LazyRegisterRouter/>
              }/>
            <Route
              path={MOVIE_ROUTE}
              element={isAuth
                ? <LazyMovieRouter/>
                : <Navigate to={LOGIN_ROUTE}
                />
              }/>
            <Route
              path="*"
              element={<LazyNotFoundRouter/>}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
}

export default App;

//TODO Add 404 page
