import React, { useState, useEffect } from "react";
import { Row, Col, Table, Form, Button } from "react-bootstrap";

const Scorecard = (props) => {
  const [mResult, setMResult] = useState({ ...props.matchResult });

  useEffect(() => {
    // reset default state
    setMResult(props.matchResult);
  }, [props.curentMatch]);

  const calculate = (matchResInput, feildName, curentValue) => {
    let updateValue = false;
    let asInt = +curentValue;
    if (asInt <= 0) {
      matchResInput[feildName] = 0;
      updateValue = true;
    }

    // calculate sum

    let totalObj = { ...props.matchResult };

    totalObj.hits_v = +matchResInput.target_1_v + +matchResInput.target_2_v;
    totalObj.hits_5 = +matchResInput.target_1_5 + +matchResInput.target_2_5;
    totalObj.hits_4 = +matchResInput.target_1_4 + +matchResInput.target_2_4;
    totalObj.hits_3 = +matchResInput.target_1_3 + +matchResInput.target_2_3;
    totalObj.hits_2 = +matchResInput.target_1_2 + +matchResInput.target_2_2;

    totalObj.total_v = totalObj.hits_v * 5;
    totalObj.total_5 = totalObj.hits_5 * 5;
    totalObj.total_4 = totalObj.hits_4 * 4;
    totalObj.total_3 = totalObj.hits_3 * 3;
    totalObj.total_2 = totalObj.hits_2 * 2;

    totalObj.total =
      totalObj.total_v +
      totalObj.total_5 +
      totalObj.total_4 +
      totalObj.total_3 +
      totalObj.total_2;
    totalObj.hits =
      totalObj.hits_v +
      totalObj.hits_5 +
      totalObj.hits_4 +
      totalObj.hits_3 +
      totalObj.hits_2;
    totalObj.target_1_hits =
      +matchResInput.target_1_v +
      +matchResInput.target_1_5 +
      +matchResInput.target_1_4 +
      +matchResInput.target_1_3 +
      +matchResInput.target_1_2;
    totalObj.target_2_hits =
      +matchResInput.target_2_v +
      +matchResInput.target_2_5 +
      +matchResInput.target_2_4 +
      +matchResInput.target_2_3 +
      +matchResInput.target_2_2;

    totalObj.target_1_v = +matchResInput.target_1_v;
    totalObj.target_1_5 = +matchResInput.target_1_5;
    totalObj.target_1_4 = +matchResInput.target_1_4;
    totalObj.target_1_3 = +matchResInput.target_1_3;
    totalObj.target_1_2 = +matchResInput.target_1_2;

    totalObj.target_2_v = +matchResInput.target_2_v;
    totalObj.target_2_5 = +matchResInput.target_2_5;
    totalObj.target_2_4 = +matchResInput.target_2_4;
    totalObj.target_2_3 = +matchResInput.target_2_3;
    totalObj.target_2_2 = +matchResInput.target_2_2;

    if (updateValue) {
      totalObj[feildName] = "";
    }

    return totalObj;
  };

  const handleSaveMatchResult = () => {
    props.handleSaveMatchResult(mResult);
  };

  const generateInput = (mResult, propName) => {
    return (
      <Form.Control
        type="number"
        id={propName}
        onChange={(e) =>
          setMResult(
            calculate(
              { ...mResult, [propName]: e.target.value },
              propName,
              e.target.value
            )
          )
        }
        value={mResult[propName]}
      />
    );
  };

  if (!props.curentMatch.id) return null;

  return (
    <Row>
      <Col>
        <Form>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th colSpan="5">{props.curentMatch.matchConfigurationName}</th>
              </tr>
              <tr>
                <th />
                <th>{props.curentMatch.target_1_name}</th>
                <th>{props.curentMatch.target_2_name}</th>
                <th>Hits</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {props.curentMatch.target_1_v !== true ? null : (
                <tr>
                  <td>V</td>
                  <td>{generateInput(mResult, "target_1_v")}</td>
                  <td>{generateInput(mResult, "target_2_v")}</td>
                  <td>{mResult.hits_v}</td>

                  <td>{mResult.total_v}</td>
                </tr>
              )}
              {props.curentMatch.target_1_5 !== true ? null : (
                <tr>
                  <td>5</td>
                  <td>{generateInput(mResult, "target_1_5")}</td>
                  <td>{generateInput(mResult, "target_2_5")}</td>
                  <td>{mResult.hits_5}</td>

                  <td>{mResult.total_5}</td>
                </tr>
              )}

              {props.curentMatch.target_1_4 !== true ? null : (
                <tr>
                  <td>4</td>
                  <td>{generateInput(mResult, "target_1_4")}</td>
                  <td>{generateInput(mResult, "target_2_4")}</td>
                  <td>{mResult.hits_4}</td>

                  <td>{mResult.total_4}</td>
                </tr>
              )}

              {props.curentMatch.target_1_3 !== true ? null : (
                <tr>
                  <td>3</td>
                  <td>{generateInput(mResult, "target_1_3")}</td>
                  <td>{generateInput(mResult, "target_2_3")}</td>
                  <td>{mResult.hits_3}</td>

                  <td>{mResult.total_3}</td>
                </tr>
              )}

              {props.curentMatch.target_1_2 !== true ? null : (
                <tr>
                  <td>2</td>
                  <td>{generateInput(mResult, "target_1_2")}</td>
                  <td>{generateInput(mResult, "target_2_2")}</td>
                  <td>{mResult.hits_2}</td>

                  <td>{mResult.total_2}</td>
                </tr>
              )}

              <tr className="font-weight-bold">
                <td></td>
                <td>
                  {props.curentMatch.target_1_name}: {mResult.target_1_hits}
                </td>
                <td>
                  {props.curentMatch.target_2_name}: {mResult.target_2_hits}
                </td>
                <td colSpan="1">Hits: {mResult.hits}</td>
                <td className="text-center text-success font-weight-bold">
                  {"Total: "}
                  <label id="total">{mResult.total}</label>
                </td>
              </tr>
              <tr>
                <td colSpan="4">{props.curentMatch.numberOfShots}</td>

                <td className="text-center">
                  <Button onClick={handleSaveMatchResult}>Save</Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </Form>
      </Col>
    </Row>
  );
};

export default Scorecard;
