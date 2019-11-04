import React from 'react';

const Depart = ({ depart }) => {

console.log(depart);

var date = new Date("October 22, 2019 14:59:00");

console.log(date);
  return (
<div>
    <header>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    </link>
    </header>
    <h1>Departures</h1>

    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">FlightNo</th>
          <th scope="col">Airline</th>
          <th scope="col">Departure Time</th>
          <th scope="col">Departure Time</th>
          <th scope="col">Status</th>
        </tr>
      </thead>
      <tbody>
      {depart.map((depart) => (
        <tr>
          <td scope="row">{depart.Active}</td>
          <td >{depart.airlineCode}</td>
          <td >{depart.OtherInfo}</td>
          <td >{depart.Time}</td>
          <td >{depart.Status}</td>
        </tr>

      ))}
      </tbody>
  </table>

    </div>

  )
};

 export default Depart
