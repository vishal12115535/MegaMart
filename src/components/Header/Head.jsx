import React from "react";

export const Head = () => {
  return (
    <>
      <section className="head">
        <div className="container d_flex">
          <div className="left-row">
            <a
              target="_blank"
              href="https://api.whatsapp.com/send?phone=917428127318"
              className="icon-flex phone-icon"
            >
              <i className="fa fa-phone"></i>
              <label className="phone-icon" htmlFor="">
                +917428127318
              </label>
            </a>
            <a
              target="_blank"
              href="mailto:vishalChaudhary@gmail.com"
              className="icon-flex phone-icon"
            >
              <i className="fa fa-envelope"></i>
              <label className="phone-icon" htmlFor="">
                vishalChaudhary@gmail.com
              </label>
            </a>
          </div>
          <div className="right-row">
            <span>
              <label htmlFor="">Need Help ?</label>
            </span>
            <span>
              <span>🇧🇩 </span>
              <label htmlFor="">EN</label>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Head;
