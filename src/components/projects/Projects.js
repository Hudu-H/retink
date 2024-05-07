import React from "react";
import "./styles.scss";
import * as Hi2Icons from "react-icons/hi2";
import * as PiIcons from "react-icons/pi";
import * as FaIcons from "react-icons/fa";
import Tilt from "react-parallax-tilt";

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
          <Tilt className="projects">
            <div className="icons">
              <span className="pencil">
                <Hi2Icons.HiOutlinePencil />
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
          </Tilt>
          <Tilt className="projects">
            <div className="icons">
              <span className="pencil">
                <PiIcons.PiNotePencilLight color="green" />
              </span>
              <span className="arrow">
                <Hi2Icons.HiOutlineArrowTrendingUp />
              </span>
            </div>
            <div className="project-items">
              <h3>Product description</h3>
              <p>Instantly generate engaging product description that sell</p>
            </div>
          </Tilt>
          <Tilt className="projects">
            <div className="icons">
              <span className="pencil">
                <FaIcons.FaRegListAlt className="lens" color="#a349ab" />
              </span>
              <span className="arrow">
                <Hi2Icons.HiOutlineArrowTrendingUp />
              </span>
            </div>
            <div className="project-items">
              <h3>Article writer</h3>
              <p>
                Automatically create unique factual articles at the touch of the
                button
              </p>
            </div>
          </Tilt>
          <Tilt className="projects">
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
          </Tilt>
          <Tilt className="projects">
            <div className="icons">
              <span className="pencil">
                <Hi2Icons.HiOutlinePencil />
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
          </Tilt>
          <Tilt className="projects">
            <div className="icons">
              <span className="pencil">
                <PiIcons.PiNotePencilLight color="green" />
              </span>
              <span className="arrow">
                <Hi2Icons.HiOutlineArrowTrendingUp />
              </span>
            </div>
            <div className="project-items">
              <h3>Product description</h3>
              <p>Instantly generate engaging product description that sell</p>
            </div>
          </Tilt>
          <Tilt className="projects">
            <div className="icons">
              <span className="pencil">
                <FaIcons.FaRegListAlt className="lens" color="#a349ab" />
              </span>
              <span className="arrow">
                <Hi2Icons.HiOutlineArrowTrendingUp />
              </span>
            </div>
            <div className="project-items">
              <h3>Article writer</h3>
              <p>
                Automatically create unique factual articles at the touch of the
                button
              </p>
            </div>
          </Tilt>
          <Tilt className="projects">
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
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Projects;
