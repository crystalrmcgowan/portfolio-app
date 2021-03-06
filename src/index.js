import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from "./components/Home"
import About from "./components/About"
import Portfolio from "./components/Portfolio"
import BaseLayout from "./components/BaseLayout"
import References from "./components/References"
import Contact from "./components/Contact"

ReactDOM.render(
  <BrowserRouter>
    <BaseLayout>
      <Switch>
        <Route exact path="/" component={About} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/services" component={Home} />
        <Route path="/references" component={References} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </BaseLayout>
  </BrowserRouter>,
  document.getElementById("root")
)
registerServiceWorker()
