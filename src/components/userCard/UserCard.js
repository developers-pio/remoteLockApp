import React from "react";
import { Card, Badge } from "react-bootstrap";
import dayjs from "dayjs";

const UserCard = props => {
  const {
    attributes: { name, email, status, starts_at = "", ends_at = "" } = {}
  } = props.info;

  let badgeVariant, badgeText;
  if (starts_at && ends_at) {
    badgeVariant = "warning";
    badgeText = "Upcoming";
  } else if (status === "current") {
    badgeVariant = "success";
    badgeText = "Active";
  }

  const formattedDate = (date = "") => {
    return dayjs(date).format("MMM YY HH:mm");
  };

  return (
    <Card>
      <Card.Body>
        <div className="d-flex align-self-stretch align-items-stretch h-100">
          <div className="icon">&nbsp;</div>
          <div className="ms-2 c-details flex-fill d-flex flex-column h-100">
            <h4 className="card-title h4">{name}</h4>
            <p className="card-text">{email}</p>
            {starts_at && ends_at && (
              <p className="date">{`${formattedDate(
                starts_at
              )} - ${formattedDate(ends_at)}`}</p>
            )}
            <div className="status">
              <Badge pill className="px-3 py-2" bg={badgeVariant}>
                {badgeText}
              </Badge>
            </div>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
