import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const ProblemSolved = () => {
  const [leetcodeData, setLeetcodeData] = useState(null);
  const [gfgData, setGfgData] = useState(null);

  useEffect(() => {
    const fetchLeetcodeData = async () => {
      try {
        const response = await fetch(
          "https://leetcode-stats-api.herokuapp.com/Sambit_45"
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching Leetcode data:", error);
        return null;
      }
    };

    const fetchGFGData = async () => {
      try {
        const response = await fetch(
          "https://geeks-for-geeks-stats-api.vercel.app/?raw=Y&userName=sambitbhanjadeo66"
        );
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching GFG data:", error);
        return null;
      }
    };

    const fetchData = async () => {
      const leetcode = await fetchLeetcodeData();
      const gfg = await fetchGFGData();

      if (leetcode) setLeetcodeData(leetcode);
      if (gfg) setGfgData(gfg);
    };

    fetchData();
  }, []);

  const leetcodeChartData = leetcodeData && {
    labels: ["Easy", "Medium", "Hard"],
    datasets: [
      {
        label: "LeetCode Problems Solved",
        data: [
          leetcodeData.easySolved,
          leetcodeData.mediumSolved,
          leetcodeData.hardSolved,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)", 
          "rgba(54, 162, 235, 0.6)", 
          "rgba(255, 206, 86, 0.6)", 
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const gfgChartData = gfgData && {
    labels: ["School", "Basic", "Easy", "Medium", "Hard"],
    datasets: [
      {
        label: "GeeksForGeeks Problems Solved",
        data: [
          gfgData.School,
          gfgData.Basic,
          gfgData.Easy,
          gfgData.Medium,
          gfgData.Hard,
        ],
        backgroundColor: [
          "rgba(138, 43, 226, 0.6)", 
          "rgba(60, 179, 113, 0.6)",
          "rgba(255, 165, 0, 0.6)",
          "rgba(100, 149, 237, 0.6)", 
          "rgba(255, 69, 0, 0.6)", 
        ],
        borderColor: [
          "rgba(138, 43, 226, 1)",
          "rgba(60, 179, 113, 1)",
          "rgba(255, 165, 0, 1)",
          "rgba(100, 149, 237, 1)",
          "rgba(255, 69, 0, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  if (!leetcodeData || !gfgData) {
    return <div>Loading...</div>;
  }

  return (
    <div
      name="ProblemSolving"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen py-10"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Problem Solving Stats
          </p>
          <p className="py-6">LeetCode and GeeksForGeeks stats</p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 text-center py-8 px-6 sm:px-0">
          <div className="bg-gray-700 shadow-md hover:scale-105 duration-500 py-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">LeetCode Stats</h2>
            <Bar data={leetcodeChartData} />
          </div>

          <div className="bg-gray-700 shadow-md hover:scale-105 duration-500 py-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">GeeksForGeeks Stats</h2>
            <Bar data={gfgChartData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSolved;
