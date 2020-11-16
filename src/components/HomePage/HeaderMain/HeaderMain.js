import React from 'react';
import './HeaderMain.css'

const HeaderMain = () => {
  return (
    <div style={{ backgroundColor: ' #E5E5E5' }} className="HeaderMain-body pt-3 d-flex align-items-center">
      <div className="m-auto">
        <h1 style={{ position: 'relative' }} className="pt-5 ">FIND YOUR HOUSE RENT</h1>
        <div style={{ position: 'relative' }} className="input-group mb-3 w-50 m-auto">
          <input type="text" className="form-control" placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2" />
          <div style={{ position: 'relative' }} className="input-group-append">
            <button className="btn text-white ml-3" type="button" id="button-addon2" style={{ backgroundColor: "#275A53" }}>Find Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMain;