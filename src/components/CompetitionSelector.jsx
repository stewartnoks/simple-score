import React from "react";
import { Dropdown, Row, Col, Table, DropdownButton } from "react-bootstrap";

const CompetitionSelector = (props) => {
  const handleMatchSelect = (e) => {
    props.handleMatchSelect(e);
  };

  return (
    <Row className="mt-3">
      <Col>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-center">
                <DropdownButton
                  variant="primary"
                  title={props.selectedMatch.matchConfigurationName}
                  id="dropdown-basic"
                  onSelect={handleMatchSelect}
                >
                  {props.matches.map((record, index) => {
                    return (
                      <Dropdown.Item key={index} eventKey={record.id}>
                        {record.matchConfigurationName.substring(0, 30) + ".."}
                      </Dropdown.Item>
                    );
                  })}
                </DropdownButton>
              </th>
            </tr>
          </thead>
        </Table>
      </Col>
    </Row>
  );
};

export default CompetitionSelector;
