import React from "react";
import nomad from "../assets/Nomad.svg";
import dropbox from "../assets/Dropbox.svg";
import terraform from "../assets/Terraform Enterprise.svg";
import Email from "../assets/Email.svg";
import canva from "../assets/Canva.png";
import Product from "../assets/Product.png";
import Pitch from "../assets/Pitch.png";

const JobLists = () => {
  return (
    // <div>
      <div className="p-4">
        {/* w-full md:w-[768px] lg:w-[992px] xl:w-[1200px] mx-auto */}
        <div className="w-full h-auto pb-8 bg-white flex-col justify-center items-center gap-6 inline-flex">
          <div className="self-stretch h-[63px] flex-col justify-start items-start gap-2 flex">
            <p className="text-slate-800 text-2xl font-semibold font-['Clash Display Variable'] leading-[28.80px] sm:text-[32px] sm:leading-[38.40px]">
              All Jobs
            </p>
            <div className="justify-between items-center inline-flex sm:flex w-full h-[26px]">
              <div>
                <p className="text-slate-500 text-base font-normal leading-relaxed">
                  Showing 73 results
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
          <div className="self-stretch flex-col justify-start items-start gap-4 flex ">
            <div className="w-full  sm:px-8 p-4 bg-white border border-zinc-200 flex-col justify-start items-start gap-6 flex sm:flex-row sm:justify-between sm:items-center ">
              <div className="sm:flex sm:flex-row sm:gap-10">
                <div className="">
                  <img
                    src={nomad}
                    alt=""
                    className="w-12 sm:w-16 h-12 sm:h-16 relative mb-10 mt-2"
                  />
                </div>
                <div className="flex-col  justify-start items-start gap-2 flex">
                  <p className="text-slate-800 text-xl font-semibold  leading-normal">
                    Social Media Assistant
                  </p>
                  <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                    <p className="text-slate-500 text-base font-normal  leading-relaxed">
                      Nomad
                    </p>
                    <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                    <p className="text-slate-500 text-base font-normal  leading-relaxed">
                      Paris, France
                    </p>
                  </div>
                  <div className="justify-start items-start gap-2 inline-flex">
                    <button className=" text-emerald-300 text-sm font-semibold  leading-snug px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px] justify-center items-center gap-2 flex">
                      Full-Time
                    </button>
                    <div className="w-px self-stretch bg-zinc-200"></div>
                    <button className=" text-amber-400 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 flex">
                      Marketing
                    </button>
                    <button className=" text-indigo-600 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-indigo-600 justify-center items-center gap-2 flex">
                      Design
                    </button>
                  </div>
                </div>
              </div>
              <div className="sm:flex sm:flex-col sm:gap-7 self-stretch gap-6 flex-col justify-between items-start flex mt-10 ">
                {/* self-stretch h-[101px] flex-col justify-between items-start flex */}
                <button className="self-stretch px-6 py-3 bg-indigo-600 items-center text-center text-white text-base font-bold  leading-relaxed">
                  Apply
                </button>
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
                {/* job 2 */}
            <div className="w-full h-[330px] sm:h-[149px] sm:px-8 p-4 bg-white border border-zinc-200 flex-col justify-start items-start gap-6 flex sm:flex-row sm:justify-between sm:items-center ">
              <div className="sm:flex sm:flex-row sm:gap-10">
                <div className="">
                  <img
                    src={dropbox}
                    alt=""
                    className="w-12 sm:w-16 h-12 sm:h-16 relative"
                  />
                </div>
                <div className="flex-col  justify-start items-start gap-2 flex">
                  <p className="text-slate-800 text-xl font-semibold  leading-normal">
                    Brand Designer
                  </p>
                  <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                    <p className="text-slate-500 text-base font-normal  leading-relaxed">
                      Dropbox
                    </p>
                    <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                    <p className="text-slate-500 text-base font-normal  leading-relaxed">
                      San Fransisco, USA
                    </p>
                  </div>
                  <div className="justify-start items-start gap-2 inline-flex">
                    <button className=" text-emerald-300 text-sm font-semibold  leading-snug px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px] justify-center items-center gap-2 flex">
                      Full-Time
                    </button>
                    <div className="w-px self-stretch bg-zinc-200"></div>
                    <button className=" text-amber-400 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 flex">
                      Marketing
                    </button>
                    <button className=" text-indigo-600 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-indigo-600 justify-center items-center gap-2 flex">
                      Design
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <button className="self-stretch px-6 py-3 bg-indigo-600 items-center text-center text-white text-base font-bold  leading-relaxed">
                  Apply
                </button>
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
                      2 applied
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
                    {/* job 3 */}
            <div className="w-full h-[330px] sm:h-[149px] sm:px-8 p-4 bg-white border border-zinc-200 flex-col justify-start items-start gap-6 flex sm:flex-row sm:justify-between sm:items-center ">
              <div className="sm:flex sm:flex-row sm:gap-10">
                <div className="">
                  <img
                    src={terraform}
                    alt=""
                    className="w-12 sm:w-16 h-12 sm:h-16 relative"
                  />
                </div>
                <div className="flex-col  justify-start items-start gap-2 flex">
                  <p className="text-slate-800 text-xl font-semibold  leading-normal">
                    Interactive Developer
                  </p>
                  <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                    <p className="text-slate-500 text-base font-normal  leading-relaxed">
                      Terraform
                    </p>
                    <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                    <p className="text-slate-500 text-base font-normal  leading-relaxed">
                      Hamburg, Germany
                    </p>
                  </div>
                  <div className="justify-start items-start gap-2 inline-flex">
                    <button className=" text-emerald-300 text-sm font-semibold  leading-snug px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px] justify-center items-center gap-2 flex">
                      Full-Time
                    </button>
                    <div className="w-px self-stretch bg-zinc-200"></div>
                    <button className=" text-amber-400 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 flex">
                      Marketing
                    </button>
                    <button className=" text-indigo-600 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-indigo-600 justify-center items-center gap-2 flex">
                      Design
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <button className="self-stretch px-6 py-3 bg-indigo-600 items-center text-center text-white text-base font-bold  leading-relaxed">
                  Apply
                </button>
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
                      8 applied
                    </span>
                    <span className="text-black text-sm font-normal  leading-snug">
                      {" "}
                    </span>
                    <span className="text-slate-500 text-sm font-normal  leading-snug">
                      of 11 capacity
                    </span>
                  </div>
                </div>
              </div>
            </div>
                {/* job 4 */}
            <div className="w-full h-[330px] sm:h-[149px] sm:px-8 p-4 bg-white border border-zinc-200 flex-col justify-start items-start gap-6 flex sm:flex-row sm:justify-between sm:items-center ">
              <div className="sm:flex sm:flex-row sm:gap-10">
                <div className="">
                  <img
                    src={Email}
                    alt=""
                    className="w-12 sm:w-16 h-12 sm:h-16 relative"
                  />
                </div>
                <div className="flex-col  justify-start items-start gap-2 flex">
                  <p className="text-slate-800 text-xl font-semibold  leading-normal">
                    Email Marketing
                  </p>
                  <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                    <p className="text-slate-500 text-base font-normal  leading-relaxed">
                      Revolut
                    </p>
                    <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                    <p className="text-slate-500 text-base font-normal  leading-relaxed">
                      Madrid, Spain
                    </p>
                  </div>
                  <div className="justify-start items-start gap-2 inline-flex">
                    <button className=" text-emerald-300 text-sm font-semibold  leading-snug px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px] justify-center items-center gap-2 flex">
                      Full-Time
                    </button>
                    <div className="w-px self-stretch bg-zinc-200"></div>
                    <button className=" text-amber-400 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 flex">
                      Marketing
                    </button>
                    <button className=" text-indigo-600 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-indigo-600 justify-center items-center gap-2 flex">
                      Design
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <button className="self-stretch px-6 py-3 bg-indigo-600 items-center text-center text-white text-base font-bold  leading-relaxed">
                  Apply
                </button>
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
                      0 applied
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
                {/* job 5 */}
            <div className="w-full h-[330px] sm:h-[149px] sm:px-8 p-4 bg-white border border-zinc-200 flex-col justify-start items-start gap-6 flex sm:flex-row sm:justify-between sm:items-center ">
              <div className="sm:flex sm:flex-row sm:gap-10">
                <div className="">
                  <img
                    src={canva}
                    alt=""
                    className="w-12 sm:w-16 h-12 sm:h-16 relative"
                  />
                </div>
                <div className="flex-col  justify-start items-start gap-2 flex">
                  <p className="text-slate-800 text-xl font-semibold  leading-normal">
                    Lead Engineer
                  </p>
                  <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                    <p className="text-slate-500 text-base font-normal  leading-relaxed">
                      Canva
                    </p>
                    <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                    <p className="text-slate-500 text-base font-normal  leading-relaxed">
                      Ankara, Turkey
                    </p>
                  </div>
                  <div className="justify-start items-start gap-2 inline-flex">
                    <button className=" text-emerald-300 text-sm font-semibold  leading-snug px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px] justify-center items-center gap-2 flex">
                      Full-Time
                    </button>
                    <div className="w-px self-stretch bg-zinc-200"></div>
                    <button className=" text-amber-400 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 flex">
                      Marketing
                    </button>
                    <button className=" text-indigo-600 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-indigo-600 justify-center items-center gap-2 flex">
                      Design
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <button className="self-stretch px-6 py-3 bg-indigo-600 items-center text-center text-white text-base font-bold  leading-relaxed">
                  Apply
                </button>
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
                {/* job 6 */}
            <div className="w-full h-[330px] sm:h-[149px] sm:px-8 p-4 bg-white border border-zinc-200 flex-col justify-start items-start gap-6 flex sm:flex-row sm:justify-between sm:items-center ">
              <div className="sm:flex sm:flex-row sm:gap-10">
                <div className="">
                  <img
                    src={Product}
                    alt=""
                    className="w-12 sm:w-16 h-12 sm:h-16 relative"
                  />
                </div>
                <div className="flex-col  justify-start items-start gap-2 flex">
                  <p className="text-slate-800 text-xl font-semibold  leading-normal">
                    Product Designer
                  </p>
                  <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                    <p className="text-slate-500 text-base font-normal  leading-relaxed">
                      ClassPass
                    </p>
                    <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                    <p className="text-slate-500 text-base font-normal  leading-relaxed">
                      Berlin, Germany
                    </p>
                  </div>
                  <div className="justify-start items-start gap-2 inline-flex">
                    <button className=" text-emerald-300 text-sm font-semibold  leading-snug px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px] justify-center items-center gap-2 flex">
                      Full-Time
                    </button>
                    <div className="w-px self-stretch bg-zinc-200"></div>
                    <button className=" text-amber-400 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 flex">
                      Marketing
                    </button>
                    <button className=" text-indigo-600 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-indigo-600 justify-center items-center gap-2 flex">
                      Design
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <button className="self-stretch px-6 py-3 bg-indigo-600 items-center text-center text-white text-base font-bold  leading-relaxed">
                  Apply
                </button>
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
                {/* job 7 */}
            <div className="w-full h-[330px] sm:h-[149px] sm:px-8 p-4 bg-white border border-zinc-200 flex-col justify-start items-start gap-6 flex sm:flex-row sm:justify-between sm:items-center ">
              <div className="sm:flex sm:flex-row sm:gap-10">
                <div className="">
                  <img
                    src={Pitch}
                    alt=""
                    className="w-12 sm:w-16 h-12 sm:h-16 relative"
                  />
                </div>
                <div className="flex-col  justify-start items-start gap-2 flex">
                  <p className="text-slate-800 text-xl font-semibold  leading-normal">
                    Customer Manager
                  </p>
                  <div className="h-[27px] justify-center items-center gap-2 inline-flex">
                    <p className="text-slate-500 text-base font-normal  leading-relaxed">
                      Pitch
                    </p>
                    <div className="w-1 h-1 bg-slate-500 rounded-full"></div>
                    <p className="text-slate-500 text-base font-normal  leading-relaxed">
                      Berlin, Germany
                    </p>
                  </div>
                  <div className="justify-start items-start gap-2 inline-flex">
                    <button className=" text-emerald-300 text-sm font-semibold  leading-snug px-2.5 py-1.5 bg-emerald-300 bg-opacity-10 rounded-[80px] justify-center items-center gap-2 flex">
                      Full-Time
                    </button>
                    <div className="w-px self-stretch bg-zinc-200"></div>
                    <button className=" text-amber-400 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-amber-400 justify-center items-center gap-2 flex">
                      Marketing
                    </button>
                    <button className=" text-indigo-600 text-sm font-semibold  leading-snug px-2.5 py-1.5 rounded-[80px] border border-indigo-600 justify-center items-center gap-2 flex">
                      Design
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-7">
                <button className="self-stretch px-6 py-3 bg-indigo-600 items-center text-center text-white text-base font-bold  leading-relaxed">
                  Apply
                </button>
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
          </div>

          {/* pagination */}
          <nav
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
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-[22px] h-[26px]", Default: " text-slate-600 hover:bg-gray-50" */}
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
          </nav>
        </div>
      </div>
    // </div>
  );
};

export default JobLists;
