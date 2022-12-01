import { Line } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

export default function ChartLine({ data }) {
  const [hour, setHour] = useState([]);
  const [date, setDate] = useState([]);
  const [radiance, setRadiance] = useState([]);
  const [voltage, setVoltage] = useState([]);

  useEffect(() => {
    handleData();
  }, [data]);

  function handleData() {
    const hourLabel = [];
    const dateLabel = [];
    const radianceLabel = [];
    const voltageLabel = [];

    data.map((singleData) => {
      hourLabel.push(singleData.Hora);
      dateLabel.push(singleData.Data);
      radianceLabel.push(singleData["G (IFSC) [W/m2]"]);
      voltageLabel.push(singleData["G (Sistema) [W/m2]"]);
    });

    setHour(hourLabel);
    setDate(dateLabel);
    setRadiance(radianceLabel);
    setVoltage(voltageLabel);
  }

  const dataChart = {
    labels: hour,
    datasets: [
      {
        label: "G (IFSC)",
        data: radiance,
        fill: false,
        backgroundColor: "#8e0808",
        borderColor: "red",
        yAxisID: 'y',
      },
      {
        label: "G (Sistema)",
        data: voltage,
        fill: false,
        backgroundColor: "#5a8251",
        borderColor: "#8CC640",
        yAxisID: 'y',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        max: 1000,
        min: 0,
        title: {
          display: true,
          text: 'G [W/m²]', 
          font: {
            size: 25
          }         
        },      
        ticks: {
          font:{
            size: 15
          }
        },
       

      },
      x: {
        title: {
          display: true,
          text: "Hora",
          font: {
            size: 25
          }
        },
        ticks: {
          font:{
            size: 15
          },
      }
      },     
    },   
      plugins: {
        legend: {
          labels: {
            font: {
              size: 20
            }
          }
        }
      }
      
    
  };

  return (
    <>
      {data.length > 0 ? (
        <div className="w-full h-full bg-zinc-50 mb-5 rounded-md">
          <Line data={dataChart} options={options} />
        </div>
      ) : null}
    </>
  );
}
