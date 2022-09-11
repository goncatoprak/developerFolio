import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import {SiTensorflow} from "react-icons/si";
import {SiOpencv} from "react-icons/si";
import {SiPython} from "react-icons/si";

const customIcons = {
  python: <SiPython />,
  tensorflow: <SiTensorflow />,
  opencv: <SiOpencv />
};

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.icon ? (
                  customIcons[skills.icon]
                ) : (
                  <i className={skills.fontAwesomeClassname}></i>
                )}
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
