import React, { FC } from "react";
import { BrowserRouter, Route, Routes, } from "react-router-dom";
import CatalogPage from "../pages/catalog/catalog";
import SongPage from "../pages/song/song";
import Header from "../components/header/header.component";


const App: FC = (): JSX.Element => {
  return (
    <>
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CatalogPage/>}/>
          <Route path="/song:id" element={<SongPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
