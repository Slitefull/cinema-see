import React, { FC, lazy } from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import { getIsAuth } from "@/utils/getIsAuth";
import { LOGIN_ROUTE, MOVIE_ROUTE, REGISTER_ROUTE, ROOT_ROUTE } from "@/constants/routes";
import Header from "@/components/header/header.component";


const LazyLoginRouter = lazy(() => import("@/pages/login/login"));
const LazyRegisterRouter = lazy(() => import("@/pages/register/register"));
const LazyCatalogRouter = lazy(() => import("@/pages/catalog/catalog"));
const LazyMovieRouter = lazy(() => import("@/pages/movie/movie"));

const App: FC = (): JSX.Element => {
  const isAuth = getIsAuth();

  return (
    <>
      {isAuth && <Header/>}
      <BrowserRouter>
        <Routes>
          <Route path={ROOT_ROUTE} element={<LazyCatalogRouter/>}/>
          <Route path={LOGIN_ROUTE} element={<LazyLoginRouter/>}/>
          <Route path={REGISTER_ROUTE} element={<LazyRegisterRouter/>}/>
          <Route path={MOVIE_ROUTE} element={<LazyMovieRouter/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
