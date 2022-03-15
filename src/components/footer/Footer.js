
import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
// import me from '../assets/Octocat.png';

export default function App() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        {/* <div>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-facebook-f'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-twitter'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-google'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-instagram'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='' className='me-4 text-reset'>
            <i className='fab fa-github'></i>
          </a>
        </div> */}
      </section>

      <section className=''>
        <div className='container text-center text-md-start mt-5'>
          <div className='row mt-3'>
            <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <i className='fas fa-gem me-3'></i>Alvaro Calvo
              </h6>
             
         
            </div>

            <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Social Network</h6>
              <p>
                <a href='https://github.com/acmcalvo' className='text-reset'>
                  Github
                </a>
              </p>
              <p>
                <a href='https://www.linkedin.com/in/alvaro-calvo-acm/' className='text-reset'>
                  Linkedin
                </a>
              </p>
              
            </div>

            <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>links</h6>
              <p>
                <a href='#Main' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#About' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='#Portfolio' className='text-reset'>
                  Portfolio
                </a>
              </p>
              <p>
                <a href='#Resume' className='text-reset'>
                  Resume
                </a>
              </p>
            </div>

            <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <i className='fas fa-home me-3'></i> Alvaro Calvo
              </p>
              <p></p>
              <p>
                <i className='fas fa-home me-3'></i> Florida, USA
              </p>
              <p>
                <i className='fas fa-envelope me-3'></i>
                acmcalvo@yahoo.com
              </p>
             
            </div>
          </div>
        </div>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          acmcalvo.dev
        </a>
      </div>
    </MDBFooter>
  );
}