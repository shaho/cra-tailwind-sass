import React from "react";
// import "../styles/tailwind.css";
// import "../styles/global.scss";

export default () => {
  return (
    <div className="bg-gray-100 flex">
      <div
        id="inner"
        className="px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:max-w-full lg:w-1/2 lg:py-24 lg:px-12"
      >
        <img
          src="https://i.postimg.cc/yNRpZV4Y/logo.jpg"
          alt=""
          className="h-10"
        />
        <img
          src="https://i.postimg.cc/jjX4yB17/img.jpg"
          alt=""
          className="mt-6 rounded-lg shadow-xl sm:mt-8 sm:h-64 sm:w-full sm:object-cover sm:object-center lg:hidden"
        />
        <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight sm:mt-8 sm:text-4xl lg:text-3xl">
          You can work from anywhere.
          <span className="text-indigo-500"> Take advantage of it.</span>
        </h1>
        <p className="mt-2 text-gray-600 sm:mt-4 sm:text-xl">
          Workcation helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you're not on vaction.
        </p>
        <div className="mt-4 sm:mt-6">
          <a
            href="#top"
            className="inline-block px-5 py-3 shadow-lg rounded-lg bg-indigo-500 hover:bg-indigo-400 md:hover:bg-green-400 active:bg-indigo-600 focus:outline-none focus:shadow-outline text-sm text-white uppercase tracking-wider font-semibold sm:text-base"
          >
            Book your escape
          </a>
        </div>
      </div>
      {/*─── END INNER ───────────────────────────────────────────────────*/}
      <div className="hidden lg:block lg:w-1/2 lg:relative">
        <img
          src="https://i.postimg.cc/jjX4yB17/img.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
    </div>
  );
};
