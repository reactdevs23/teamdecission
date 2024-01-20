import MainComponent from "./components/MainComponent/MainComponent";

function App() {
  const teamDecisionData = {
    title: "Team decision-making scenario",
    projectsName: ["Project A", "Project B", "Project C"],
    statements: {
      positive: {
        color: "#5d209e",
        text: "Positive statements",
      },
      negative: {
        color: "#e02d76",
        text: "Negative statements",
      },
    },
    commonStateMents: {
      title: " Statements common to all team members",
      projectA: {
        positive: {
          value: 4,
          color: "#5d209e",
        },
      },
      projectB: {
        positive: { value: 1, color: "#5d209e" },
        negative: { value: 3, color: "#e02d76" },
      },
      projectC: { positive: { value: 4, color: "#5d209e" } },
    },
    uniqueStateMentToEachTeamMember: {
      title: " Statements unique to each team member",
      statements: [
        {
          projectA: { value: 2, color: "#e02d76" },
          projectB: { value: 2, color: "#5d209e" },
          projectC: { value: 2, color: "#e02d76" },
        },
        {
          projectA: { value: 2, color: "#e02d76" },
          projectB: { value: 2, color: "#5d209e" },
          projectC: { value: 2, color: "#e02d76" },
        },
        {
          projectA: { value: 2, color: "#e02d76" },
          projectB: { value: 2, color: "#5d209e" },
          projectC: { value: 2, color: "#e02d76" },
        },
      ],
    },

    totalStateMents: {
      title: "Total statements  for each project",
      projectA: {
        positive: { value: 4, color: "#5d209e" },
        negative: { value: 6, color: "#e02d76" },
      },
      projectB: {
        positive: { value: 7, color: "#5d209e" },
        negative: { value: 3, color: "#e02d76" },
      },

      projectC: {
        positive: { value: 4, color: "#5d209e" },
        negative: { value: 6, color: "#e02d76" },
      },
    },
  };

  return <MainComponent {...teamDecisionData} />;
}

export default App;
