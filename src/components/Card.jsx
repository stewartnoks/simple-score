import React, { useState, useEffect } from "react";
import CompetitionSelector from "../components/CompetitionSelector";
import Scorecard from "../components/Scorecard";
import { matchResult } from "../models/MatchResult";

const Card = (props) => {
  const [selectedMatch, setSelectedMatch] = useState({
    matchConfigurationName: "Select Match",
  });

  const [matches, setMatches] = useState(undefined);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch(process.env.PUBLIC_URL + "/" + "MatchConfiguration.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setMatches(myJson);
      });
  };

  const handleMatchSelect = (e) => {
    const match = matches.filter((x) => x.id === +e)[0];
    setSelectedMatch(match);
  };

  const handleSaveMatchResult = (matchResult) => {
    console.log(matchResult);
  };

  return (
    <>
      {matches && (
        <>
          <CompetitionSelector
            matches={matches}
            selectedMatch={selectedMatch}
            handleMatchSelect={handleMatchSelect}
          />
          <Scorecard
            curentMatch={selectedMatch}
            matchResult={matchResult}
            handleSaveMatchResult={handleSaveMatchResult}
          />
        </>
      )}
    </>
  );
};

export default Card;
