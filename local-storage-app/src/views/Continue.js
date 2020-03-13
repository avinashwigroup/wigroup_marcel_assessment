import React from 'react';
import './Continue.css';
import {
  Link
} from 'react-router-dom';

const Continue = () => {
  return (
    <div>
      <div className="input-group">
        <label>Click "Continue" to go to the final page.</label>
      </div>
      <Link to="/final" className="btn-green">
        Continue
      </Link>
    </div>
  )
}

export default Continue
