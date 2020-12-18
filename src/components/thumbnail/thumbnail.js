import React from "react";
import styles from "./thumbnail.module.scss";
// import LinkedInColorSVG from "../image_files/linkedInColor";

// const Thumbnail = ({node}) => {
const Thumbnail = ({ imgComponent, name, titles, socialLinks }) => {
    
    return (
        <div className={styles.thumbnail}>
            {/* <img src={node.image.fluid.src} alt="Team Member"></img> */}
            {React.createElement(imgComponent)}
            {/* <h3>{node.name}</h3> */}
            <h3>{name}</h3>
            {/* {node.title.map((title, index) => { */}
            {titles.map((title, index) => {
                return (
                    <h4 key={index}>{title}</h4>
                )
            })}
            <div className={styles.socialIcons}>
                {socialLinks.map(({imgComponent, link}, index) => {
                    return (
                        <a key={index} className={styles.iconContainer} target="_blank" rel="noreferrer" href={link}>
                            {React.createElement(imgComponent)}
                        </a>
                    )
                })}
                {/* <a className={styles.iconContainer} target="_blank" rel="noreferrer" href={node.linkedIn}>
                    <LinkedInColorSVG />
                </a> */}
            </div>
        </div>
    )
};

export default Thumbnail;