import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { selectMessage } from "../selectors/selectMessage";
import { createSelector } from "reselect";

class Card1 extends PureComponent {
  render() {
    const { message } = this.props;

    return (
      <Fragment>
        <div className="card card1">
          <p>
            <b>Card 1</b>
          </p>
          <div> Message: {message}</div>
        </div>
      </Fragment>
    );
  }
}

// Used reselect to fetch only if there is new message
const mapStateToPropsSelector = createSelector(
  selectMessage,
  message => ({ message })
);

export default connect(mapStateToPropsSelector)(Card1);
