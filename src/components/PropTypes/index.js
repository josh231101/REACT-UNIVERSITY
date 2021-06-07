import React, { Component } from "react";
import PropTypes from "prop-types";

class PropTipos extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    email: PropTypes.string
  };

  static defaultProps = {
    name: "User not defined",
    bio: "No description defined",
    email: "admin@heroguest.com",
    // noop to prevent component crashes
    sendEmail: () => undefined
  };

  saluda = () => this.props.sendEmail();

  render() {
    const { name, bio, email } = this.props;

    return (
      <div>
        <h4>{name}</h4>
        <p>{bio}</p>
        <p>{email}</p>
        <button onClick={this.saluda}>JS noOP</button>
      </div>
    );
  }
}

/*PropTipos.propTypes = {
  name: PropTypes.string
};
*/

export default PropTipos;
