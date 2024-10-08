import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainLayout } from "../layout/main-layout";
import { Links } from "../data/NavLinks";
import { HomeDetail } from "../Pages/Home-detail";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {Links.map(({ path, component: Camp, id }) => (
          <Route
            key={id}
            index={!path && true}
            path={path}
            element={<Camp />}
          />
        ))}
      <Route path="home/detail/:id" element={<HomeDetail />} />
      </Route>
    </Routes>
  );
};
