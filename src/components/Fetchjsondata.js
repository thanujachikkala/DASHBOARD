import React from "react";
import { Container } from "react-bootstrap";
import Userdata from './../userdata.json';

function Fetchjsondata() {
  return (
    <React.Fragment>
      <Container className="content" id="comment">
        <div className="row">
          <div className="col-sm-8">
            <h3 className="mt-3">Analyzed APK</h3>
            <table className="table table-striped table-bordered custom-table">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Sr. No.</th>
                  <th scope="col">ID</th>
                  <th scope="col">User Name</th>
                </tr>
              </thead>
              <tbody>
                {Userdata.map((users, index) => (
                  <tr key={index} className="table-row">
                    <td>{index + 1}</td>
                    <td>{users.id}</td>
                    <td>{users.name}</td>
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

export default Fetchjsondata;
