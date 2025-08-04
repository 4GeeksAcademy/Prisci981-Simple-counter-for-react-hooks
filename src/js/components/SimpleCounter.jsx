import React from 'react';
import PropTypes from 'prop-types';

function SimpleCounter(props) {
  return (
    <div className="bigCounter d-flex justify-content-center align-items-center gap-3 p-4">
      <div className="calendar bg-dark text-white p-3 rounded">
        <i className="far fa-clock fa-2x"></i>
      </div>
      <div className="digit bg-secondary text-white p-3 rounded">{props.digitFour}</div>
      <div className="digit bg-secondary text-white p-3 rounded">{props.digitThree}</div>
      <div className="digit bg-secondary text-white p-3 rounded">{props.digitTwo}</div>
      <div className="digit bg-secondary text-white p-3 rounded">{props.digitOne}</div>
    </div>
  );
}

SimpleCounter.propTypes = {
  digitFour: PropTypes.number,
  digitThree: PropTypes.number,
  digitTwo: PropTypes.number,
  digitOne: PropTypes.number,
};

export default SimpleCounter;
