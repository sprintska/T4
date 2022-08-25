import React from "react";
import TournamentPlayerList from "./TournamentPlayerList";

class TournamentPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row">
        <div className="row">
          <div className="col-md-6 d-flex gap-3">
            <TournamentPlayerList id={this.props.id} />
          </div>
        </div>
      </div>
    );
  }
}
export default TournamentPage;
