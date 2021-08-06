import React from "react";
import { Card } from "react-bootstrap";
import { ToggleStatus } from "~/components";
import "./DeviceCard.scss";

const DeviceCard = props => {
  const { id, attributes: { name, model_number, state } = {} } = props.info;
  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-self-stretch align-items-stretch h-100">
          <div className="icon">&nbsp;</div>
          <div className="ms-2 c-details flex-fill">
            <h4 className="card-title h4">{name}</h4>
            <p className="card-text">{model_number}</p>
            <div className="toggleStatus">
              <ToggleStatus id={id} state={state} />
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default DeviceCard;
