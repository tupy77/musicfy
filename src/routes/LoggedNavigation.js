import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Album, Albums, Artist, Artists, Home, Profile } from "../pages";

export function LoggedNavigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:id" element={<Artist />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/albums/:id" element={<Album />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
