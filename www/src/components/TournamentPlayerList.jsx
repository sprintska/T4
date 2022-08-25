import React from "react";
import Container from "react-bootstrap/Container";
import TournamentPlayerSummary from "./TournamentPlayerSummary";

class TournamentPlayerList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.setState({ players: [] });
    startFetchMyQuery(this);
  }
  render() {
    if (this.state) {
      console.log(
        `this.state.players in TournamentPlayerList.render() is: ${this.state.players}`
      );
      return (
        <Container fluid>
          {this.state.players.map((player) => (
            <TournamentPlayerSummary key={player.User.id} data={player} />
          ))}
        </Container>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

async function fetchGraphQL(operationsDoc, operationName, variables) {
  const result = await fetch("http://localhost:8080/v1/graphql", {
    method: "POST",
    body: JSON.stringify({
      query: operationsDoc,
      variables: variables,
      operationName: operationName,
    }),
  });

  return await result.json();
}

const operationsDoc = `
  query PlayersInTournament ($tournament_id: uuid!) {
    TournamentPlayer(where: {Tournament: {id: {_eq: $tournament_id}}}, order_by: {User: {MatchPlayers_aggregate: {sum: {tournament_points: desc}}}}) {
      User {
        name
        MatchPlayers_aggregate {
          aggregate {
            sum {
              tournament_points
              points
            }
          }
          nodes {
            win
          }
        }
        id
      }
      club
      group
    }
  }
`;

function fetchMyQuery(tournamentId) {
  return fetchGraphQL(operationsDoc, "PlayersInTournament", {
    tournament_id: tournamentId,
  });
}

async function startFetchMyQuery(obj) {
  const { errors, data } = await fetchMyQuery(obj.props.id);

  if (errors) {
    // handle it
    console.log(`Error in fetchMyQuery: ${JSON.stringify(errors)}`);
    console.error(errors);
  }

  // do something great with this precious data
  console.log(data);
  obj.setState({ players: data.TournamentPlayer });
}

export default TournamentPlayerList;
