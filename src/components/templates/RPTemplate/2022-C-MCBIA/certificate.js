import PropTypes from "prop-types";
import React from "react";
import {
  renderLogoNPRP,
  renderAwardTextCET,
  renderTwoSignatures,
  renderFooter
} from "../common/certificate";

const Template = ({ document }) => (
  <div>
    <div
      className="container"
      style={{ border: 0, borderColor: "#AAA", borderStyle: "solid" }}
    >
      {renderLogoNPRP()}
      {renderAwardTextCET(document, 1)}
      {renderTwoSignatures(document, 2)}
    </div>
    {renderFooter(document)}
  </div>
);

Template.propTypes = {
  document: PropTypes.object.isRequired
};
export default Template;