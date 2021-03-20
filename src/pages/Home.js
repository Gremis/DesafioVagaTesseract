import React, { Component } from "react";
import Member from "../components/Member";
import MemberGithub from "../components/MemberGithub";
import "../style.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      visible: false,
      members: [],
      member: [],
      search: false,
      result: [],
    };

    fetch("https://api.github.com/orgs/grupotesseract/public_members")
      .then((response) => response.json())
      .then((results) => {
        this.setState({ members: results });
      });
  }

  handleClick(member) {
    //event when you click photo
    this.setState({ visible: true, member: member });
  }

  handleChange = (e) => {
    //filter searches by username. Observation has to be complete
    let inputValue = e.target.value;
    if (inputValue.length > 0) {
      let result = [];
      let search = this.state.members.find((user) => user.login == inputValue);
      if (search != undefined) {
        result.push(search);
        this.setState({ search: true, result: result });
      } else {
        this.setState({ search: false, result: [] });
      }
    } else {
      this.setState({ search: false, result: [] });
    }
  };

  // I press the back button to return to the initial list
  handleBack() {
    this.setState({ visible: false, member: [], search: false, result: [] });
  }

  render() {
    if (!this.state.visible) {
      //enter the page for the first time
      if (this.state.search == false) {
        //I have not done the search yet
        return (
          <div className="Home">
            <h1 className="home-title">Tesseract Members</h1>
            <input
              className="input"
              type="text"
              placeholder="Member login..."
              onChange={this.handleChange}
            />
            <div className="home-list">
              {this.state.members.map((member) => {
                return (
                  <a
                    key={"a" + member.id}
                    href={"#" + member.login}
                    onClick={() => this.handleClick(member)}
                  >
                    <Member key={"c" + member.id} member={member} />
                  </a>
                );
              })}
            </div>
          </div>
        );
      } else {
        //I do the search
        return (
          <div className="Home">
            <h1 className="home-title">Tesseract Members</h1>
            <input
              className="input"
              type="text"
              placeholder="Member login..."
              onChange={this.handleChange}
            />
            <div className="home-list">
              {this.state.result.map((member) => {
                //render members
                return (
                  <a
                    key={"a" + member.id}
                    href={"#" + member.login}
                    onClick={() => this.handleClick(member)}
                  >
                    <Member key={"c" + member.id} member={member} />
                  </a>
                );
              })}
            </div>
          </div>
        );
      }
    } else {
      return (
        <div className="CharacterDetails">
          <div>
            <button onClick={() => this.handleBack()}>Voltar ao Inicio</button>
          </div>
          <h1 className="home-title">GitHub Member</h1>
          <MemberGithub
            key={"cd" + this.state.member.id}
            member={this.state.member}
          />
        </div>
      );
    }
  }
}

export default Home;
