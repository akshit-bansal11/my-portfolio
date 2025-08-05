// components/SkillSection.jsx
import React from "react";
import SkillItem from "./SkillItem";

const SkillSection = ({ title, skills }) => (
    <div className="flex flex-col gap-2">
        <h1 className="text-lg text-neutral-400 font-semibold">{title}</h1>
        {skills.map((group, idx) => (
        <div key={idx} className="flex gap-3 flex-wrap">
            {group.map((skill, index) => (
            <SkillItem key={index} Icon={skill.icon} name={skill.name} />
            ))}
        </div>
        ))}
    </div>
);

export default SkillSection;
