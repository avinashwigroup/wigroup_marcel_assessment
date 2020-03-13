import React from 'react';
import './Final.css';
import {
  Link
} from 'react-router-dom';

const Final = () => {
  return (
    <div>
      <div className="input-group">
        <label>Click "Back" to go to the second page.</label>
      </div>
      <Link to="/continue" className="btn-green">
        Back
      </Link>
    </div>
  )
}

export default Final
