import Heading from "components/projects/Heading";
import More from "components/projects/More";
import Page from "components/utility/Page";
import Projects from "components/projects/Projects";
import React from "react";

function projects() {
  return (
    <Page
      currentPage="Projects"
      meta={{ title: "Projects", desc: "I've worked on Fullstack Applications, Mobile Applications, 2D Games, C++ Apps and Machine Learning Projects." }}
    >
      <Heading />
      <Projects />
      <More />
    </Page>
  );
}

export default projects;
