import React, { useState } from "react";
import SkillCard from "./SkillCard";
import ExpBackCard from "./ExpBackCard";

const MoreInfo = () => {
  const [state, setState] = useState(2);
  const toggleHandler = (index) => {
    setState(index);
  };

  return (
    <div className="flex flex-col justify-center gap-4">
      <div>
        <ul className="flex justify-center flex-wrap font-medium items-center gap-6 text-2xl mt-5">
          <li>
            <button
              className={state === 1 ? "underline" : "hover:underline"}
              onClick={() => toggleHandler(1)}
            >
              background
            </button>
          </li>
          <li>
            <button
              className={state === 2 ? "underline" : "hover:underline"}
              onClick={() => toggleHandler(2)}
            >
              skills
            </button>
          </li>
          <li>
            <button
              className={state === 3 ? "underline" : "hover:underline"}
              onClick={() => toggleHandler(3)}
            >
              experience
            </button>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center lg:my-10">
        {state === 1 ? (
          <div className="flex flex-col justify-center item-center md:flex-row max-w-screen-lg">
            <ExpBackCard
              title="Bachelor of Technical Teacher Education major in Technical English"
              company="Marikina Polytechnic College"
              time="June 2019 – August 2023"
              description="Acquired English language, literature, and efficient teaching methods. Prepared to teach English in technical environments, helping students build crucial language skills for their careers."
            />
            <ExpBackCard
              title="Master of Arts in Teaching major in Technical English (30 units)"
              company="Marikina Polytechnic College"
              time="June 2019 – August 2023"
              description="Covered advanced English language, literature, and pedagogy. Prepared to teach future kids language and critical thinking. Well-prepared to teach advanced English and contribute significantly to education as a graduate."
            />
          </div>
        ) : state === 2 ? (
          <div className="flex flex-col justify-center items-center">
            <SkillCard
              skillName="Administrative Skills"
              more="Calendar Management, Email Management, File Management, Pitch Deck"
            />
            <SkillCard
              skillName="Graphic Design"
              more="Infographics, Brochures, Image Editing, Presentations, Flyers"
            />
            <SkillCard
              skillName="Customer Support"
              more="Answering inquiries, Dealing with Concerns, Following up on appointments"
            />
            <SkillCard
              skillName="Social Media Management"
              more="Content Management, Caption Writing, Graphic Design"
            />
          </div>
        ) : state === 3 ? (
          <div className="flex flex-col justify-center item-center md:flex-row max-w-screen-lg">
            <ExpBackCard
              title="Teacher I"
              company="DepEd Antipolo, Antipolo National High School"
              time="June 2019 – August 2023"
              description="Designed and implemented e-learning modules and materials. Mentored and coached students in writing and speaking competitions"
            />
            <ExpBackCard
              title="SHS Teacher"
              company="Teksquad Institute of Information Technology"
              time="June 2018 - April 2019"
              description="Participated in professional development seminars, workshops, and conferences. Developed and implemented different learning tasks and assessments. 
              "
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MoreInfo;
