import React, { Component } from "react";
import axios from "axios";
import setAuthToken from "../../../Utils/setAuthToken";
import ExportData from "../../Export.js"

// NOTE: Trainer's unique ID gets passed down as a prop from the top App state

class Dashboard extends Component {

  state = {
    trainerFirstName: "",
    loaded: false
  };

  componentDidMount() {
    if (localStorage.jwtToken) {
      setAuthToken(localStorage.jwtToken);
    axios
      .get("/dashboard")
      .then((res) => {
        this.setState( {
          trainerFirstName: res.data.firstName,
          loaded: true
        })
        console.log("RES", res);
        console.log(this.props)
      })
      .catch(err => console.log(err));
    }
  }

  render() {
    const { loaded, trainerFirstName } = this.state

    if(!loaded) {
      return (<h1>Loading your details...</h1>)
    }

    return (
      <React.Fragment>
        <div className="dashboard">Dashboard</div>
        <p>Hello {trainerFirstName}, this is your dashboard</p>
        <ExportData />
      </React.Fragment>
    );
  }
}

export default Dashboard;
