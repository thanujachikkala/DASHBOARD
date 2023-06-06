import React from "react";
import { Container } from "react-bootstrap";
import Userdata from './../userdata.json';

function Analyzed() {
  return (
    <React.Fragment>
      <Container className="content">
        <div className="row">
          <div className="col-sm-8">
            <h3 className="mt-3">Analyzed APK</h3>
            <table className="table table-striped table-bordered custom-table">
              <thead className="thead-light">
                <tr>
                  
                  <th scope="col">ID</th>
                  <th scope="col">NAME</th>
                  <th scope="col">Sha256sum</th>
                  <th scope="col">MD5</th>
                  <th scope="col">ANALYSIS STATUS</th>
                </tr>
              </thead>
              <tbody>
                {Userdata.map((users, index) => (
                  <tr key={index} className="table-row">
                   
                    <td>{users.id}</td>
                    <td>{users.name}</td>
                    <td>{users.sha256sum}</td>
                    <td>{users.md5sum}</td>
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
