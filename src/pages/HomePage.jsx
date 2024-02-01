import React from "react";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col items-stretch bg-white">
      <div className="flex flex-col items-stretch w-full bg-slate-50 max-md:max-w-full">
        <div className="flex flex-col justify-center items-center px-16 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between items-stretch w-full max-w-[1192px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 justify-between items-stretch max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-2 items-stretch py-0.5 my-auto">
                <div className="flex overflow-hidden relative flex-col justify-center items-center w-8 aspect-square">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f26f819edd3b5c5440add75e8aab940e73afa891856df15651d3bb1e907f0e29?"
                    className="object-cover object-center absolute inset-0 size-full"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8bf0f9e49321ef0654922a7a16bc189784100058b5e0633a220c4012e2deed8?"
                    className="object-center w-full aspect-square"
                  />
                </div>
                <div className="grow text-2xl font-bold tracking-tight leading-9 text-slate-800">
                  JobHuntly
                </div>
              </div>
              <div className="flex gap-4 justify-between items-stretch pt-6 text-base font-medium leading-6 whitespace-nowrap text-slate-600">
                <div className="grow items-stretch pb-7">Find Jobs</div>
                <div className="grow items-stretch pb-7">Browse Companies</div>
              </div>
            </div>
            <div className="flex gap-5 justify-between items-stretch py-3.5 pl-6 text-base font-bold leading-6 text-center whitespace-nowrap">
              <div className="my-auto text-indigo-600">Login</div>
              <div className="justify-center items-stretch px-6 py-3 text-white bg-indigo-600 max-md:px-5">
                Sign Up
              </div>
            </div>
          </div>
        </div>
        <div className="self-center mt-20 w-full max-w-[1315px] max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
            <div className="flex flex-col items-stretch w-[54%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-stretch px-5 pt-4 text-base leading-6 max-md:mt-10 max-md:max-w-full">
                <div className="text-7xl font-semibold text-sky-400 leading-[79px] max-md:max-w-full max-md:text-4xl max-md:leading-[49px]">
                  <span className="text-slate-800">Discover more than</span>{" "}
                  <span className="text-sky-400">5000+ Jobs</span>
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/977c5f1dccb921a1bfdd2bb6104d63a9a2a4d9139b376c40b7962b80dc0c6bf1?"
                  className="object-center self-center mt-7 aspect-[16.67] w-[629px] max-md:max-w-full"
                />
                <div className="mt-6 text-xl leading-8 text-slate-600 max-md:max-w-full">
                  Great platform for the job seeker that searching for new
                  career heights and passionate about startups.
                </div>
                <div className="flex gap-0 justify-center items-stretch py-4 pl-4 mt-6 bg-white shadow-md max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-4 justify-between items-stretch px-4 text-slate-500">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f7d2d193db6251ea4757715e35a2f044527b213a4c7437134260b59ad135df2?"
                      className="object-center justify-center items-center my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col flex-1 justify-between items-stretch pt-5">
                      <div className="">Job title or keyword</div>
                      <div className="flex flex-col shrink-0 mt-2.5 h-px bg-zinc-200" />
                    </div>
                  </div>
                  <div className="flex gap-4 justify-between items-stretch pr-6 pl-2 text-slate-800 max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/3611dfed57339ce8e7fb4603be9b4c1c4474aa341b5a3b76d9cbcfcd5e74bcf5?"
                      className="object-center justify-center items-center my-auto w-6 aspect-square"
                    />
                    <div className="flex flex-col flex-1 justify-between items-stretch pt-5">
                      <div className="flex gap-5 justify-between items-stretch">
                        <div className="flex-auto">Florence, Italy</div>
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ceaea7452a10fb9ba305e14e244e5f9f93d5d70bd93dfa98ef7c51aae884a18?"
                          className="object-center justify-center items-center my-auto w-4 aspect-square"
                        />
                      </div>
                      <div className="flex flex-col shrink-0 mt-2.5 h-px bg-zinc-200" />
                    </div>
                  </div>
                  <div className="flex flex-col justify-center items-center w-0.5 bg-indigo-600 h-[57px]" />
                </div>
                <div className="mt-4 text-gray-800 max-md:max-w-full">
                  Popular :{" "}
                  <span className="font-medium">
                    UI Designer, UX Researcher, Android, Admin
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch ml-5 w-[46%] max-md:ml-0 max-md:w-full">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1c3f2f0e3dbc3aec9dd0c9adf50f3039288a53a20752035117cd42f23dd3e89?"
                className="object-center grow mt-96 w-full aspect-[2.33] max-md:mt-10 max-md:max-w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-stretch w-full max-w-[1194px] max-md:max-w-full">
          <div className="text-lg leading-7 text-gray-800 max-md:max-w-full">
            Companies we helped grow
          </div>
          <div className="flex gap-5 justify-between items-start mt-8 max-md:flex-wrap max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cabeaf3d06dd7f915839d9d6cb6fc1ae0488178dcb9f3a1150a3fba5c43b2828?"
              className="object-center self-stretch max-w-full aspect-[3.85] w-[154px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c69d0861ef1f5cc813a7c0546566a34b53a30d2b011510cc1831fcb51a4f3e81?"
              className="object-center aspect-[2.56] w-[82px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a82d0ca1d227e92c5c7f8d575eb8c8c5ba61e22bdff7d29aa5a7fab5138618c1?"
              className="object-center max-w-full aspect-[7.69] w-[183px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/73d98bc47c9fa04fb3291e1dbda4c2ba029d40ab1d13e3913d57d18a9cdb61f3?"
              className="object-center max-w-full aspect-[4.17] w-[116px]"
            />
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b05b9a1a9363f1a3b9842be50df994608c934dd3de5128341186f524ae00ee57?"
              className="object-center max-w-full aspect-[3.33] w-[108px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-end items-center px-16 pt-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-stretch mt-6 w-full max-w-[1192px] max-md:max-w-full">
          <div className="flex gap-5 justify-between items-stretch w-full font-semibold max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-5xl text-sky-400 leading-[52.8px] max-md:max-w-full max-md:text-4xl">
              Explore by <span className="text-sky-400">category</span>
            </div>
            <div className="flex gap-4 justify-end items-stretch self-end mt-7 text-base leading-6 text-center text-indigo-600">
              <div className="flex-auto">Show all jobs</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d09976ba153d5f9151e87ea7b95f986fd2286bbc2ee738bca2f229d18eb4531?"
                className="object-center justify-center items-center self-start w-6 aspect-square"
              />
            </div>
          </div>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
              <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-stretch p-8 mx-auto w-full whitespace-nowrap bg-white border border-solid border-[color:var(--Neutrals-20,#D6DDEB)] max-md:px-5 max-md:mt-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b03e855be4c437133ac10da7360507a95f162240efdcf61a3e5cfcc8767cda9a?"
                    className="object-center w-12 aspect-square"
                  />
                  <div className="mt-8 text-2xl font-semibold leading-7 text-slate-800">
                    Design
                  </div>
                  <div className="flex gap-4 justify-between items-stretch px-px mt-3 text-lg leading-7 text-slate-500">
                    <div className="grow">235 jobs available</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6a70f1233c4d17efac61197dd66bc73a81bb45f71a6de5469b076c9c7a664a6?"
                      className="object-center justify-center items-center my-auto w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-stretch p-8 mx-auto w-full whitespace-nowrap bg-white border border-solid border-[color:var(--Neutrals-20,#D6DDEB)] max-md:px-5 max-md:mt-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/27141bf69e23f978a1556de61779488da109b1ea437e4bff5b04f190a0d09448?"
                    className="object-center w-12 aspect-square"
                  />
                  <div className="mt-8 text-2xl font-semibold leading-7 text-slate-800">
                    Sales
                  </div>
                  <div className="flex gap-4 justify-between items-stretch px-px mt-3 text-lg leading-7 text-slate-500">
                    <div className="grow">756 jobs available</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6a70f1233c4d17efac61197dd66bc73a81bb45f71a6de5469b076c9c7a664a6?"
                      className="object-center justify-center items-center my-auto w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-stretch p-8 mx-auto w-full text-white whitespace-nowrap bg-indigo-600 max-md:px-5 max-md:mt-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/725ec1ebf514ce5bf1e0d3fd4643e5d12e7d0be9df9055a0aaa58517d0e147f9?"
                    className="object-center w-12 aspect-square"
                  />
                  <div className="mt-8 text-2xl font-semibold leading-7">
                    Marketing
                  </div>
                  <div className="flex gap-4 justify-between items-stretch px-px mt-3 text-lg leading-7">
                    <div className="grow">140 jobs available</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c320ee376cb8943f14650d0df2773035bee20a7c6a13254a44a24b69629d77d2?"
                      className="object-center justify-center items-center my-auto w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-stretch p-8 mx-auto w-full whitespace-nowrap bg-white border border-solid border-[color:var(--Neutrals-20,#D6DDEB)] max-md:px-5 max-md:mt-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/8fd16790b68f40a71b145e338cf893de0a3959b21b52bacbc73c2156c0de9211?"
                    className="object-center w-12 aspect-square"
                  />
                  <div className="mt-8 text-2xl font-semibold leading-7 text-slate-800">
                    Finance
                  </div>
                  <div className="flex gap-4 justify-between items-stretch px-px mt-3 text-lg leading-7 text-slate-500">
                    <div className="grow">325 jobs available</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6a70f1233c4d17efac61197dd66bc73a81bb45f71a6de5469b076c9c7a664a6?"
                      className="object-center justify-center items-center my-auto w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
              <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-stretch p-8 mx-auto w-full whitespace-nowrap bg-white border border-solid border-[color:var(--Neutrals-20,#D6DDEB)] max-md:px-5 max-md:mt-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9b06cae18e90c02ffde152882439e6366cc3ee48f814452c3761e0125765374b?"
                    className="object-center w-12 aspect-square"
                  />
                  <div className="mt-8 text-2xl font-semibold leading-7 text-slate-800">
                    Technology
                  </div>
                  <div className="flex gap-4 justify-between items-stretch px-px mt-3 text-lg leading-7 text-slate-500">
                    <div className="grow">436 jobs available</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6a70f1233c4d17efac61197dd66bc73a81bb45f71a6de5469b076c9c7a664a6?"
                      className="object-center justify-center items-center my-auto w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-stretch p-8 mx-auto w-full whitespace-nowrap bg-white border border-solid border-[color:var(--Neutrals-20,#D6DDEB)] max-md:px-5 max-md:mt-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/908f62770de21708a8b20f6eb6a62947b053e853319c72bf62ad4b80a0145f78?"
                    className="object-center w-12 aspect-square"
                  />
                  <div className="mt-8 text-2xl font-semibold leading-7 text-slate-800">
                    Engineering
                  </div>
                  <div className="flex gap-4 justify-between items-stretch px-px mt-3 text-lg leading-7 text-slate-500">
                    <div className="grow">542 jobs available</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6a70f1233c4d17efac61197dd66bc73a81bb45f71a6de5469b076c9c7a664a6?"
                      className="object-center justify-center items-center my-auto w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-stretch p-8 mx-auto w-full whitespace-nowrap bg-white border border-solid border-[color:var(--Neutrals-20,#D6DDEB)] max-md:px-5 max-md:mt-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/17fdb8063d6a36e4da0bf57f73d91c05b92b7a56df3f83dd44ecf2cd9f02568c?"
                    className="object-center w-12 aspect-square"
                  />
                  <div className="mt-8 text-2xl font-semibold leading-7 text-slate-800">
                    Business
                  </div>
                  <div className="flex gap-4 justify-between items-stretch px-0.5 mt-3 text-lg leading-7 text-slate-500">
                    <div className="grow">211 jobs available</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6a70f1233c4d17efac61197dd66bc73a81bb45f71a6de5469b076c9c7a664a6?"
                      className="object-center justify-center items-center my-auto w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-stretch p-8 mx-auto w-full whitespace-nowrap bg-white border border-solid border-[color:var(--Neutrals-20,#D6DDEB)] max-md:px-5 max-md:mt-8">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb1a39c94f25450a37f1e05134e17f4ce94d861523ff8394fdf9b55cf92cba70?"
                    className="object-center w-12 aspect-square"
                  />
                  <div className="mt-8 text-2xl font-semibold leading-7 text-slate-800">
                    Human Resource
                  </div>
                  <div className="flex gap-4 justify-between items-stretch px-px mt-3 text-lg leading-7 text-slate-500">
                    <div className="grow">346 jobs available</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d6a70f1233c4d17efac61197dd66bc73a81bb45f71a6de5469b076c9c7a664a6?"
                      className="object-center justify-center items-center my-auto w-6 aspect-square"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center px-16 py-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="overflow-hidden px-16 pt-12 my-6 w-full fill-indigo-600 max-w-[1192px] max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
            <div className="flex flex-col items-stretch w-[41%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-stretch self-stretch my-auto text-base leading-6 text-white max-md:mt-10">
                <div className="text-5xl font-semibold leading-[53px] max-md:text-4xl max-md:leading-[49px]">
                  Start posting jobs today
                </div>
                <div className="mt-6 font-medium whitespace-nowrap">
                  Start posting jobs for only $10.
                </div>
                <div className="justify-center items-stretch px-6 py-3 mt-6 font-bold text-center text-indigo-600 bg-white max-md:px-5">
                  Sign Up For Free
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch ml-5 w-[59%] max-md:ml-0 max-md:w-full">
              <div className="grow pr-3.5 mt-5 w-full bg-white max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                  <div className="flex flex-col items-stretch w-1/5 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-stretch pt-3.5 pb-12 mx-auto w-full text-xs font-medium leading-loose text-gray-800 whitespace-nowrap border-solid bg-slate-50 border-[0.392px] border-[color:var(--Other-Colors-Untitled-Border-Dashboard,#E2E7F5)] max-md:mt-3.5">
                      <div className="flex gap-1 items-stretch self-start ml-3.5 text-xs font-bold tracking-normal leading-3 max-md:ml-2.5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/82ae85577de67069f49b1b4b020875315131e5eeae07e918e86aa78482298d83?"
                          className="object-center w-3 aspect-[0.93]"
                        />
                        <div className="grow">JobHuntly</div>
                      </div>
                      <div className="flex gap-1 justify-between items-stretch mt-5 text-indigo-600">
                        <div className="flex flex-col my-auto w-0.5 h-2.5 bg-indigo-600 rounded-none" />
                        <div className="flex gap-1.5 justify-between items-stretch px-2 py-1.5 bg-indigo-600 rounded">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c8e39d6b6c482fb8407ba43486f9c5a4088d9d607ec366c207c2183a90fe78d1?"
                            className="object-center aspect-[0.9] w-[9px]"
                          />
                          <div className="grow justify-center self-start mt-1">
                            Dashboard
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-1.5 items-stretch self-center mt-1.5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/176f8a4a58b53a6c4117f34706121d0930854793ce626824cf396e83acfb0f64?"
                          className="object-center aspect-[0.9] w-[9px]"
                        />
                        <div className="grow justify-center">Messages</div>
                      </div>
                      <div className="flex gap-1.5 items-stretch self-center mt-2.5">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d107c829b1700af69dbf4113c7e98066a6d80d72d94b6627e2fd2286b139b1fd?"
                          className="object-center aspect-[0.9] w-[9px]"
                        />
                        <div className="grow justify-center">
                          Company Profile
                        </div>
                      </div>
                      <div className="flex gap-1.5 items-stretch self-center mt-2.5 w-[74px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/02ebd6fb9eab080c5f5ace6b7204be745c4974ae330eed7e883244fe70042a25?"
                          className="object-center aspect-square w-[9px]"
                        />
                        <div className="grow justify-center">
                          All Applicants
                        </div>
                      </div>
                      <div className="flex gap-1.5 items-stretch self-center mt-2.5 w-[74px]">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9094379c1e2c444b5bdc7f85f5d4ad417b51140deb7a071d136115c2b05f802d?"
                          className="object-center aspect-square w-[9px]"
                        />
                        <div className="grow justify-center">Job Listing</div>
                      </div>
                      <div className="shrink-0 mt-2.5 h-px bg-slate-200" />
                      <div className="flex flex-col items-stretch px-4 mt-3">
                        <div className="text-xs font-semibold tracking-wide leading-loose">
                          SETTINGS
                        </div>
                        <div className="flex gap-1.5 justify-between items-stretch mt-3">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a0489e57975d62047c4082212a085fb9515b6c54c80354763cc3630122fbd168?"
                            className="object-center aspect-square w-[9px]"
                          />
                          <div className="grow justify-center">Settings</div>
                        </div>
                        <div className="flex gap-1.5 justify-between items-stretch mt-2.5">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/80619a81ea1c24c433798785aa1e4dc0b8eb3f9019e9b4f1a0d30823ac78ffcd?"
                            className="object-center aspect-square w-[9px]"
                          />
                          <div className="grow justify-center">Help</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-stretch ml-5 w-4/5 max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-stretch mt-2.5 max-md:mt-6 max-md:max-w-full">
                      <div className="z-10 max-md:max-w-full">
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                          <div className="flex flex-col items-stretch w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col items-stretch mt-10 max-md:mt-10">
                              <div className="justify-center text-sm font-semibold tracking-tight leading-4 text-gray-800">
                                Good morning, Maria
                              </div>
                              <div className="justify-center mt-1.5 text-xs font-medium leading-loose text-gray-800 whitespace-nowrap">
                                Here is what’s happening with your job listings
                                from July 19 - July 25.
                              </div>
                              <div className="flex flex-col items-stretch px-2.5 py-2.5 mt-3.5 w-full bg-white border-solid border-[0.392px] border-[color:var(--Neutrals-20,#D6DDEB)]">
                                <div className="flex gap-5 justify-between items-start">
                                  <div className="flex flex-col flex-1 items-stretch self-start font-semibold text-slate-800">
                                    <div className="text-xs leading-loose">
                                      Company Visitors
                                    </div>
                                    <div className="mt-2.5 text-3xl leading-7">
                                      21,457
                                    </div>
                                    <div className="text-xs font-medium leading-3 whitespace-nowrap text-slate-500">
                                      Visitors from July 19 - July 25
                                    </div>
                                  </div>
                                  <div className="flex flex-col justify-end items-stretch self-end px-2.5 pt-2 mt-8 text-center whitespace-nowrap rounded basis-0 bg-slate-800 leading-[160%]">
                                    <div className="text-xs text-zinc-200">
                                      Visitors
                                    </div>
                                    <div className="mt-1.5 text-xs font-semibold text-white">
                                      5,879
                                    </div>
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d04f3de491e53331459cf079c54e18737add4e57db0ff60c87178363cd10c31b?"
                                      className="object-center self-center mt-1.5 w-1.5 aspect-[1.2] fill-slate-800"
                                    />
                                  </div>
                                </div>
                                <div className="flex gap-2.5 justify-center items-end mt-1">
                                  <div className="flex flex-col mt-9 w-5 h-5 rounded-sm bg-slate-200" />
                                  <div className="flex flex-col self-start mt-1 w-5 rounded-sm bg-slate-200 h-[51px]" />
                                  <div className="flex flex-col mt-6 w-5 rounded-sm bg-slate-200 h-[33px]" />
                                  <div className="flex flex-col mt-8 rounded-sm bg-slate-200 h-[22px] w-[19px]" />
                                  <div className="flex flex-col self-start mt-4 h-10 rounded-sm bg-slate-200 w-[19px]" />
                                  <div className="flex flex-col self-stretch bg-indigo-600 rounded-sm h-[55px] w-[19px]" />
                                  <div className="flex flex-col mt-6 rounded-sm bg-slate-200 h-[33px] w-[19px]" />
                                </div>
                                <div className="flex gap-3 justify-between items-stretch text-xs leading-loose text-center whitespace-nowrap text-slate-500">
                                  <div className="grow justify-center">Mon</div>
                                  <div className="justify-center">Tue</div>
                                  <div className="justify-center">Wed</div>
                                  <div className="justify-center">Thu</div>
                                  <div className="justify-center">Fri</div>
                                  <div className="justify-center">Sat</div>
                                  <div className="grow justify-center">Sun</div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-stretch ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="flex flex-col grow items-stretch max-md:mt-2.5">
                              <div className="flex flex-col items-stretch self-end whitespace-nowrap leading-[160%] w-[84px]">
                                <div className="flex gap-2 justify-between items-stretch text-base font-bold text-center text-white">
                                  <div className="flex gap-1 justify-between items-stretch px-2.5 py-1.5 bg-indigo-600">
                                    <img
                                      loading="lazy"
                                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/db73129d8e54735c8e539791dedafac9dfd7d95636c8868b72f1249904e1da10?"
                                      className="object-center self-start aspect-square w-[9px]"
                                    />
                                    <div className="grow">Post a job</div>
                                  </div>
                                  <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b120febbc7408cdc0b2668ded5bc2bf8d6fba3ac9069ed84df3615ecd0d872a3?"
                                    className="object-center self-start mt-1 aspect-square w-[15px]"
                                  />
                                </div>
                                <div className="flex gap-1 justify-center items-stretch self-start px-1.5 py-1.5 mt-5 ml-4 text-xs font-medium text-gray-800 bg-white rounded border-solid border-[0.392px] border-[color:var(--Other-Colors-Untitled-Border-Dashboard,#E2E7F5)] max-md:ml-2.5">
                                  <img
                                    loading="lazy"
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/06262ab6aa7ff1f338d70ea35f43b5e35282d66ad838b72b2c84b0dc79888614?"
                                    className="object-center aspect-square w-[9px]"
                                  />
                                  <div className="grow justify-center">
                                    Jul 19 - Jul 25
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-col justify-center items-stretch pt-6 mt-4 w-full bg-white border border-solid border-[color:var(--Neutrals-20,#D6DDEB)]">
                                <div className="justify-center items-stretch pl-2.5 text-xl font-semibold leading-6 whitespace-nowrap text-slate-800">
                                  Applicants Statistic
                                </div>
                                <div className="flex gap-1 justify-between items-stretch px-3 py-0.5 mt-7 whitespace-nowrap">
                                  <div className="justify-center text-7xl font-semibold leading-[72px] text-slate-800 max-md:text-4xl">
                                    158
                                  </div>
                                  <div className="flex-auto text-lg font-medium leading-7 text-slate-500">
                                    Applicants
                                  </div>
                                </div>
                                <img
                                  loading="lazy"
                                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/767c8f5d1fee9ad6a1d6f7c4bb4ce160f25bc8fc7ff694c11867760104ea87b8?"
                                  className="object-center justify-center items-center self-center mt-5 aspect-[33.33] w-[211px]"
                                />
                                <div className="flex flex-col items-stretch px-3 mt-5 text-base font-medium leading-6 text-slate-800">
                                  <div className="justify-center items-stretch pl-3.5 whitespace-nowrap">
                                    Social Media Specialist
                                  </div>
                                  <div className="justify-center items-stretch self-start pl-3.5 mt-1.5 whitespace-nowrap">
                                    Senior Engineer
                                  </div>
                                  <div className="justify-center items-stretch self-start pl-3.5 mt-1.5 whitespace-nowrap">
                                    Senior Engineer
                                  </div>
                                  <div className="justify-center items-stretch pl-12 mt-1.5 text-right text-slate-500 max-md:pl-5">
                                    54 Applicants
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-stretch pt-6 bg-white border border-solid border-[color:var(--Neutrals-20,#D6DDEB)] text-slate-800 max-md:max-w-full">
                        <div className="justify-center items-stretch py-0.5 text-xl font-semibold leading-6 max-md:max-w-full">
                          Recent Applicants
                        </div>
                        <div className="flex gap-5 justify-between items-stretch pt-2.5 pr-7 pl-2.5 mt-6 w-full whitespace-nowrap bg-slate-50 leading-[160%] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                          <div className="flex gap-5 justify-between items-stretch">
                            <div className="flex gap-1.5 justify-between items-stretch pr-2.5 text-lg font-bold">
                              <img
                                loading="lazy"
                                srcSet="..."
                                className="object-center aspect-[2.27] w-[25px]"
                              />
                              <div className="grow justify-center items-stretch self-start pr-12">
                                Jake Gyll
                              </div>
                            </div>
                            <div className="grow justify-center items-stretch self-start text-base font-semibold">
                              Email
                            </div>
                          </div>
                          <img
                            loading="lazy"
                            src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACwAAAAAAQABAAACAkQBADs="
                            className="object-center self-start mt-2 aspect-[3.03] w-[9px]"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center px-16 pb-12 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col items-stretch mb-6 w-full max-w-[1192px] max-md:max-w-full">
          <div className="flex gap-5 justify-between items-stretch w-full font-semibold max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-5xl text-sky-400 leading-[52.8px] max-md:text-4xl">
              Featured <span className="text-sky-400">jobs</span>
            </div>
            <div className="flex gap-4 justify-end items-stretch self-end mt-7 text-base leading-6 text-center text-indigo-600">
              <div className="flex-auto">Show all jobs</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/033f377da370568b64111805c91f7aa1008af66fc9cde9446584af54e8de2c21?"
                className="object-center justify-center items-center self-start w-6 aspect-square"
              />
            </div>
          </div>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
              <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-stretch p-6 mx-auto w-full text-base leading-6 bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-8">
                  <div className="flex gap-5 justify-between items-stretch text-center text-indigo-600 whitespace-nowrap">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="object-center w-12 aspect-square"
                    />
                    <div className="justify-center items-stretch self-start px-3 py-1 border border-solid border-[color:var(--Brands-Primary,#4640DE)]">
                      Full Time
                    </div>
                  </div>
                  <div className="mt-4 text-lg font-semibold text-slate-800">
                    Email Marketing
                  </div>
                  <div className="flex gap-5 justify-between items-stretch text-slate-600">
                    <div className="">Revolut</div>
                    <div className="flex-auto">Madrid, Spain</div>
                  </div>
                  <div className="mt-4 leading-7 text-slate-500">
                    Revolut is looking for Email Marketing to help team ma ...
                  </div>
                  <div className="flex gap-2 justify-between items-stretch mt-4 text-sm font-semibold whitespace-nowrap">
                    <div className="grow justify-center items-stretch px-4 py-1 text-amber-400 bg-orange-400 bg-opacity-10 rounded-[80px]">
                      Marketing
                    </div>
                    <div className="grow justify-center items-stretch px-4 py-1 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                      Design
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-stretch p-6 mx-auto w-full text-base leading-6 bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-8">
                  <div className="flex gap-5 justify-between items-stretch text-center text-indigo-600 whitespace-nowrap">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9eebbb987e23c4a1c10f8eeeb4dcde6670f42f63459af2e034634134324321d2?"
                      className="object-center w-12 aspect-square"
                    />
                    <div className="justify-center items-stretch self-start px-3 py-1 border border-solid border-[color:var(--Brands-Primary,#4640DE)]">
                      Full Time
                    </div>
                  </div>
                  <div className="mt-4 text-lg font-semibold text-slate-800">
                    Brand Designer
                  </div>
                  <div className="flex gap-5 justify-between items-stretch whitespace-nowrap text-slate-600">
                    <div className="grow">Dropbox</div>
                    <div className="grow">San Fransisco, US</div>
                  </div>
                  <div className="mt-4 leading-7 text-slate-500">
                    Dropbox is looking for Brand Designer to help the team t ...
                  </div>
                  <div className="flex gap-2 justify-between items-stretch mt-4 text-sm font-semibold whitespace-nowrap">
                    <div className="grow justify-center items-stretch px-4 py-1 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                      Design
                    </div>
                    <div className="grow justify-center items-stretch px-4 py-1 text-indigo-600 bg-indigo-600 bg-opacity-10 rounded-[80px]">
                      Business
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-stretch p-6 mx-auto w-full text-base leading-6 bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-8">
                  <div className="flex gap-5 justify-between items-stretch text-center text-indigo-600 whitespace-nowrap">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="object-center w-12 aspect-square"
                    />
                    <div className="justify-center items-stretch self-start px-3 py-1 border border-solid border-[color:var(--Brands-Primary,#4640DE)]">
                      Full Time
                    </div>
                  </div>
                  <div className="mt-4 text-lg font-semibold text-slate-800">
                    Email Marketing
                  </div>
                  <div className="flex gap-5 justify-between items-stretch text-slate-600">
                    <div className="">Pitch</div>
                    <div className="flex-auto">Berlin, Germany</div>
                  </div>
                  <div className="mt-4 leading-7 text-slate-500">
                    Pitch is looking for Customer Manager to join marketing t
                    ...
                  </div>
                  <div className="justify-center items-stretch px-4 py-1 mt-4 text-sm font-semibold text-amber-400 whitespace-nowrap bg-orange-400 bg-opacity-10 rounded-[80px]">
                    Marketing
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-stretch p-6 mx-auto w-full text-base leading-6 bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-8">
                  <div className="flex gap-5 justify-between items-stretch text-center text-indigo-600 whitespace-nowrap">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="object-center w-12 aspect-square"
                    />
                    <div className="justify-center items-stretch self-start px-3 py-1 border border-solid border-[color:var(--Brands-Primary,#4640DE)]">
                      Full Time
                    </div>
                  </div>
                  <div className="mt-4 text-lg font-semibold text-slate-800">
                    Visual Designer
                  </div>
                  <div className="flex gap-5 justify-between items-stretch whitespace-nowrap text-slate-600">
                    <div className="">Blinklist</div>
                    <div className="grow">Granada, Spain</div>
                  </div>
                  <div className="mt-4 leading-7 text-slate-500">
                    Blinkist is looking for Visual Designer to help team desi
                    ...
                  </div>
                  <div className="justify-center items-stretch px-4 py-1 mt-4 text-sm font-semibold text-emerald-300 whitespace-nowrap bg-emerald-300 bg-opacity-10 rounded-[80px]">
                    Design
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
              <div className="flex flex-col items-stretch w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-stretch p-6 mx-auto w-full text-base leading-6 bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-8">
                  <div className="flex gap-5 justify-between items-stretch text-center text-indigo-600 whitespace-nowrap">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="object-center w-12 aspect-square"
                    />
                    <div className="justify-center items-stretch self-start px-3 py-1 border border-solid border-[color:var(--Brands-Primary,#4640DE)]">
                      Full Time
                    </div>
                  </div>
                  <div className="mt-4 text-lg font-semibold text-slate-800">
                    Product Designer
                  </div>
                  <div className="flex gap-5 justify-between items-stretch whitespace-nowrap text-slate-600">
                    <div className="grow">ClassPass</div>
                    <div className="grow">Manchester, UK</div>
                  </div>
                  <div className="mt-4 leading-7 text-slate-500">
                    ClassPass is looking for Product Designer to help us...
                  </div>
                  <div className="flex gap-2 justify-between items-stretch mt-4 text-sm font-semibold whitespace-nowrap">
                    <div className="grow justify-center items-stretch px-4 py-1 text-amber-400 bg-orange-400 bg-opacity-10 rounded-[80px]">
                      Marketing
                    </div>
                    <div className="grow justify-center items-stretch px-4 py-1 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                      Design
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-stretch p-6 mx-auto w-full text-base leading-6 bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-8">
                  <div className="flex gap-5 justify-between items-stretch text-center text-indigo-600 whitespace-nowrap">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="object-center w-12 aspect-square"
                    />
                    <div className="justify-center items-stretch self-start px-3 py-1 border border-solid border-[color:var(--Brands-Primary,#4640DE)]">
                      Full Time
                    </div>
                  </div>
                  <div className="mt-4 text-lg font-semibold text-slate-800">
                    Lead Designer
                  </div>
                  <div className="flex gap-5 justify-between items-stretch text-slate-600">
                    <div className="">Canva</div>
                    <div className="flex-auto">Ontario, Canada</div>
                  </div>
                  <div className="mt-4 leading-7 text-slate-500">
                    Canva is looking for Lead Engineer to help develop n ...
                  </div>
                  <div className="flex gap-2 justify-between items-stretch mt-4 text-sm font-semibold whitespace-nowrap">
                    <div className="grow justify-center items-stretch px-4 py-1 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                      Design
                    </div>
                    <div className="grow justify-center items-stretch px-4 py-1 text-indigo-600 bg-indigo-600 bg-opacity-10 rounded-[80px]">
                      Business
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col items-stretch p-6 mx-auto w-full text-base leading-6 bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-8">
                  <div className="flex gap-5 justify-between items-stretch text-center text-indigo-600 whitespace-nowrap">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="object-center w-12 aspect-square"
                    />
                    <div className="justify-center items-stretch self-start px-3 py-1 border border-solid border-[color:var(--Brands-Primary,#4640DE)]">
                      Full Time
                    </div>
                  </div>
                  <div className="mt-4 text-lg font-semibold text-slate-800">
                    Brand Strategist
                  </div>
                  <div className="flex gap-5 justify-between items-stretch whitespace-nowrap text-slate-600">
                    <div className="grow">GoDaddy</div>
                    <div className="grow">Marseille, France</div>
                  </div>
                  <div className="mt-4 leading-7 text-slate-500">
                    GoDaddy is looking for Brand Strategist to join the team...
                  </div>
                  <div className="justify-center items-stretch px-4 py-1 mt-4 text-sm font-semibold text-amber-400 whitespace-nowrap bg-orange-400 bg-opacity-10 rounded-[80px]">
                    Marketing
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow items-stretch p-6 mx-auto w-full text-base leading-6 bg-white border border-solid border-zinc-200 max-md:px-5 max-md:mt-8">
                  <div className="flex gap-5 justify-between items-stretch text-center text-indigo-600 whitespace-nowrap">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="object-center w-12 aspect-square"
                    />
                    <div className="justify-center items-stretch self-start px-3 py-1 border border-solid border-[color:var(--Brands-Primary,#4640DE)]">
                      Full Time
                    </div>
                  </div>
                  <div className="mt-4 text-lg font-semibold text-slate-800">
                    Data Analyst
                  </div>
                  <div className="flex gap-5 justify-between items-stretch text-slate-600">
                    <div className="">Twitter</div>
                    <div className="flex-auto">San Diego, US</div>
                  </div>
                  <div className="mt-4 leading-7 text-slate-500">
                    Twitter is looking for Data Analyst to help team desi ...
                  </div>
                  <div className="justify-center items-stretch px-4 py-2 mt-4 text-sm font-semibold text-red-400 whitespace-nowrap bg-red-400 bg-opacity-10 rounded-[80px]">
                    Technology
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col justify-center items-end pl-16 w-full fill-slate-50 min-h-[877px] max-md:pl-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8acbe574213ec279f6ec90ac95e374d5821a7e327be250e4709e3f6e80590126?"
          className="object-cover object-center absolute inset-0 size-full"
        />
        <div className="flex overflow-hidden relative flex-col items-start py-12 pr-20 max-w-full min-h-[877px] w-[797px] max-md:pr-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb3516180fa02c2ecb87b4dfbb542aec312ea10556716245d6b051dac39c020a?"
            className="object-cover object-center absolute inset-0 size-full"
          />
          <div className="flex relative gap-5 justify-between items-stretch mt-6 w-full font-semibold max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto text-5xl text-sky-400 leading-[52.8px] max-md:text-4xl">
              Latest <span className="text-sky-400">jobs open</span>
            </div>
            <div className="flex gap-4 justify-end items-stretch self-end mt-7 text-base leading-6 text-center text-indigo-600">
              <div className="flex-auto">Show all jobs</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/033f377da370568b64111805c91f7aa1008af66fc9cde9446584af54e8de2c21?"
                className="object-center justify-center items-center self-start w-6 aspect-square"
              />
            </div>
          </div>
          <div className="relative mt-12 mb-2.5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
              <div className="flex flex-col items-stretch w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col grow items-stretch max-md:mt-8 max-md:max-w-full">
                  <div className="py-6 pr-20 pl-10 bg-white max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                      <div className="flex flex-col items-stretch w-[19%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/1640acb0bc4bad9555d976dd6062c58e55871d20beb1675b72c996de65b19b9c?"
                          className="object-center w-16 aspect-square max-md:mt-10"
                        />
                      </div>
                      <div className="flex flex-col items-stretch ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow items-stretch font-semibold leading-[160%] max-md:mt-10">
                          <div className="text-xl leading-6 text-slate-800">
                            Social Media Assistant
                          </div>
                          <div className="flex gap-5 justify-between items-stretch py-px mt-2 text-base text-slate-600">
                            <div className="">Nomad</div>
                            <div className="flex-auto">Paris, France</div>
                          </div>
                          <div className="flex gap-2 items-stretch mt-2 text-sm whitespace-nowrap">
                            <div className="grow justify-center items-stretch px-2.5 py-1.5 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                              Full-Time
                            </div>
                            <div className="flex flex-col w-px bg-zinc-200 h-[34px]" />
                            <div className="grow justify-center items-stretch px-2.5 py-1.5 text-amber-400 border border-solid border-[color:var(--Accents-Yellow,#FFB836)] rounded-[80px]">
                              Marketing
                            </div>
                            <div className="justify-center items-stretch px-2.5 py-1.5 text-indigo-600 border border-solid aspect-[2] border-[color:var(--Brands-Primary,#4640DE)] rounded-[80px]">
                              Design
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 pr-20 pl-10 mt-4 bg-white max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                      <div className="flex flex-col items-stretch w-[19%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/30d6e28d765c6aaa6154196af43b0247992ffc6b91de2834b5341ad8248593ba?"
                          className="object-center w-16 aspect-square max-md:mt-10"
                        />
                      </div>
                      <div className="flex flex-col items-stretch ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow items-stretch font-semibold leading-[160%] max-md:mt-10">
                          <div className="text-xl leading-6 text-slate-800">
                            Brand Designer
                          </div>
                          <div className="flex gap-5 justify-between items-stretch py-px mt-2 text-base text-slate-600">
                            <div className="">Dropbox</div>
                            <div className="flex-auto">San Fransisco, USA</div>
                          </div>
                          <div className="flex gap-2 items-stretch mt-2 text-sm whitespace-nowrap">
                            <div className="grow justify-center items-stretch px-2.5 py-1.5 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                              Full-Time
                            </div>
                            <div className="flex flex-col w-px bg-zinc-200 h-[34px]" />
                            <div className="grow justify-center items-stretch px-2.5 py-1.5 text-amber-400 border border-solid border-[color:var(--Accents-Yellow,#FFB836)] rounded-[80px]">
                              Marketing
                            </div>
                            <div className="justify-center items-stretch px-2.5 py-1.5 text-indigo-600 border border-solid aspect-[2] border-[color:var(--Brands-Primary,#4640DE)] rounded-[80px]">
                              Design
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 pr-20 pl-10 mt-4 bg-white max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                      <div className="flex flex-col items-stretch w-[19%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4923eb44484578e42dad74609a9ed10e693fdf435399c478548a2f6cd4e3e1f5?"
                          className="object-center w-16 aspect-square max-md:mt-10"
                        />
                      </div>
                      <div className="flex flex-col items-stretch ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow items-stretch font-semibold leading-[160%] max-md:mt-10">
                          <div className="text-xl leading-6 text-slate-800">
                            Interactive Developer
                          </div>
                          <div className="flex gap-5 justify-between items-stretch py-px mt-2 text-base whitespace-nowrap text-slate-600">
                            <div className="">Terraform</div>
                            <div className="grow">Hamburg, Germany</div>
                          </div>
                          <div className="flex gap-2 items-stretch mt-2 text-sm whitespace-nowrap">
                            <div className="grow justify-center items-stretch px-2.5 py-1.5 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                              Full-Time
                            </div>
                            <div className="flex flex-col w-px bg-zinc-200 h-[34px]" />
                            <div className="grow justify-center items-stretch px-2.5 py-1.5 text-amber-400 border border-solid border-[color:var(--Accents-Yellow,#FFB836)] rounded-[80px]">
                              Marketing
                            </div>
                            <div className="justify-center items-stretch px-2.5 py-1.5 text-indigo-600 border border-solid aspect-[2] border-[color:var(--Brands-Primary,#4640DE)] rounded-[80px]">
                              Design
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 pr-20 pl-10 mt-4 bg-white max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                      <div className="flex flex-col items-stretch w-[19%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cae980bf8bbdda70bcab9f7790885b60be401fd89bb200fad3e684554ffa18e3?"
                          className="object-center w-16 aspect-square max-md:mt-10"
                        />
                      </div>
                      <div className="flex flex-col items-stretch ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow items-stretch font-semibold leading-[160%] max-md:mt-10">
                          <div className="text-xl leading-6 text-slate-800">
                            HR Manager
                          </div>
                          <div className="flex gap-5 justify-between items-stretch py-px mt-2 text-base text-slate-600">
                            <div className="">Packer</div>
                            <div className="flex-auto">Lucern, Switzerland</div>
                          </div>
                          <div className="flex gap-2 items-stretch mt-2 text-sm whitespace-nowrap">
                            <div className="grow justify-center items-stretch px-2.5 py-1.5 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                              Full-Time
                            </div>
                            <div className="flex flex-col w-px bg-zinc-200 h-[34px]" />
                            <div className="grow justify-center items-stretch px-2.5 py-1.5 text-amber-400 border border-solid border-[color:var(--Accents-Yellow,#FFB836)] rounded-[80px]">
                              Marketing
                            </div>
                            <div className="justify-center items-stretch px-2.5 py-1.5 text-indigo-600 border border-solid aspect-[2] border-[color:var(--Brands-Primary,#4640DE)] rounded-[80px]">
                              Design
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col grow items-stretch max-md:mt-8 max-md:max-w-full">
                  <div className="py-6 pr-20 pl-10 bg-white max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                      <div className="flex flex-col items-stretch w-[19%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="object-center w-16 aspect-square max-md:mt-10"
                        />
                      </div>
                      <div className="flex flex-col items-stretch ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow items-stretch font-semibold leading-[160%] max-md:mt-10">
                          <div className="text-xl leading-6 text-slate-800">
                            Social Media Assistant
                          </div>
                          <div className="flex gap-5 justify-between items-stretch py-px mt-2 text-base text-slate-600">
                            <div className="">Netlify</div>
                            <div className="flex-auto">Paris, France</div>
                          </div>
                          <div className="flex gap-2 items-stretch mt-2 text-sm whitespace-nowrap">
                            <div className="grow justify-center items-stretch px-2.5 py-1.5 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                              Full-Time
                            </div>
                            <div className="flex flex-col w-px bg-zinc-200 h-[34px]" />
                            <div className="grow justify-center items-stretch px-2.5 py-1.5 text-amber-400 border border-solid border-[color:var(--Accents-Yellow,#FFB836)] rounded-[80px]">
                              Marketing
                            </div>
                            <div className="justify-center items-stretch px-2.5 py-1.5 text-indigo-600 border border-solid aspect-[2] border-[color:var(--Brands-Primary,#4640DE)] rounded-[80px]">
                              Design
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 pr-20 pl-10 mt-4 bg-white max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                      <div className="flex flex-col items-stretch w-[19%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="object-center w-16 aspect-square max-md:mt-10"
                        />
                      </div>
                      <div className="flex flex-col items-stretch ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow items-stretch font-semibold leading-[160%] max-md:mt-10">
                          <div className="text-xl leading-6 text-slate-800">
                            Brand Designer
                          </div>
                          <div className="flex gap-5 justify-between items-stretch py-px mt-2 text-base text-slate-600">
                            <div className="">Maze</div>
                            <div className="flex-auto">San Fransisco, USA</div>
                          </div>
                          <div className="flex gap-2 items-stretch mt-2 text-sm whitespace-nowrap">
                            <div className="grow justify-center items-stretch px-2.5 py-1.5 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                              Full-Time
                            </div>
                            <div className="flex flex-col w-px bg-zinc-200 h-[34px]" />
                            <div className="grow justify-center items-stretch px-2.5 py-1.5 text-amber-400 border border-solid border-[color:var(--Accents-Yellow,#FFB836)] rounded-[80px]">
                              Marketing
                            </div>
                            <div className="justify-center items-stretch px-2.5 py-1.5 text-indigo-600 border border-solid aspect-[2] border-[color:var(--Brands-Primary,#4640DE)] rounded-[80px]">
                              Design
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 pr-20 pl-10 mt-4 bg-white max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                      <div className="flex flex-col items-stretch w-[19%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="object-center w-16 aspect-square max-md:mt-10"
                        />
                      </div>
                      <div className="flex flex-col items-stretch ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow items-stretch font-semibold leading-[160%] max-md:mt-10">
                          <div className="text-xl leading-6 text-slate-800">
                            Interactive Developer
                          </div>
                          <div className="flex gap-5 justify-between items-stretch py-px mt-2 text-base text-slate-600">
                            <div className="">Udacity</div>
                            <div className="flex-auto">Hamburg, Germany</div>
                          </div>
                          <div className="flex gap-2 items-stretch mt-2 text-sm whitespace-nowrap">
                            <div className="grow justify-center items-stretch px-2.5 py-1.5 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                              Full-Time
                            </div>
                            <div className="flex flex-col w-px bg-zinc-200 h-[34px]" />
                            <div className="grow justify-center items-stretch px-2.5 py-1.5 text-amber-400 border border-solid border-[color:var(--Accents-Yellow,#FFB836)] rounded-[80px]">
                              Marketing
                            </div>
                            <div className="justify-center items-stretch px-2.5 py-1.5 text-indigo-600 border border-solid aspect-[2] border-[color:var(--Brands-Primary,#4640DE)] rounded-[80px]">
                              Design
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="py-6 pr-20 pl-10 mt-4 bg-white max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
                      <div className="flex flex-col items-stretch w-[19%] max-md:ml-0 max-md:w-full">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="object-center justify-center items-center w-16 aspect-square max-md:mt-10"
                        />
                      </div>
                      <div className="flex flex-col items-stretch ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow items-stretch font-semibold leading-[160%] max-md:mt-10">
                          <div className="text-xl leading-6 text-slate-800">
                            HR Manager
                          </div>
                          <div className="flex gap-5 justify-between items-stretch py-px mt-2 text-base whitespace-nowrap text-slate-600">
                            <div className="">Webflow</div>
                            <div className="grow">Lucern, Switzerland</div>
                          </div>
                          <div className="flex gap-2 items-stretch mt-2 text-sm whitespace-nowrap">
                            <div className="grow justify-center items-stretch px-2.5 py-1.5 text-emerald-300 bg-emerald-300 bg-opacity-10 rounded-[80px]">
                              Full-Time
                            </div>
                            <div className="flex flex-col w-px bg-zinc-200 h-[34px]" />
                            <div className="grow justify-center items-stretch px-2.5 py-1.5 text-amber-400 border border-solid border-[color:var(--Accents-Yellow,#FFB836)] rounded-[80px]">
                              Marketing
                            </div>
                            <div className="justify-center items-stretch px-2.5 py-1.5 text-indigo-600 border border-solid aspect-[2] border-[color:var(--Brands-Primary,#4640DE)] rounded-[80px]">
                              Design
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;
