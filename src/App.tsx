import { Route, Routes } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";
import { Home } from "@/pages/Home/Home";
import { About } from "@/pages/About/About";
import { Players } from "@/pages/Players/Players";
import { PlayerDetails } from "@/pages/PlayerDetails/PlayerDetails";
import { Services } from "@/pages/Services/Services";
import { News } from "@/pages/News/News";
import { NewsDetails } from "@/pages/NewsDetails/NewsDetails";
import { Contact } from "@/pages/Contact/Contact";
import { NotFound } from "@/pages/NotFound/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/players" element={<Players />} />
        <Route path="/players/:id" element={<PlayerDetails />} />
        <Route path="/services" element={<Services />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:slug" element={<NewsDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
