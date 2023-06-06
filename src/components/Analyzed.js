import React from "react";
import { Container } from "react-bootstrap";
import Userdata from './../userdata.json';

function Analyzed() {
  return (
    <React.Fragment>
      <Container className="content" id="about">
        <div className="row">
          <div className="col-sm-8">
            <h3 className="mt-3">Analyzed APK</h3>
            <table className="table table-striped table-bordered custom-table">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Sr. No.</th>
                  <th scope="col">Name</th>
                  <th scope="col">Time</th>
                </tr>
              </thead>
              <tbody>
                {Userdata.map((users, index) => (
                  <tr key={index} className="table-row">
                    <td>{index + 1}</td>
                    <td>{users.name}</td>
                    <td>{users.analysis_status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}

export default Analyzed;
