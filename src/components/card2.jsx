import React, { PureComponent, Fragment } from "react";
import { connect } from "react-redux";

class Card2 extends PureComponent {
  render() {
    const { message } = this.props;
    return (
      <Fragment>
        <div className="card card2">
          <p>
            <b>Card 2</b>
          </p>
          <div> Message: {message}</div>
        </div>
      </Fragment>
    );
  }
}

const mapProps = state => {
  return state;
};
export default connect(mapProps)(Card2);
