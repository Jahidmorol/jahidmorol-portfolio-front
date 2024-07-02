const resumeData = {
  pageTitle: "My story",
  pageSubtitle: "Resume",
  professionalSummary: {
    title: "Professional Summary",
    content:
      "Skilled Full-Stack Developer with expertise in JavaScript, React, and Node.js. Recently contributed to key projects at WebSyner, enhancing web applications and optimizing performance. Adept at delivering high-quality, scalable solutions under tight deadlines.",
  },
  languageKnowledge: ["English", "Bangla", "Hindi"],
  education: [
    {
      institution: "Economics",
      degree: "Bachelor of Arts",
      description:
        "Currently pursuing a Bachelor of Arts in Economics at Government Bangla College. Focus on economic theory and practical applications.",
      date: "2021 - Current",
    },
    {
      institution: "Programming Course",
      degree: "Full-Stack Developer",
      description:
        "Completed levels 1 and 2 of the Full-Stack Developer course at Programming Hero, focusing on mastering front-end and back-end development.",
      date: "2021 - 2022",
    },
  ],
  workHistory: [
    {
      position: "Full-Stack Developer",
      location: "Bangladesh",
      description:
        "Worked as a Full-Stack Developer at WebSyner, focusing on front-end and back-end development. Ensuring high-quality code and efficient performance.",
      date: "2023 - 2024",
    },
  ],
  frontendSkills: [
    {
      skill: "Html",
      percentage: 95,
    },
    {
      skill: "Css",
      percentage: 65,
    },
    {
      skill: "Material-UI",
      percentage: 65,
    },
    {
      skill: "Ant-Design",
      percentage: 65,
    },
    {
      skill: "TypeScript",
      percentage: 75,
    },
    {
      skill: "Javascript",
      percentage: 75,
    },
    {
      skill: "React",
      percentage: 65,
    },
    {
      skill: "Next Js",
      percentage: 75,
    },
  ],
  backendSkills: [
    {
      skill: "Node Js",
      percentage: 95,
    },
    {
      skill: "Express",
      percentage: 65,
    },
    {
      skill: "Mongoose",
      percentage: 75,
    },
    {
      skill: "PostgreSQL",
      percentage: 65,
    },
    {
      skill: "Prisma",
      percentage: 75,
    },
  ],
  tools: [
    {
      skill: "GitHub",
      percentage: 85,
    },
    {
      skill: "Postman",
      percentage: 95,
    },
    {
      skill: "Figma",
      percentage: 80,
    },
    {
      skill: "Vs Code",
      percentage: 70,
    },
  ],
};

const Resume = () => {
  return (
    <>
      <div id="wrapper">
        <div className="scr-bar_dec"></div>
        <div className="scr-bar_container">
          <div
            className="content"
            data-pagetitle={resumeData.pageTitle}
            data-pagesubtitle={resumeData.pageSubtitle}
          >
            <div className="bg-top"></div>
            <div className="bg-bottom"></div>

            <section>
              <div className="section-title fl-wrap">
                <h3>{resumeData.professionalSummary.title}</h3>
              </div>
              <div className="box-text-wrap fl-wrap">
                <div className="row">
                  <div className="col-md-8">
                    <div className="fl-wrap content-box single_pb cb_dec">
                      <p>{resumeData.professionalSummary.content}</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="box-text-wrap_item content-box">
                      <h5>Language Knowledge</h5>
                      <ul>
                        {resumeData.languageKnowledge.map((language, index) => (
                          <li key={index}>
                            <span>{language}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="row">
                <div className="col-md-6">
                  <div className="section-title fl-wrap">
                    <h3>Education</h3>
                  </div>
                  <div className="resume-item-container fl-wrap">
                    {resumeData.education.map((edu, index) => (
                      <div className="resume-item fl-wrap" key={index}>
                        <h4>{edu.institution}</h4>
                        <h5>{edu.degree}</h5>
                        <p>{edu.description}</p>
                        <span className="resume-date">{edu.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="section-title fl-wrap">
                    <h3>Work History</h3>
                  </div>
                  <div className="resume-item-container ric_nom fl-wrap">
                    {resumeData.workHistory.map((work, index) => (
                      <div className="resume-item fl-wrap" key={index}>
                        <h4>{work.position}</h4>
                        <h5>{work.location}</h5>
                        <p>{work.description}</p>
                        <span className="resume-date">{work.date}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section>
              <div className="fl-wrap">
                <div className="row">
                  <div className="col-md-6">
                    <div className="section-title fl-wrap">
                      <h3>Frontend Skills</h3>
                    </div>
                    <div className="skillbar-box animaper">
                      {resumeData.frontendSkills.map((skill, index) => (
                        <div key={index}>
                          <div className="custom-skillbar-title">
                            <span>{skill.skill}</span>
                          </div>
                          <div className="skill-bar-percent">
                            {skill.percentage}%
                          </div>
                          <div
                            className="skillbar-bg"
                            data-percent={`${skill.percentage}%`}
                          >
                            <div
                              className="custom-skillbar"
                              style={{ width: `${skill.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="section-title fl-wrap">
                      <h3>Backend Skills</h3>
                    </div>
                    <div className="skillbar-box animaper">
                      {resumeData.backendSkills.map((skill, index) => (
                        <div key={index}>
                          <div className="custom-skillbar-title">
                            <span>{skill.skill}</span>
                          </div>
                          <div className="skill-bar-percent">
                            {skill.percentage}%
                          </div>
                          <div
                            className="skillbar-bg"
                            data-percent={`${skill.percentage}%`}
                          >
                            <div
                              className="custom-skillbar"
                              style={{ width: `${skill.percentage}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="fl-wrap" style={{ paddingTop: "30px" }}>
                      {/* <h3>Tools</h3> */}
                    </div>
                    <div className="clearfix"></div>
                    <div
                      className="piechart-holder fl-wrap animaper"
                      data-skcolor="#F89020"
                    >
                      {resumeData.tools.map((skill, index) => (
                        <div className="piechart" key={index}>
                          <span
                            className="chart"
                            data-percent={skill.percentage}
                          >
                            <span className="percent"></span>
                          </span>
                          <div className="clearfix"></div>
                          <div className="skills-description">
                            <h4>{skill.skill}</h4>
                          </div>
                        </div>
                      ))}
                      <div className="chart-dec">
                        <span>
                          <i className="fal fa-plus"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <div className="to-top-wrap">
              <div className="to-top color-bg">
                <i className="fas fa-caret-up"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="share-wrapper">
          <div className="share-container isShare"></div>
        </div>
      </div>

      <div className="page-load">
        <div className="pl-spinner">
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Resume;
