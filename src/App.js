// import logo from "./logo.svg";
import "./App.css";
import YoutubeList from "./components/youtube/YoutubeList";
import Toggle from "./components/stateToggle/Toggle";
import Game from "./components/stateTictactoe/Game";
import Login from "./components/form/Login";
import Example from "./components/effectHook/Example";
import Clock from "./components/clock/Clock";

function App() {
  // const number = [2, 4, 5, 6, 7, 8, 9];

  // const double = number.map((asd) => asd + 2);

  // console.log(double);

  const name = "bung bu";

  return (
    <div className="container-fluid row">
      <YoutubeList>
        {/* children: có thể là một html,component,text được truyền vào giữa */}
        {name}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
        </p>
      </YoutubeList>
      <Toggle></Toggle>
      <Game></Game>
      <Login>Email & ID</Login>

      <Example></Example>

      <Clock clName="border border-danger "></Clock>
      <Clock clName="border border-success "></Clock>
    </div>
  );
}
export default App;
