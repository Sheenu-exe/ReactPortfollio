import ColorSchemesExample from "./component/navbar";
import Page1 from "./component/page1";
import "./App.css";
import Page2 from "./component/page2";
import Page3 from "./component/page3";
import Page4 from "./component/page4";
import Page5 from "./component/page5";
import Footer from "./component/footer";

function App() {
  return (
    <div className="main">
      <ColorSchemesExample />
      <div className="pg1">
        <Page1 />
      </div>
      <br className="break" />
      <div className="pg2">
        <Page2 />
      </div>
      <div className="pg3">
        <Page3 />
      </div>
      <div className="pg4">
        <Page4 />
      </div>
      <div className="pg5">
        <Page5/>
      </div>
      <div className="foot">
       <Footer/>
      </div>
      
    </div>
  );
}

export default App;
