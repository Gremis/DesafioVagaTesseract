import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Member extends Component {
  static propTypes = {
    member: PropTypes.object,
  };

  render() {
    // console.log(this.props);
    const { member } = this.props;
    return (
      <div>
        <img
          key={"i" + member.id}
          className="Img"
          width="100%"
          src={member.avatar_url}
          alt={member.login}
        />
        <div className="Description" key={member.id}>
          <p className="p-desc">{member.login}</p>
        </div>
      </div>
    );
  }
}
