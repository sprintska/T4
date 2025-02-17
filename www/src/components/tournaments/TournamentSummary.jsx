import React from "react";
import PlayerLink from "../players/PlayerLink";
import { Link } from 'react-router-dom';

export default function TournamentSummary(props) {
    return (
        <div className="row">
            <div className="row">
                <Link to={"/events/"+props.data.name} className="tournament-link">{props.data.name}</Link>
            </div>
            <div className="row text-muted small">
                <div className="col-12 col-lg-6 d-flex row">
                    <span className="col-12 col-sm-6 d-flex gap-3">
                        <span><i className="bi bi-calendar3"></i> {props.data.start}</span>
                        <span><i className="bi bi-people-fill"></i> {props.data.Ladder_aggregate.aggregate.count}</span>
                    </span>
                    <span className="col-12 col-sm-6">
                        {props.data.Game &&
                        <span><i className="bi bi-trophy-fill"></i> {props.data.Game.value} </span>
                        }
                    </span>
                </div>
                <div className="col-12 col-lg-6 d-flex row">
                    <span className="col-12 col-sm-6"><i className="bi bi-globe"></i> {props.data.location}</span>
                    <span className="col-12 col-sm-6"><PlayerLink data={props.data.Creator} /></span>
                </div>
            </div>
        </div>
    )
}