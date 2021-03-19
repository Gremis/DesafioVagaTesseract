import React, { Component } from "react";
import "../style.css";

class Home extends Component {
  constructor() {
    super();
    this.state = { members: [] };
    fetch("https://api.github.com/orgs/grupotesseract/public_members")
      .then((response) => response.json())
      .then((results) => {
        // console.log(results);
        this.setState({ members: results });
      });
  }

  render() {
    return (
      <div className="Home">
        <h1 className="home-title">Tesseract Members</h1>
        <input className="input" type="text" placeholder="Member login..." />
        <div className="home-list">
          {this.state.members.map((member) => {
            return (
              <a key={"a" + member.id} href={"#" + member.login}>
                <p>{member.login}</p>
                {/* component Member */}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
