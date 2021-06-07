import React, { Component } from "react";
import PropTypes from "prop-types";

class PropTipos extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string,
    email: PropTypes.string
  };

  render() {
    const { name, bio, email } = this.props;

    return (
      <div>
        <h4>{name}</h4>
        <p>{bio}</p>
        <p>{email}</p>
      </div>
    );
  }
}

/*PropTipos.propTypes = {
  name: PropTypes.string
};
*/

export default PropTipos;
