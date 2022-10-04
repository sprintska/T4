import {React, useState} from "react";
import Query from "../../data/T4GraphContext";
import { Form, Col, FloatingLabel, Row } from "react-bootstrap";


function TournamentNameEditable(props) {

  const updateTournamentNameDoc = `
    mutation updateTournamentName($name: String = "", $tournament_id: uuid = "") {
      update_Tournament(where: {id: {_eq: $tournament_id}}, _set: {name: $name}) {
        returning {
          name
        }
      }
    }
  `;

  const [newTournamentName, setNewTournamentName] = useState("")
  

  updateTournamentName = () => {
    if (!newTournamentName) {
      return (        <>
          <div>Loading...</div>
        </>)
    }

    Query("updateTournamentName", updateTournamentNameDoc, {
      name: newTournamentName,
      tournament_id: props.tournament.id,
    })
      .then(() => {
        props.update_tournament();
      })
      .then(() => {
        setNewTournamentName("");
      });
    props.onHide();
    // TODO: insert a "success" toast
  };

  handleNameUpdate = (event) => {
    setNewTournamentName(event.target.value);
  };

  handleClose = () => {
    this.props.show = false;
  };

    if (props) {
      return (
        <Form>
          <Row>
            <Form.Group
              as={Col}
              controlId="formEventName"
              xs={{ span: 8, offset: 2 }}
            >
              <FloatingLabel
                controlId="eventName"
                label="Event Name"
                className="mb-3"
              >
                <Form.Control
                  type="text"
                  placeholder="f"
                  required
                  onChange={handleNameUpdate}
                  value={this.state.newTournamentName}
                  autoFocus
                />
              </FloatingLabel>
            </Form.Group>
          </Row>
        </Form>
      );
    } else {
      return (
        <>
          <div>Loading...</div>
        </>
      );
    }
  };
}
export default TournamentNameEditable;
