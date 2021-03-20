import React, { Component } from "react";
import PropTypes from "prop-types";

export default class MemberGithub extends Component {
  static propTypes = {
    member: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = { user: [] }; //in this component I only render to the user
    const { member } = this.props;

    fetch(`https://api.github.com/users/${member.login}`)
      .then((response) => response.json())
      .then((result) => {
        this.setState({ user: result });
      });
  } //I receive the member property and I grab the data that github brings me from that member, when I have the result I insert it in the this.state

  render() {
    //I render the properties of the result to show it in detail
    let user = this.state.user;
    return (
      <div class="content-description">
        <img
          key={"i" + user.id}
          className="img-description"
          width="100%"
          src={user.avatar_url}
          alt={user.login}
        />
        <div className="character-description" key={user.id}>
          <div className="line-description">
            <p className="icon-description">Nome</p>
            <p className="p-desc-det">{user.name}</p>
          </div>
          <div className="line-description">
            <p className="icon-description">Repos</p>
            <p className="p-desc-det">{user.public_repos}</p>
          </div>
          <div className="line-description">
            <p className="icon-description">Seguidores</p>
            <p className="p-desc-det">{user.followers}</p>
          </div>
          <div className="line-description">
            <p className="icon-description">Data</p>
            <p className="p-desc-det">{user.created_at}</p>
          </div>
        </div>
      </div>
    );
  }
}
