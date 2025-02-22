"use client";
import React from "react";

const GeneratePDF = () => {
  return (
    <div>
      <div id="resume" className="flex justify-center items-center pt-16">
        <div className="border">
          <div className="pt-8 pb-10 px-12 w-[942px]">
            <header className="flex flex-col justify-center items-center">
              <h2 className="uppercase font-extrabold text-[22px] leading-7">
                Basil VJ
              </h2>
              <h3 className="capitalize text-[18px]">React JS Developer</h3>
              <div className="font-light text-[14px] pt-2">
                <ul className="flex justify-center list-disc gap-6">
                  <li className="">+11234567889</li>
                  <li>randomuserofficial@gmail.com</li>
                  <li>github.com/user</li>
                  <li>linkedin.com/user</li>
                </ul>
                <ul className="flex justify-center text-[14px] list-disc gap-6">
                  <li>United states of America , USA, Somewhere, 111111</li>
                  <li>user.netlify.app</li>
                </ul>
              </div>
            </header>
            {/* Summary */}
            <div>
              <h3 className="capitalize text-[19px] text-center pt-6 pb-2">
                Summary
              </h3>
              <div className="w-full h-[1.2px] bg-slate-800 mb-2" />
              <p className="font-light text-justify text-[14px] pt-1">
                Front-End Developer with hands-on experience in building
                responsive and user-centric web applications using React, Next
                JS, and TypeScript . At ResourceMojo Business Outsourcing
                Private LTD, I played a key role in developing scalable web
                applications by enhancing user interfaces, optimizing
                performance, and implementing new features. Skilled in
                leveraging front-end technologies like React, Redux,
                Material-UI, Tailwind CSS, Bootstrap and RESTful APIs to deliver
                high-quality, maintainable code. Experience in responsive UI
                development ensures seamless user experiences across devices.
                Passionate about continuous learning, I stay up-to-date with the
                latest tools and best practices in front-end development to
                drive impactful, user-friendly solutions.
              </p>
            </div>
            {/* Experience */}
            <div>
              <h3 className="capitalize text-[19px] text-center pt-6 pb-2">
                Experience
              </h3>
              <div className="w-full h-[1.2px] bg-slate-800 mb-2" />
              <div className="flex flex-col">
                <div className="flex justify-between">
                  <h2 className="text-[18px]">
                    ResourceMojo Business Outsourcing Private LTD
                  </h2>
                  <h3 className="text-[16px] font-light text-right">
                    Mangalore, Karnataka
                  </h3>
                </div>
                <div className="flex justify-between">
                  <h3 className="text-[16px]">React JS Developer</h3>
                  <h3 className="text-[16px] font-light text-right">
                    09/2023 - Present
                  </h3>
                </div>
              </div>
              <ul className="font-light flex flex-col gap-1 text-justify text-[14px] pt-2 list-disc ps-5">
                <li>
                  Contributed to the development of web applications,
                  implementing complex, reusable components using React,
                  Next.js, TypeScript, and Material-UI to enhance both
                  functionality and user interfaces.
                </li>
                <li>
                  Integrated RESTful APIs, ensuring smooth data flow and dynamic
                  interaction within the front-end.
                </li>
                <li>
                  Worked closely with a collaborative development team to
                  troubleshoot and optimize features.
                </li>
                <li>
                  Focused on improving website performance and loading speed,
                  implementing best practices for efficient front-end
                  development.
                </li>
                <li>
                  Maintained a well-structured, scalable codebase, promoting
                  readability and long-term maintainability across projects.
                </li>
                <li>
                  Leveraged CSS, Bootstrap, and JavaScript to create responsive
                  and visually appealing layouts, ensuring consistent
                  experiences across devices.
                </li>
              </ul>
            </div>
            {/* Projects */}
            <div>
              <h3 className="capitalize text-[19px] text-center pt-6 pb-2">
                Projects
              </h3>
              <div className="w-full h-[1.2px] bg-slate-800 mb-2" />
              <div className="flex flex-col gap-3">
                <div>
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <h2 className="text-[18px]">
                        HermesTrack Expense Tracker
                      </h2>
                    </div>
                    <div className="flex justify-between">
                      <h3 className="text-[16px]">hermestrack.netlify.app</h3>
                      <h3 className="text-[16px] font-light text-right">
                        07/2024 - Present
                      </h3>
                    </div>
                  </div>
                  <ul className="font-light flex flex-col gap-1 text-justify text-[14px] pt-2 list-disc ps-5">
                    <li>
                      Developed an expense tracker website allowing users to
                      create, edit, view, and delete transactions, with a
                      comprehensive dashboard for managing both expenses and
                      income.
                    </li>
                    <li>
                      Integrated search and filter functionalities to help users
                      easily track and organize their transactions.
                    </li>
                    <li>
                      Developed with Next JS, TypeScript, and Tailwind CSS,
                      utilizing Firebase for backend services. Implemented
                      efficient state management and component-based
                      architecture for responsive, scalable, and secure
                      transaction handling.
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex flex-col">
                    <div className="flex justify-between">
                      <h2 className="text-[18px]">FixMyTech</h2>
                    </div>
                    <div className="flex justify-between">
                      <h3 className="text-[16px]">fixmytech.netlify.app</h3>
                      <h3 className="text-[16px] font-light text-right">
                        07/2024 - Present
                      </h3>
                    </div>
                  </div>
                  <ul className="font-light flex flex-col gap-1 text-justify text-[14px] pt-2 list-disc ps-5">
                    <li>
                      A user-centric platform providing clear online
                      instructions for convenient PC repair at home.
                    </li>
                    <li>Technologies Used: HTML, CSS, JavaScript, React.js.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneratePDF;
