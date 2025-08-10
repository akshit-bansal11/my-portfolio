import { FaStar } from "react-icons/fa6";

function SkillBadge({
    color = "from-neutral-400/20 to-neutral-900/20",
    icon,
    name,
    stars = 4,
    source = "HackerRank",
}) {
    const totalStars = 5;

    return (
        <div
            className={`
                group flex flex-col justify-between gap-4 w-[170px] h-[170px] rounded-2xl overflow-hidden
                bg-gradient-to-br ${color}
                border border-white/10
                transition-all duration-300 hover:scale-105 hover:border-white/20
            `}
        >
            {/* Top Section */}
            <div className="flex flex-col items-center gap-4 px-3 pt-3">
                <SkillIconAndName icon={icon} name={name} />
                <SkillStars stars={stars} totalStars={totalStars} />
            </div>

            {/* Bottom Section */}
            <SkillSource source={source} />
        </div>
    );
}

function SkillIconAndName({ icon, name }) {
    return (
        <div className="flex w-full items-center gap-2">
            <div
                className="
                    text-4xl bg-neutral-900/60 p-4 rounded-xl text-white
                    transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110
                "
            >
                {icon}
            </div>
            <div className="text-sm font-semibold text-neutral-100 tracking-tight">
                {name}
            </div>
        </div>
    );
}

function SkillStars({ stars, totalStars }) {
    return (
        <div className="flex justify-center gap-1 w-full">
            {[...Array(totalStars)].map((_, idx) => (
                <FaStar
                    key={idx}
                    className={`
                        text-base transition-all duration-300
                        ${idx < stars
                            ? "text-yellow-300 group-hover:scale-110"
                            : "text-neutral-600"}
                    `}
                />
            ))}
        </div>
    );
}

function SkillSource({ source }) {
    return (
        <div className="
            text-xs font-medium text-green-400 group-hover:text-green-300
            transition-colors duration-200 italic text-center pb-3
        ">
            {source}
        </div>
    );
}

export default SkillBadge;
