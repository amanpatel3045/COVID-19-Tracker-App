import React, { useEffect,useState } from "react";

const Covid = () => {
  const [data,setData]=useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch(`https://api.covid19india.org/data.json`);
      const actualData = await res.json();
     
      setData( actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <>
      <section>
        <h1>LIVE</h1>
        <h2>COVID-19 CORONAVIRUS TRACKER</h2>
        <ul>
          <li>
            <div>
              <div>
                <p>
                  <span>OUR</span>COUNTRY
                </p>
                <p>INDIA</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div>
                <p>
                  <span>TOTAL</span>RECOVERED
                </p>
                <p>{data.recovered}</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div>
                <p>
                  <span>TOTAL</span>CONFIRMED
                </p>
                <p>{data.confirmed}</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div>
                <p>
                  <span>TOTAL</span>DEATHS
                </p>
                <p>{data.deaths}</p>
              </div>
            </div>
          </li>
          <li>
            <div>
              <div>
                <p>
                  <span>TOTAL</span>ACTIVE
                </p>
                <p>{data.active}</p>
              </div>
            </div>
          </li>
         
          <li>
            <div>
              <div>
                <p>
                  <span>LAST</span>UPDATED
                </p>
                <p>{data.lastupdatedtime}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
