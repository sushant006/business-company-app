import React from "react";
import styled from "styled-components";
const Services = () => {
  return (
    <div>
      <Wrapper>
        <section className="services" id="services">
          <h1 className="heading">Our Services</h1>
          <div className="box-container">
            <div className="box">
              <h3>Branding</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quibusdam optio quo impedit voluptatum minima
                doloremque voluptate ea aspernatur deleniti.
              </p>
            </div>
            <div className="box">
              <h3>Design</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quibusdam optio quo impedit voluptatum minima
                doloremque voluptate ea aspernatur deleniti.
              </p>
            </div>
            <div className="box">
              <h3>Marketing</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quibusdam optio quo impedit voluptatum minima
                doloremque voluptate ea aspernatur deleniti.
              </p>
            </div>
            <div className="box">
              <h3>Development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quibusdam optio quo impedit voluptatum minima
                doloremque voluptate ea aspernatur deleniti.
              </p>
            </div>
            <div className="box">
              <h3>Photography</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quibusdam optio quo impedit voluptatum minima
                doloremque voluptate ea aspernatur deleniti.
              </p>
            </div>
            <div className="box">
              <h3>Support</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam quibusdam optio quo impedit voluptatum minima
                doloremque voluptate ea aspernatur deleniti.
              </p>
            </div>
          </div>
        </section>
      </Wrapper>
    </div>
  );
};
const Wrapper = styled.section`
  .heading {
    font-size: 3.5rem;
    font-weight: 500;
    margin-bottom: 5rem;
    text-align: center;
  }
  .services {
    background: #f5f5f8;
  }
  .services .box-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: 5rem;
  }
  .services .box-container .box {
    background: #ffff;
    text-align: center;
    border-radius: 1rem;
    padding: 3rem;
  }
  .services .box-container .box h3 {
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  .services .box-container .box p {
    font-size: 1.5rem;
    line-height: 2;
    color: #808080;
  }
  .services .box-container .box:hover {
    background: #16161d;
  }
  .services .box-container .box:hover h3,
  .services .box-container .box:hover p {
    color: #fff;
  }
`;

export default Services;
