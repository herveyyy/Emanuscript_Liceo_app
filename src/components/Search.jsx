function Search() {
    return ( 
      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter overflow-auto">
      <div className="max-w-5xl w-11/12 mx-auto"></div>
      <div className="relative">
        <div className="absolute flex-row z-10 w-full md:top-56 top-24 ">
          <div className=" flex justify-center ">
          <img  className="w-20 sm:w-40 md:w-52 " src="/static/images/liceo.png"></img>
          </div>
          <label className="flex justify-center"><h1 className="text-gray-100 text-lg font-bold sm:text-1xl lg:text-1xl italic mt-8">Hello Khian, ?</h1></label>
        </div>
        <div className="flex flex-col h-screen ">
          <div className="mt-1 sm:mt-5 md:mt-10 lg:mt-14"></div>
          <div className="flex items-center justify-center w-full bg-slate-600 h-5/6">
            <img src={"/static/images/LiceoBG.jpg"} className="object-cover w-full h-full blur-sm" alt="background" />
          </div>
          <div className="flex flex-col items-center justify-center relative bottom-[18rem] lg:bottom-[25rem]">
          <div class="flex justify-center">
            <div class="container flex mx-auto">
              <div class="flex border-2 rounded">
              <button class="flex items-center justify-center px-4 border-r">
            <svg className="w-6 h-6 text-red-600" fill="currentColor"
                viewBox="0 0 24 24">
                <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                </path>
            </svg>
              </button>
              <input type="text" className="px-3 py-2 w-60" placeholder="Search Manuscript..."/>
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}

export default Search;
