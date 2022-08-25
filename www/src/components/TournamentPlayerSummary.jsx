import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class TournamentPlayerSummary extends React.Component {
  render() {
    let [wins, losses, draws] = [0, 0, 0];

    for (let match_results in this.props.data.User.MatchPlayers_aggregate
      .nodes) {
      if (match_results["win"]) {
        wins++;
      } else if (!match_results["win"]) {
        losses++;
      } else {
        draws++;
      }
    }

    const playerName = this.props.data.User.name;
    const tournament_points =
      this.props.data.User.MatchPlayers_aggregate.aggregate.sum
        .tournament_points;
    const mov =
      this.props.data.User.MatchPlayers_aggregate.aggregate.sum.points;
    const club = <Col sm={2}>{this.props.data.club}</Col>;
    const group = this.props.data.group;

    return (
      <Row gap={3}>
        <Col sm={4} xxl={4} variant="primary">
          {playerName}
        </Col>
        <Col sm={1} xxl={1}>
          {tournament_points}
        </Col>
        <Col sm={2} xxl={1}>
          {mov}
        </Col>
        <Col sm={2} xxl={2}>
          {wins} / {losses}
        </Col>
        <Col sm={3} xxl={2}>
          {club}
        </Col>
        <Col sm={1} xxl={2}>
          {group}
        </Col>
      </Row>
    );
  }
}
export default TournamentPlayerSummary;
