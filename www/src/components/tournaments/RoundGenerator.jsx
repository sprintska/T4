import { React, useState } from "react";
import Query from "../../data/T4GraphContext";
import Button from "react-bootstrap/Button";

function RoundGenerator(props) {
  const [updatedPairings, setUpdatedPairings] = useState(0);

  function createMatches(tournament_id) {
    const generateNextRoundMatchesDoc = `
      mutation generateNextRoundMatches($tournament_id: uuid = "") {
        NextRoundMatches(tournament_id: $tournament_id) {
          match_ids
        }
      }`;

    if (!tournament_id) return false;
    console.log("Querying in RoundGenerator");
    Query("generateNextRoundMatches", generateNextRoundMatchesDoc, {
      tournament_id: props.tournament.id,
    }).then((data) => {
      console.log(data.NextRoundMatches.match_ids);
      // }).then((data) => {
      // setUpdatedPairings(data.NextRoundMatches.affected_rows);
    });
  }

  console.log("Loaded RoundGenerator");
  console.log(JSON.stringify(props));

  return (
    <div>
      <Button onClick={() => createMatches(props?.tournament?.id)}>
        Generate Pairings ({updatedPairings})
      </Button>
    </div>
  );
}

export default RoundGenerator;
