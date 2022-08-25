import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import TournamentPage from "../components/TournamentPage";

function Event() {
  let { event_id } = useParams();
  return (
    <>
      <h1>Details for Event# {event_id}</h1>
      <TournamentPage id={event_id} />
    </>
  );
}

export default Event;
