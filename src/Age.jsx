import React, { useState } from 'react';
import './Style.css'; 

const AgeCalculator = () => {
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {

    const currentYear = 2023;
    const birthYear = parseInt(year, 10);

    if (!isNaN(birthYear)) {
      const calculatedAge = currentYear - birthYear;
      setAge(`Your age is ${calculatedAge} years.`);
    } else {
      setAge('Please enter a valid birth year.');
    }
  };

  return (
    <div className="container">
      <div className="base">
        <div className="enter">
          <h4>Age Calculator</h4>
        </div>
        <div className="block">
          <p className="title">Date</p>
          <input
            type="text"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            placeholder="dd"
            required
            minLength="1"
            maxLength="2"
          />
        </div>
        <div className="block">
          <p className="title">Month</p>
          <input
            type="text"
            name="month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            placeholder="mm"
            required
            minLength="1"
            maxLength="2"
          />
        </div>
        <div className="block">
          <p className="title">Year</p>
          <input
            type="text"
            name="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="yyyy"
            required
            minLength="4"
            maxLength="4"
          />
        </div>
      </div>
      <div className="base">
        <div className="enter">
          <button type="button" onClick={calculateAge}>
            Submit
          </button>
        </div>
      </div>
      <div id="age">{age}</div>
    </div>
  );
};

export default AgeCalculator;
