import { Line } from "react-chartjs-2";
import React, { useEffect, useState } from "react";
import Chart from "chart.js/auto";

export default function ChartLine({ data, typeChart }) {
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
      radianceLabel.push(singleData["G (IFSC) [W/m²]"]);
      voltageLabel.push(singleData["G (Sistema) [W/m²]"]);
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
        label: "Gráfico",
        data: typeChart == "radiance" ? radiance : voltage,
        fill: false,
        backgroundColor: "#5a8251",
        borderColor: "#8CC640",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        title: {
          display: true,
          text:
            typeChart == "radiance"
              ? "G (IFSC) [W/m²]"
              : "G (Sistema) [W/m²]",
        },
      },
      x: {
        title: {
          display: true,
          text: "Hora",
        },
      },
    },
  };

  return (
    <>
      {data.length > 0 ? (
        <div className="w-1/2 h-1/2 bg-zinc-50 mb-5 rounded-md">
          <Line data={dataChart} options={options} />
        </div>
      ) : null}
    </>
  );
}
