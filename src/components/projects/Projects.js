import React from "react";
import "./styles.scss";
import * as Hi2Icons from "react-icons/hi2";

const Projects = () => {
  return (
    <div className="container-main">
      <div className="container-intro">
        <h2>Most Popular Tools</h2>
        <h4>Explore the trending tools to create your copies fast</h4>
      </div>
      <div className="container-projects">
        <span>Social Media</span>
        <div className="projects-1">
          <div className="projects">
            <div className="icons">
              <span className="pencil">
                <Hi2Icons.HiOutlinePencil className="lens" />
              </span>
              <span className="arrow">
                <Hi2Icons.HiOutlineArrowTrendingUp />
              </span>
            </div>
            <div className="project-items">
              <h3>Blog Writing</h3>
              <p>
                Generate the best blog post to fit your audience with just few
                clicks of a button
              </p>
            </div>
          </div>
          <div className="projects">
            <div className="icons">
              <span className="pencil">
                <Hi2Icons.HiOutlinePencil className="lens" />
              </span>
              <span className="arrow">
                <Hi2Icons.HiOutlineArrowTrendingUp />
              </span>
            </div>
            <div className="project-items">
              <h3>Blog Writing</h3>
              <p>
                Generate the best blog post to fit your audience with just few
                clicks of a button
              </p>
            </div>
          </div>
          <div className="projects">
            <div className="icons">
              <span className="pencil">
                <Hi2Icons.HiOutlinePencil className="lens" />
              </span>
              <span className="arrow">
                <Hi2Icons.HiOutlineArrowTrendingUp />
              </span>
            </div>
            <div className="project-items">
              <h3>Blog Writing</h3>
              <p>
                Generate the best blog post to fit your audience with just few
                clicks of a button
              </p>
            </div>
          </div>
          <div className="projects">
            <div className="icons">
              <span className="pencil">
                <Hi2Icons.HiOutlinePencil className="lens" />
              </span>
              <span className="arrow">
                <Hi2Icons.HiOutlineArrowTrendingUp />
              </span>
            </div>
            <div className="project-items">
              <h3>Blog Writing</h3>
              <p>
                Generate the best blog post to fit your audience with just few
                clicks of a button
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
