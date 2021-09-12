import React from "react";
import { Route, Switch } from "react-router";
import About from "../About/About";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import Post from "../Post/Post";

export default function Body() {
  return (
    <Switch>
      <Route path="/" exact component={Blog} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/post/:blogId" component={Post} />
    </Switch>
  );
}
