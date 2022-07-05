import React, { FC, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes, } from "react-router-dom";
import { LOGIN_ROUTE, MOVIE_ROUTE, REGISTER_ROUTE, ROOT_ROUTE } from "@/constants/routes";
import Header from "@/components/header/header.component";


const LazyLoginRouter = lazy(() => import("@/pages/login/login"));
const LazyRegisterRouter = lazy(() => import("@/pages/register/register"));
const LazyCatalogRouter = lazy(() => import("@/pages/catalog/catalog"));
const LazyMovieRouter = lazy(() => import("@/pages/movie/movie"));

const App: FC = (): JSX.Element => {
  const isAuth = true;

  return (
    <>
      {isAuth && <Header/>}
      <BrowserRouter>
        <Routes>
          <Route path={ROOT_ROUTE} element={isAuth ? <LazyCatalogRouter/> : <Navigate to={LOGIN_ROUTE}/>}/>
          <Route path={LOGIN_ROUTE} element={isAuth ? <Navigate to={ROOT_ROUTE}/> : <LazyLoginRouter/>}/>
          <Route path={REGISTER_ROUTE} element={isAuth ? <Navigate to={ROOT_ROUTE}/> : <LazyRegisterRouter/>}/>
          <Route path={MOVIE_ROUTE} element={isAuth ? <LazyMovieRouter/> : <Navigate to={LOGIN_ROUTE}/>}/>
          <Route path="*" element={
            <main>
              <p>404</p>
            </main>
          }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

//TODO Add 404 page
