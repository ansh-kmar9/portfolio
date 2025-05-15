import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const StatsCard = ({ title, children, customClass = "" }) => (
  <div
    className={`bg-[#0A0A0A] border border-[#1E1E1E] rounded-md p-3 sm:p-4 ${customClass}`}
  >
    <div className="flex items-center justify-between mb-2 sm:mb-4 flex-wrap gap-1">
      <h3 className="text-xs sm:text-sm font-medium text-white/90">{title}</h3>
    </div>
    {children}
  </div>
);

const CodingProfiles = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.05 });

  const leetcodeUsername = "ansssh-911x";
  const githubUsername = "ansh-kmar9";
  const gfgUsername = "anshkm0k9u";
  const codeforcesUsername = "anshkmr99";
  const codolioUsername = "bziygGp9";
  const codechefUsername = "anshkmr991";
  const hackerrankUsername = "anshkmr991";

  return (
    <div ref={ref} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.4 }}
        className="bg-[#0A0A0A] rounded-lg border border-[#1E1E1E] p-3 sm:p-5 md:p-6"
      >
        <div className="space-y-4 sm:space-y-6">
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl font-medium text-white/95">
              Coding Profiles
            </h2>
            <p className="text-xs sm:text-sm text-white/60">
              Track my contributions and coding activity across platforms
            </p>
          </div>

          {/* GitHub Contribution Graph */}
          <div>
            <StatsCard
              title={
                <div className="flex items-center justify-between w-full">
                  <span>GitHub Contributions</span>
                  <a
                    href={`https://github.com/${githubUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white/90 text-[10px] sm:text-xs flex items-center gap-1 transition-colors"
                  >
                    @{githubUsername}{" "}
                    <FaExternalLinkAlt size={8} className="sm:text-[10px]" />
                  </a>
                </div>
              }
            >
              <div className="w-full overflow-x-auto scrollbar-thin pb-2 sm:pb-3 -mx-2 px-2">
                <div className="min-w-[550px] sm:min-w-[650px] md:min-w-full">
                  <img
                    src={`https://ghchart.rshah.org/${githubUsername}`}
                    alt="GitHub Contribution Graph"
                    className="w-full bg-transparent"
                    style={{
                      filter: "brightness(0.8) contrast(1.2) invert(0.1)",
                    }}
                  />
                  <div className="flex justify-end mt-1 sm:mt-2">
                    <div className="flex items-center gap-1 text-[8px] sm:text-xs text-white/40">
                      <span>Less</span>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm bg-white/10"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm bg-white/20"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm bg-white/30"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm bg-white/40"></div>
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-sm bg-white/60"></div>
                      <span>More</span>
                    </div>
                  </div>
                </div>
              </div>
            </StatsCard>
          </div>

          {/* Platform Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* LeetCode */}
            <StatsCard
              title={
                <div className="flex items-center justify-between w-full">
                  <span>LeetCode</span>
                  <a
                    href={`https://leetcode.com/${leetcodeUsername}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/60 hover:text-white/90 text-[10px] sm:text-xs flex items-center gap-1 transition-colors"
                  >
                    @{leetcodeUsername}{" "}
                    <FaExternalLinkAlt size={8} className="sm:text-[10px]" />
                  </a>
                </div>
              }
            >
              <div className="overflow-x-auto -mx-1 px-1">
                <div className="min-w-[280px] sm:min-w-full">
                  <img
                    src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark&font=Roboto&ext=heatmap`}
                    alt="LeetCode Stats"
                    className="max-w-full h-auto object-contain"
                    style={{ filter: "brightness(0.95) contrast(1.05)" }}
                    loading="lazy"
                  />
                </div>
              </div>
            </StatsCard>

            {/* GitHub Stats */}
            <StatsCard
              title={
                <div className="flex items-center justify-between w-full">
                  <span>GitHub Stats</span>
                </div>
              }
            >
              <div className="overflow-x-auto -mx-1 px-1">
                <div className="min-w-[280px] sm:min-w-full">
                  <img
                    src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark&hide_border=true&bg_color=0A0A0A&title_color=FFFFFF&icon_color=FFFFFF&text_color=CCCCCC&ring_color=FFFFFF`}
                    alt="GitHub Stats"
                    className="max-w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </StatsCard>

            {/* Top Languages */}
            <StatsCard
              title={
                <div className="flex items-center justify-between w-full">
                  <span>Top Languages</span>
                </div>
              }
            >
              <div className="overflow-x-auto -mx-1 px-1">
                <div className="min-w-[280px] sm:min-w-full">
                  <img
                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=dark&hide_border=true&bg_color=0A0A0A&title_color=FFFFFF&text_color=CCCCCC`}
                    alt="Top Languages"
                    className="max-w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </StatsCard>

            {/* GitHub Streak */}
            <StatsCard
              title={
                <div className="flex items-center justify-between w-full">
                  <span>Contribution Streak</span>
                </div>
              }
            >
              <div className="overflow-x-auto -mx-1 px-1">
                <div className="min-w-[280px] sm:min-w-full">
                  <img
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=dark&hide_border=true&background=0A0A0A&ring=FFFFFF&fire=FFFFFF&currStreakLabel=FFFFFF`}
                    alt="GitHub Streak"
                    className="max-w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </StatsCard>
          </div>

          {/* GitHub Activity Graph - Full width */}
          <StatsCard
            title={
              <div className="flex items-center justify-between w-full">
                <span>Activity Overview</span>
              </div>
            }
          >
            <div className="overflow-x-auto -mx-1 px-1">
              <div className="min-w-[550px] md:min-w-full">
                <img
                  src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&bg_color=0A0A0A&color=FFFFFF&line=FFFFFF&point=CCCCCC&area=true&hide_border=true`}
                  alt="GitHub Contribution Graph"
                  className="max-w-full h-auto object-contain rounded"
                  loading="lazy"
                />
              </div>
            </div>
          </StatsCard>

          {/* Coding Platforms */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="text-xs sm:text-sm font-medium text-white/70">
              Other Platforms
            </h3>

            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
              {[
                {
                  name: "LeetCode",
                  href: `https://leetcode.com/${leetcodeUsername}`,
                  img: "https://imgs.search.brave.com/F5zf0r75hFRbLJNWs3xzW89J95FWzKlBjlEwtxbQMvs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4z/ZC5pY29uc2NvdXQu/Y29tLzNkL2ZyZWUv/dGh1bWIvZnJlZS1s/ZWV0Y29kZS0zZC1p/Y29uLWRvd25sb2Fk/LWluLXBuZy1ibGVu/ZC1mYngtZ2x0Zi1m/aWxlLWZvcm1hdHMt/LWxlZXQtY29kZS1w/cm9ncmFtbWluZy1s/b2dvcy1hbmQtYnJh/bmRzLXBhY2staWNv/bnMtOTMyNTMwNy5w/bmc_Zj13ZWJw",
                  invert: false,
                },
                {
                  name: "GeeksforGeeks",
                  href: `https://www.geeksforgeeks.org/user/${gfgUsername}/`,
                  img: "https://upload.wikimedia.org/wikipedia/commons/4/43/GeeksforGeeks.svg",
                  invert: false,
                },
                {
                  name: "Codeforces",
                  href: `https://codeforces.com/profile/${codeforcesUsername}`,
                  img: "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-3628695-3029920.png",
                },
                {
                  name: "Codolio",
                  href: `https://codolio.com/profile/${codolioUsername}`,
                  img: "https://codolio.com/codolio_assets/codolio.svg",
                },
                {
                  name: "GitHub",
                  href: `https://github.com/${githubUsername}`,
                  img: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
                  invert: true,
                },
                {
                  name: "CodeChef",
                  href: `https://www.codechef.com/users/${codechefUsername}`,
                  img: "https://img.icons8.com/?size=512&id=O4SEeX66BY8o&format=png",
                  invert : true,
                  
                },
                {
                  name: "HackerRank",
                  href: `https://www.hackerrank.com/profile/${hackerrankUsername}`,
                  img: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
                },
              ].map((profile, index) => (
                <a
                  key={index}
                  href={profile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-md border border-[#1E1E1E] bg-[#121212] hover:bg-[#171717] transition-colors duration-200">
                    <img
                      src={profile.img}
                      alt={profile.name}
                      className={`h-4 w-4 sm:h-6 sm:w-6 object-contain ${
                        profile.invert ? "invert" : ""
                      }`}
                    />
                    <span className="text-xs sm:text-sm text-white/70 group-hover:text-white/90 transition-colors truncate">
                      {profile.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default CodingProfiles;
