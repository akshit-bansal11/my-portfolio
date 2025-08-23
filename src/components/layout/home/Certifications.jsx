//--------------------|‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|--------------------//
//--------------------|    DEPENDENCIES    |--------------------//
//--------------------|____________________|--------------------//
import React from "react";



//--------------------|‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾|--------------------//
//--------------------|     COMPONENTS     |--------------------//
//--------------------|____________________|--------------------//


export default function Certifications() {
    return (
        <ScrollSection id="certif">
            <ScrollSectionHeading heading="certifications & achievements" />
            <div className="flex flex-col gap-4">
                <h1 className="text-neutral-400 text-xs md:text-sm lg:text-xl">Achievements</h1>
                <div className="flex gap-4">
                    <SkillBadge name="C++" icon={<SiCplusplus />} stars={5} />
                    <SkillBadge name="C" icon={<SiCoursera />} stars={2} />
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-neutral-400 text-xs md:text-sm lg:text-xl">Certifications</h1>
                <div className="grid grid-cols-3 gap-4">
                    <Certificate certificate={ceisd} link="a.com" />
                    <Certificate certificate={ceiga} link="a.com" />
                    <Certificate certificate={sqlbhack} link="a.com" />
                    <Certificate certificate={jsbhack} link="a.com" />
                    <Certificate certificate={cssbhack} link="a.com" />
                </div>
            </div>
        </ScrollSection>
    );
}