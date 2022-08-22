import React from "react";
import ReactDOM from "react-dom";

import { App } from "./App";

//①App関数を画面にレンダリング②どこに反映していくか(今回はroot)
ReactDOM.render(<App />, document.getElementById("root"));
