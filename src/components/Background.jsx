import React from "react";
import { AiOutlineRight } from "react-icons/ai";

const Background = () => {
  return (
    <div className="my-10">
      <ol class="relative border-2 border-black pb-7">
        <li class="mb-2 ml-6">
          <span class="absolute flex items-center justify-center w-4 h-4 bg-black rounded-full -left-2 ring-8 ring-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
              />
            </svg>
          </span>
          <h3 class="flex items-center mb-1 text-lg font-bold text-gray-900 dark:text-black">
            Bachelor of Technical Teacher Education major in Technical English
          </h3>
          <div className="my-2 flex flex-col gap-2">
            <time class="font-regular text-sm block mb-2 leading-none text-gray-400 dark:text-black">
              2014 - 2018
            </time>
            <div className="flex flex-col font-semilight gap-3 my-3">
              <p class="text-base text-black">
                Acquired English language, literature, and efficient teaching
                methods.
              </p>
              <p class="text-base text-black">
                Prepared to teach English in technical environments, helping
                students build crucial language skills for their careers.
              </p>
            </div>
          </div>
        </li>
      </ol>
      <ol className="relative my-3 border-black border-2 dark:border-black">
        <li class="mb-2 ml-6">
          <span class="absolute flex items-center justify-center w-4 h-4 bg-black rounded-full -left-2 ring-8 ring-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"
              />
            </svg>
          </span>
          <h3 class="flex items-center mb-1 text-lg font-bold text-black">
            Master of Arts in Teaching major in Technical English (30 units)
          </h3>
          <div className="my-2 flex flex-col gap-2">
            <time class="font-regular text-sm block mb-2 leading-none text-gray-400 dark:text-black">
              2014 - 2018
            </time>
            <div className="flex flex-col font-semilight gap-3 my-3">
              <p class="text-base text-black">
                Covered advanced English language, literature, and pedagogy.
              </p>
              <p class="text-base text-black">
                Prepared to teach future kids language and critical thinking.
              </p>
              <p>
                Well-prepared to teach advanced English and contribute
                significantly to education as a graduate.
              </p>
            </div>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Background;
