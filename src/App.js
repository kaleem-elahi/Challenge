import React, { useEffect } from 'react';
import {VisualCard} from "./component/VisualCard";
import Papa from 'papaparse';
import "./asset/main.css";


function App() {

  useEffect(() => {
    getData()
  }) // [] means just do this once, after initial render


  async function getData(artist) {
    const data = Papa.parse(await fetchCsv(), {
      header: true,
      dynamicTyping: true,
      complete: function(results) {
        console.log(results);
      }
    }, [getData]);
  
    console.log(data); // result of CSV in JSON 
    return data;
}

async function fetchCsv() {
    const response = await fetch('data/data.csv'); // Fetching from PUBLIC folder
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder('utf-8');
    const csv = await decoder.decode(result.value);
    console.log('csv', csv);
    return csv;
}

  return (
    <div className="app">
      <div className="section">
        <div className="title">
          <span className="title-important">A</span>Make
        </div>
        <div className="description">Company of the Vehicle</div>
        <div className="detail-root">
          <div className="section-left">
            <div className="section-left-item">
              <div className="item-name">FORD</div>
              <div className="item-percent blue">9%</div>
            </div>
            <div className="section-left-item">
              <div className="item-name">CHEVROLET</div>
              <div className="item-percent blue">9%</div>
            </div>
            <div className="section-left-item">
              <div className="item-name grey">Other (6169)</div>
              <div className="item-percent grey">84%</div>
            </div>
          </div>
          <VisualCard
            valid={7385}
            valid_percent={100}
            mismatched={0}
            mismatched_percent={0}
            missing={0}
            missing_percent={0}
            unique={42}
            most_common="FORD"
            most_common_percent={9}
          />
        </div>
      </div>
      <div className="section">
        <div className="title">
          <span className="title-important">A</span>Model
        </div>
        <div className="description">Car Model</div>
        <div className="detail-root">
          <div className="section-left">
            <div>
              <div className="item-unique-count blue">2053</div>
              <div className="item-unique">Unique Values</div>
            </div>
          </div>
          <VisualCard
            unique={42}
            valid={7385}
            valid_percent={100}
            missing_percent={0}
            mismatched={0}
            mismatched_percent={0}
            missing={0}
            most_common="FORD"
            most_common_percent={9}
          />
        </div>
      </div>
      <div className="section">
        <div className="title">
          <span className="title-important">A</span>Vehicle Class
        </div>
        <div className="description">
          Class of vehicle depending on their utility, capacity and weight
        </div>
        <div className="detail-root">
          <div className="section-left">
            <div className="section-left-item">
              <div className="item-name">SUV-SMALL</div>
              <div className="item-percent blue">9%</div>
            </div>
            <div className="section-left-item">
              <div className="item-name">MID-SIZE</div>
              <div className="item-percent blue">9%</div>
            </div>
            <div className="section-left-item">
              <div className="item-name grey">Other (5035)</div>
              <div className="item-percent grey">84%</div>
            </div>
          </div>
          <VisualCard
            unique={42}
            valid={7385}
            valid_percent={100}
            most_common="FORD"
            most_common_percent={9}
            mismatched={0}
            mismatched_percent={0}
            missing={0}
            missing_percent={0}
          />
        </div>
      </div>
      <div className="section">
        <div className="title">
          <span className="title-important">A</span>Vehicle Class
        </div>
        <div className="description">
          Class of vehicle depending on their utility, capacity and weight
        </div>
        <div className="detail-root">
          <div className="section-left">
            <div className="section-left-item">
              <div className="item-name">SUV-SMALL</div>
              <div className="item-percent blue">9%</div>
            </div>
            <div className="section-left-item">
              <div className="item-name">MID-SIZE</div>
              <div className="item-percent blue">9%</div>
            </div>
            <div className="section-left-item">
              <div className="item-name grey">Other (5035)</div>
              <div className="item-percent grey">84%</div>
            </div>
          </div>
          <VisualCard
            unique={62}
            valid={8385}
            valid_percent={10}
            most_common="Tesla"
            most_common_percent={6}
            mismatched={0}
            mismatched_percent={0}
            missing={2}
            missing_percent={0}
          />
        </div>
      </div>
    </div>);
}

export default App;
