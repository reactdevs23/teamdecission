import MainComponent from "./components/MainComponent/MainComponent";
import {
  faUser,
  faUsers,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";
function App() {
  const teamDecisionData = {
    title: "Team decision-making scenario",
    projectsName: ["Project A", "Project B", "Project C"],
    statementTypes: [
      {
        color: "#5d209e",
        text: "Positive statements",
      },
      {
        color: "#e02d76",
        text: "Negative statements",
      },
    ],
    allStatements: [
      //common statements
      {
        title: " Statements common to all team members",
        icon: faUsers,

        statements: [
          [
            // first project Statements
            [
              // type of statements
              {
                type: "positive",
                legends: 4,
                color: "#5d209e",
              },
            ],
            // second project Statements
            [
              // type of statements
              { type: "positive", legends: 1, color: "#5d209e" },
              { type: "negative", legends: 3, color: "#e02d76" },
            ],
            // third project Statements
            [
              // type of statements
              { type: "positive", legends: 4, color: "#5d209e" },
            ],
          ],
        ],
      },
      //unique statements
      {
        icon: faUser,
        title: " Statements unique to each team member",

        statements: [
          [
            // first project Statements
            [
              // type of statements
              {
                name: "Project A",
                type: "negative",
                legends: 2,
                color: "#e02d76",
              },
            ],
            // second project Statements
            [
              // type of statements
              {
                name: "Project B",
                type: "positive",
                legends: 2,
                color: "#5d209e",
              },
            ],
            // second project Statements
            [
              // type of statements
              {
                name: "Project C",
                type: "negative",
                legends: 2,
                color: "#e02d76",
              },
            ],
          ],

          [
            // first project Statements
            [
              // type of statements
              {
                name: "Project A",
                type: "negative",
                legends: 2,
                color: "#e02d76",
              },
            ],
            // second project Statements
            [
              // type of statements
              {
                name: "Project B",
                type: "positive",
                legends: 2,
                color: "#5d209e",
              },
            ],
            // second project Statements
            [
              // type of statements
              {
                name: "Project C",
                type: "negative",
                legends: 2,
                color: "#e02d76",
              },
            ],
          ],
          [
            // first project Statements
            [
              // type of statements
              {
                name: "Project A",
                type: "negative",
                legends: 2,
                color: "#e02d76",
              },
            ],
            // second project Statements
            [
              // type of statements
              {
                name: "Project B",
                type: "positive",
                legends: 2,
                color: "#5d209e",
              },
            ],
            // third project Statements
            [
              // type of statements
              {
                name: "Project C",
                type: "negative",
                legends: 2,
                color: "#e02d76",
              },
            ],
          ],
        ],
      },
      //total statements
      {
        icon: faListCheck,
        title: "Total statements  for each project",

        statements: [
          [
            // first project Statements
            [
              // type of statements
              { type: "positive", legends: 4, color: "#5d209e" },
              { type: "negative", legends: 6, color: "#e02d76" },
            ],
            // second project Statements
            [
              { type: "positive", legends: 7, color: "#5d209e" },
              { type: "negative", legends: 3, color: "#e02d76" },
            ],
            // third project Statements
            [
              { type: "positive", legends: 4, color: "#5d209e" },
              { type: "negative", legends: 6, color: "#e02d76" },
            ],
          ],
        ],
      },
      // if you want to add more project you just have to add there
    ],
  };

  return <MainComponent {...teamDecisionData} />;
}

export default App;
