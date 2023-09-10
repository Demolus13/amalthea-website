import React, { useEffect, useState } from "react";
import { auth, database } from "../../utilities/FirebaseConfig";
import { ref, set } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";

const RobowarsRegistration = () => {
  const [leaderName, setLeaderName] = useState("");
  const [leaderNumber, setLeaderNumber] = useState("");
  const [teamName, setTeamName] = useState("");
  const [numberOfMembers, setNumberOfMembers] = useState(3);
  const [arr, setArr] = useState([]);

  const [members, setMembers] = useState({});

  const [infoMsg, setInfoMsg] = useState("");

  const [user, loading, error] = useAuthState(auth);

  const handleMembers = e => {
    const newMembers = members;
    if (e.target.type === "text") {
      newMembers[e.target.id] = {
        ...members[e.target.id],
        name: e.target.value,
      };
    }
    if (e.target.type === "number") {
      newMembers[e.target.id] = {
        ...members[e.target.id],
        number: e.target.value,
      };
    }
    if (e.target.type === "email") {
      newMembers[e.target.id] = {
        ...members[e.target.id],
        email: e.target.value,
      };
    }
    setMembers(newMembers);
  };

  //make table row for n members
  useEffect(() => {
    let newMembers = members;
    for (
      let i = Object.keys(members).length - 1;
      i > numberOfMembers - 1;
      i--
    ) {
      delete newMembers[i];
    }
    setMembers(newMembers);
    const newArr = Array.from({ length: numberOfMembers }, (v, k) => (
      <tr key={k}>
        <td>
          <input id={k} onChange={handleMembers} required type="text" />
        </td>
        <td>
          <input id={k} onChange={handleMembers} required type="number" />
        </td>
        <td>
          <input id={k} onChange={handleMembers} required type="email" />
        </td>
      </tr>
    ));
    setArr(newArr);
  }, [numberOfMembers]);

  const handleMakeTeam = e => {
    setInfoMsg("");
    e.preventDefault();
    if (leaderNumber.length !== 10) {
      setInfoMsg("Contact Number must be 10 digits long!");
      return;
    }
    const team = {
      leaderName,
      leaderNumber,
      leaderEmail: user.email,
      teamName,
      numberOfMembers,
      members,
    };
    console.log(team);

    //Setting data in firebase database
    set(ref(database, "robowars/teams/" + teamName), {
      leaderName,
      leaderUID: user.uid,
      numberOfMembers,
      members,
    });
    set(ref(database, "robowars/leaders/" + user.uid), {
      leaderName,
      leaderEmail: user.email,
      leaderNumber,
      teamName,
    });
    setInfoMsg(" Team Registered! ");
  };
  return (
    <div className="register-content">
      <form onSubmit={handleMakeTeam}>
        <div className="reg-info-row">
          <span>Leader's Name: </span>
          <input
            value={leaderName}
            onChange={e => setLeaderName(e.target.value.toLowerCase())}
            required
            id="leader-name"
            type="text"
          />
        </div>
        <div className="reg-info-row">
          <span>Leader's Contact Number: </span>
          <input
            value={leaderNumber}
            onChange={e => setLeaderNumber(e.target.value)}
            required
            minLength={10}
            id="leader-contact"
            type="number"
          />
        </div>
        <div className="reg-info-row">
          <span>Team's Name: </span>
          <input
            value={teamName}
            onChange={e => setTeamName(e.target.value.toLowerCase())}
            required
            id="team-name"
            type="text"
          />
        </div>
        <div className="reg-info-row">
          <span>Number of Members (including Leader): </span>
          <select
            value={numberOfMembers}
            onChange={e => setNumberOfMembers(e.target.value)}
            required
            id="team-members">
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div className="robowars-team-table">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Number</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>{arr}</tbody>
          </table>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ marginLeft: "15px" }}>{infoMsg}</span>
          <button type="submit">Make Team</button>
        </div>
      </form>
    </div>
  );
};

export default RobowarsRegistration;
