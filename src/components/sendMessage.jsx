import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";

class SendMessage extends PureComponent {
  state = { message: "" };

  handleInput = e => {
    this.setState({ message: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <form className="App">
          <div className="form-group">
            <label htmlFor="#message">Message </label>
            <input
              className="form-msg-input"
              id="message"
              autoFocus
              value={this.state.message}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <button
              className={"form-btn"}
              onClick={e => this.props.handleButton(e, this.state.message)}
            >
              Send
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapDispatch = dispatch => ({
  handleButton: (e, message) => {
    e.preventDefault();
    dispatch({ type: actions.SEND, message: message });
  }
});

export default connect(
  null,
  mapDispatch
)(SendMessage);
