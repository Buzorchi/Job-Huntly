import React from "react";
import logo from "./assets/2659b20b00bfeeb5e7c1ab922273a0b3.jpg";
import icon from './assets/Icon.png';
import perk from "./assets/perk.png";
import imgone from "./assets/leon-6awfTPLGaCE-unsplash.png";
import imgtwo from "./assets/leon-wVh5grSMYaY-unsplash 1.png";
import imgthree from "./assets/imgthree.png";
import terraform from "./assets/terraform.png";
import dropbox from "./assets/dropbox.png";
import nomad from "./assets/nomad.png";
import "./App.css";

const JobDetails = () => {
  return (
    <div className="ml-24">
      <header>
        <p>NavBar</p>
      </header>
      <div className="ml-28">
        <span className="text-gray-800 text-opacity-50 text-base font-normal font-['Epilogue'] leading-relaxed">
          Home / Companies / Nomad /{" "}
        </span>
        <h3 className="text-gray-800 text-base font-normal font-['Epilogue'] leading-relaxed">
          Social Media Assistant
        </h3>
      </div>
      <div className="w-[1187px] h-[139.24px] p-6 mb-16 bg-white border border-zinc-200 justify-between items-center inline-flex">
        <div className="w-[463px] h-[91.24px] justify-center items-center gap-6 inline-flex">
          <img class="w-20 h-[83px]" src={logo} />
          <div className="w-[351px] h-[78px] flex-col justify-center items-start gap-2 inline-flex">
            <p className="text-slate-800 text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
              Social Media Assistant
            </p>
            <div className="justify-center items-center gap-2 inline-flex">
              <p class="text-slate-600 text-xl font-normal font-['Epilogue'] leading-loose">
                Stripe
              </p>
              <p class="text-slate-600 text-xl font-normal font-['Epilogue'] leading-loose">
                Paris, France
              </p>
              <p class="text-slate-600 text-xl font-normal font-['Epilogue'] leading-loose">
                Full-Time
              </p>
            </div>
          </div>
        </div>

        <div className="w-64 h-[58.06px] justify-center items-center gap-[30px] inline-flex">
        <img className="w-8 h-[33.18px]" src={icon} alt="icon"/>
        <button className="w-[164px] h-[57px] px-14 py-3.5 bg-indigo-600 justify-center items-center gap-2.5 text-center text-white text-lg font-bold font-['Epilogue'] leading-[28.80px]">Apply</button>
        </div>
      </div>


      <div className="flex"> 

      <div className="w-[752px] h-[858px] flex-col justify-start items-start gap-10 inline-flex">
      <h3 class="text-slate-800 text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">Description</h3>
      <p className="w-[630px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">Stripe is looking for Social Media Marketing expert to help manage our online networks. You will be responsible for monitoring our social media channels, creating content, finding effective ways to engage the community and incentivize others to engage on our channels.</p>
      <h3 class="text-slate-800 text-[32px] mt-10 font-semibold font-['Clash Display Variable'] leading-[38.40px]">Responsibilities</h3>
      <p></p>
      <h3 class="text-slate-800 text-[32px] mt-10 font-semibold font-['Clash Display Variable'] leading-[38.40px]">Who You Are</h3>
      <p></p>
      <h3 class="text-slate-800 text-[32px] mt-10 font-semibold font-['Clash Display Variable'] leading-[38.40px]">Nice-To-Haves</h3>
      <p></p>
      </div>
      <div className="w-[376px] h-[762px] flex-col justify-start items-start gap-10 inline-flex">
      <h3 class="text-slate-800 text-[32px] mt-10 font-semibold font-['Clash Display Variable'] leading-[38.40px]">About this role</h3>
      <p></p>
      <h3 class="text-slate-800 text-[32px] mt-10 font-semibold font-['Clash Display Variable'] leading-[38.40px]">Categories</h3>
      <p></p>
      <h3 class="text-slate-800 text-[32px] mt-10 font-semibold font-['Clash Display Variable'] leading-[38.40px]">Required Skills</h3>
      <p></p>
      </div>
      </div>
     <div className="">
     <h3 className="w-[296.48px] text-slate-800 text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">Perks & Benefits</h3>
     <p class="w-[1036.92px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">This job comes with several perks and benefits</p>
     <div className="flex flex-wrap">
     <div>
     <img className="w-8 h-[33.18px]" src={perk} alt="perk"/>
     <p class="w-[174px] text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal">Full Healthcare</p>
     <p class="w-[274px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">We believe in thriving communities and that starts with our team being happy and healthy.</p>
     </div>
     <div>
     <img className="w-8 h-[33.18px]" src={perk} alt="perk"/>
     <p class="w-[174px] text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal">Unlimited Vacation</p>
     <p class="w-[274px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">We believe you should have a flexible schedule that makes space for family, wellness, and fun.</p>
     </div>
     <div>
     <img className="w-8 h-[33.18px]" src={perk} alt="perk"/>
     <p class="w-[174px] text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal">Skill Development</p>
     <p class="w-[274px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">We believe in always learning and leveling up our skills. Whether it's a conference or online course.</p>
     </div>
     <div>
     <img className="w-8 h-[33.18px]" src={perk} alt="perk"/>
     <p class="w-[174px] text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal">Team Summits</p>
     <p class="w-[274px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.</p>
     </div>
     <div>
     <img className="w-8 h-[33.18px]" src={perk} alt="perk"/>
     <p class="w-[174px] text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal">Remote Working</p>
     <p class="w-[274px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.</p>
     </div>
     <div>
     <img className="w-8 h-[33.18px]" src={perk} alt="perk"/>
     <p class="w-[174px] text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal">Commuter Benefits</p>
     <p class="w-[274px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">We’re grateful for all the time and energy each team member puts into getting to work every day.</p>
     </div>
     <div>
     <img className="w-8 h-[33.18px]" src={perk} alt="perk"/>
     <p class="w-[174px] text-slate-800 text-xl font-semibold font-['Clash Display Variable'] leading-normal">We give back.</p>
     <p class="w-[274px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">We anonymously match any donation our employees make (up to $/€ 600) so they can support the organizations they care about most—times two. </p>
     </div>
     </div>
     </div>

      <section className="flex  mt-20 justify-between items-center ">
      <div className="w-[577.45px] h-[202px] flex-col justify-start items-start gap-8 inline-flex">
          <img class="w-20 h-[83px]" src={logo} />
          <div className="w-[351px] h-[78px] flex-col justify-center items-start gap-2 inline-flex">
            <p className="text-slate-800 text-[32px] font-semibold font-['Clash Display Variable'] leading-[38.40px]">
              Stripe
            </p>
            <p className="text-center text-indigo-600 text-base font-semibold font-['Epilogue'] leading-relaxed">Read more about Stripe</p>
            <p className="w-[577.45px] text-slate-600 text-base font-normal font-['Epilogue'] leading-relaxed">Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size—from new startups to public companies—use our software to accept payments and manage their businesses online.</p>
            </div>
        </div>
        <div className="flex">
        <img className="w-[300px] h-[200px] rounded" src={imgtwo} alt=""/>
        <div>
        <img className="w-[200px] h-[133px]" src={imgone} alt=""/>
        <img className="w-[200px] h-[133px]" src={imgthree} alt=""/>
        </div>
        </div>
      </section>
{/* 
      <div className="w-full h-[330px] sm:h-[149px] sm:px-8 p-4 bg-white border border-zinc-200 flex-col justify-start items-start gap-6 flex sm:flex-row sm:justify-between sm:items-center ">
              <div className="sm:flex sm:flex-row sm:gap-10">
                <div className="">
                  <img
                    src={nomad}
                    alt=""
                    className="w-12 sm:w-16 h-12 sm:h-16 relative"
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
              <div className="flex flex-col gap-7">
                {/ self-stretch h-[101px] flex-col justify-between items-start flex /}
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
            </div> */}

    </div>
  );
};

export default JobDetails;
