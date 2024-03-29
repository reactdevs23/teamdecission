import MainComponent from "./components/MainComponent/MainComponent";
import {
  faMicrochip,
  faGamepad,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
function App() {
  const cloudProviderCostData = {
    title: "Cloud Provider Cost Comparison",
    projectsName: ["AWS", "GCP", "MA"],
    labels: [
      {
        color: "#4caf50",
        label: "Cost per Hour ($)",
      },
      {
        color: "#f44336",
        label: "Cost per Month ($)",
      },
    ],
    allColumn: [
      // First column - CPU Instances
      {
        title: "CPU Instance Costs",
        icon: faMicrochip, // Assuming you have an icon for CPU

        column: [
          [
            // CPU Instance Costs for different providers
            [
              {
                type: "hourly",
                numericValue: 0.24,
                color: "#4caf50",
              },
              {
                type: "monthly",
                numericValue: 175,
                color: "#f44336",
              },
            ],
            [
              {
                type: "hourly",
                numericValue: 0.22,
                color: "#4caf50",
              },
              {
                type: "monthly",
                numericValue: 140,
                color: "#f44336",
              },
            ],
            [
              {
                type: "hourly",
                numericValue: 0.2,
                color: "#4caf50",
              },
              {
                type: "monthly",
                numericValue: 145,
                color: "#f44336",
              },
            ],
          ],
        ],
      },
      // Second column - GPU Instances
      {
        icon: faGamepad, // Assuming you have an icon for GPU
        title: "GPU Instance Costs",

        column: [
          [
            // GPU Instance Costs for different providers
            [
              {
                type: "hourly",
                numericValue: 0.9,
                color: "#4caf50",
              },
              {
                type: "monthly",
                numericValue: 100,
                color: "#f44336",
              },
            ],
            [
              {
                type: "hourly",
                numericValue: 0.85,
                color: "#4caf50",
              },
              {
                type: "monthly",
                numericValue: 100,
                color: "#f44336",
              },
            ],
            [
              {
                type: "hourly",
                numericValue: 0.8,
                color: "#4caf50",
              },
              {
                type: "monthly",
                numericValue: 100,
                color: "#f44336",
              },
            ],
          ],
        ],
      },
      // Third column - Database Instances
      {
        icon: faDatabase, // Assuming you have an icon for Database
        title: "Database Instance Costs",

        column: [
          [
            // Database Instance Costs for different providers
            [
              {
                type: "hourly",
                numericValue: 0.3,
                color: "#4caf50",
              },
              {
                type: "monthly",
                numericValue: 220,
                color: "#f44336",
              },
            ],
            [
              {
                type: "hourly",
                numericValue: 0.28,
                color: "#4caf50",
              },
              {
                type: "monthly",
                numericValue: 205,
                color: "#f44336",
              },
            ],
            [
              {
                type: "hourly",
                numericValue: 0.26,
                color: "#4caf50",
              },
              {
                type: "monthly",
                numericValue: 190,
                color: "#f44336",
              },
            ],
          ],
        ],
      },
      // Additional columns can be added similarly for more comparisons
    ],
  };

  return <MainComponent {...cloudProviderCostData} />;
}

export default App;
