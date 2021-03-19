import React, { Component } from "react";
import Member from "../components/Member";
import "../style.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, members: [] };
    fetch("https://api.github.com/orgs/grupotesseract/public_members")
      .then((response) => response.json())
      .then((results) => {
        this.setState({ members: results });
      });
  }

  render() {
    if (!this.state.visible) {
      return (
        <div className="Home">
          <h1 className="home-title">Tesseract Members</h1>
          <input
            className="input"
            type="text"
            placeholder="Member login..."
          />
          <div className="home-list">
            {this.state.members.map((member) => {
              return (
                <a key={"a" + member.id} href={"#" + member.login}>
                  <Member key={"c" + member.id} member={member} />
                </a>
              );
            })}
          </div>
        </div>
      );
    } else {
      return <p>component MemberGithub</p>;
    }
  }
}

export default Home;
