import React, { useState } from "react";
import nomad from "../assets/Nomad.svg";
import dropbox from "../assets/Dropbox.svg";
import terraform from "../assets/Terraform Enterprise.svg";
import Email from "../assets/Email.svg";
import canva from "../assets/Canva.png";
import Product from "../assets/Product.png";
import Pitch from "../assets/Pitch.png";
import data from "../data/Jobs.json";
import { Link } from "react-router-dom";

const JobLists = () => {
  const itemsPerPage = 7;

  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const dataItem = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  console.log(data);
  return (
    <div>
      <div className="p-4">
        <div className="w-full h-auto pb-8 bg-white flex-col justify-center items-center gap-6 inline-flex">
          <div className="self-stretch h-[63px] flex-col justify-start items-start gap-2 flex">
            <p className="text-slate-800 text-2xl font-semibold font-['Clash Display Variable'] leading-[28.80px] sm:text-[32px] sm:leading-[38.40px]">
              All Jobs
            </p>
            <div className="justify-between items-center inline-flex sm:flex w-full h-[26px]">
              <div>
                <p className="text-slate-500 text-base font-normal leading-relaxed">
                  Showing {data.length} results
                </p>
              </div>
              <div className="justify-center items-center gap-[22px] flex">
                <div className="justify-start items-center gap-3 flex ">
                  <p className="text-right text-slate-500 text-base font-normal leading-relaxed hidden sm:inline-flex">
                    Sort by:
                  </p>
                  <select name="" id="" className=" ">
                    <option
                      value=""
                      className="text-slate-800 text-base font-medium leading-relaxed"
                    >
                      Most relevant
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* jobs */}
          {/* job 1 */}
          <div className="self-stretch flex-col justify-start items-start gap-4 flex ">
            
            {dataItem.map((item) => (
              <div key={item.id} className="w-full  sm:px-8 p-4 bg-white border border-zinc-200 flex-col justify-start items-start gap-6 flex sm:flex-row sm:justify-between sm:items-center ">
                <div className="sm:flex sm:flex-row sm:gap-10">
                  <div className="">
                    <img
                      src={item.logo}
                      alt=""
                      className="w-12 sm:w-16 h-12 sm:h-16 relative mb-10 mt-2"
                    />
                  </div>
                  <div className="flex-col  justify-start items-start gap-2 flex">
                    <p className="text-slate-800 text-xl font-semibold  leading-normal">
                      {item.title}
                    </p>
                    <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                      <p className="text-slate-500 text-base font-normal  leading-relaxed">
                        {item.company}
                      </p>
                      <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                      <p className="text-slate-500 text-base font-normal  leading-relaxed">
                        {item.location}
                      </p>
                    </div>
                    <div className="justify-start items-start gap-2 inline-flex">
                      <button className=" text-emerald-300 text-sm font-semibold  leading-snug px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px] justify-center items-center gap-2 flex">
                        {item.jobType}
                      </button>
                      <div className="w-px self-stretch bg-zinc-200"></div>
                      <button className=" text-amber-400 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 flex">
                        {item.categories[0]}
                      </button>
                      <button className=" text-indigo-600 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-indigo-600 justify-center items-center gap-2 flex">
                      {item.categories[1]}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="sm:flex sm:flex-col sm:gap-7 self-stretch gap-6 flex-col justify-between items-start flex mt-10 ">
                  {/* self-stretch h-[101px] flex-col justify-between items-start flex */}
                  <Link to={`/job-details/${item.id}`}>
                  <button className="self-stretch px-6 py-3 bg-indigo-600 items-center text-center text-white text-base font-bold  leading-relaxed">
                    Apply
                  </button>
                  </Link>
                  <div className="self-stretch h-9 flex-col justify-start items-start gap-2 flex">
                    <div className="self-stretch justify-start items-start inline-flex">
                      <div className="grow shrink basis-0 h-1.5 bg-emerald-300"></div>
                      <div className="grow shrink basis-0 h-1.5 bg-emerald-300"></div>
                      <div className="grow shrink basis-0 h-1.5 bg-zinc-200"></div>
                      <div className="grow shrink basis-0 h-1.5 bg-zinc-200"></div>
                      <div className="grow shrink basis-0 h-1.5 bg-zinc-200"></div>
                    </div>
                    <div className="text-center">
                      <span className="text-slate-800 text-sm font-semibold  leading-snug">
                        5 applied
                      </span>
                      <span className="text-black text-sm font-normal  leading-snug">
                        {" "}
                      </span>
                      <span className="text-slate-500 text-sm font-normal  leading-snug">
                        of 10 capacity
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-[22px] h-[26px]", Default: " text-slate-600 hover:bg-gray-50" */}

          {/* pagination */}
          {/* <nav
            className="inline-flex self-stretch justify-center items-center gap-5"
            aria-label="Pagination"
          >
            <a
              href="#"
              className="relative inline-flex items-center hover:bg-gray-50 text-slate-600 w-[22px]"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-3 py-2.5 rounded-lg text-center text-white text-base font-semibold font-['Inter'] leading-relaxed w-[22px] h-[26px] focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex text-center w-[22px] text-slate-600 text-base font-semibold font-['Inter'] leading-relaxed"
            >
              2
            </a>
            <a
              href="#"
              className="relative inline-flex text-center w-[22px] text-slate-600 text-base font-semibold font-['Inter'] leading-relaxed"
            >
              3
            </a>
            <a
              href="#"
              className="relative inline-flex text-center w-[22px] text-slate-600 text-base font-semibold font-['Inter'] leading-relaxed"
            >
              4
            </a>
            <a
              href="#"
              className="relative inline-flex text-center w-[22px] text-slate-600 text-base font-semibold font-['Inter'] leading-relaxed"
            >
              5
            </a>
            <span className="relative inline-flex items-center w-[22px] text-base font-semibold text-slate-600 font-['Inter'] leading-relaxed ">
              ...
            </span>
            <a
              href="#"
              className="relative inline-flex text-center w-[22px] text-slate-600 text-base font-semibold font-['Inter'] leading-relaxed"
            >
              33
            </a>
            <a
              href="#"
              className="relative inline-flex items-center w-[22px] text-slate-600"
            >
              <span className="sr-only">Next</span>
              <svg
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </nav> */}
          <nav className="inline-flex self-stretch justify-center items-center gap-5" aria-label="Pagination">
        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className={`relative inline-flex text-center w-[22px] ${
              currentPage === index + 1
                ? "bg-indigo-600 px-3 py-2.5 rounded-lg text-white text-base font-semibold font-['Inter'] leading-relaxed"
                : "text-slate-600 hover:bg-gray-50"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </nav>
        </div>
      </div>
    </div>
  );
};

export default JobLists;
