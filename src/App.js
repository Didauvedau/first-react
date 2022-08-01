// import logo from "./logo.svg";
import "./App.css";
import YoutubeList from "./components/youtube/YoutubeList";
import Toggle from "./components/state/Toggle";

// function Future() {
//   return (
//     <div className="container mt-5 feature border border-danger">
//       <img src="" />
//       <h3 className="future-title">Title</h3>
//       <p className="future-desc">
//         Tại sao có DOM rồi lại cần Virtual DOM (DOM ảo)? Khi chúng ta làm việc
//         với một DOM, khi một nodes thay đổi thì tất cả các nodes cũng phải thay
//         đổi thay. Giả sử, chúng ta có một list danh sách gồm 10 items, nếu chúng
//         ta thay đổi 1 items thì DOM cũng thay đổi 9 items còn lại về trạng thái
//         ban đầu của nó.
//       </p>
//     </div>
//   );
// }
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
    </div>
  );
}
export default App;
