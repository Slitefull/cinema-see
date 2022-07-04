import React, { FC, lazy } from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Header from "@/components/header/header.component";


const LazyLoginRouter = lazy(() => import("@/pages/login/login"));
const LazyRegisterRouter = lazy(() => import("@/pages/register/register"));
const LazyCatalogRouter = lazy(() => import("@/pages/catalog/catalog"));
const LazyMovieRouter = lazy(() => import("@/pages/movie/movie"));

const App: FC = (): JSX.Element => {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LazyCatalogRouter/>}/>
          <Route path="/sign-in" element={<LazyLoginRouter/>}/>
          <Route path="/sign-up" element={<LazyRegisterRouter/>}/>
          <Route path="/movie:id" element={<LazyMovieRouter/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
