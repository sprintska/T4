import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Event from "./pages/Event";
import Players from "./pages/Players";
import PlayerEditor from "./pages/players/PlayerEditor";
import Search from "./pages/Search";
import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="event/:event_id" element={<Event />} />
          <Route path="players" element={<Players />} />
          <Route path="players/:id" element={<PlayerEditor />} />
          <Route path="players/add" element={<PlayerEditor />} />
          <Route path="search" element={<Search />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;