function Search() {
    return ( 
        <div>
    <div className='flex min-h-screen justify-center overflow-hidden'>
        <div className='translate-y-1/3'>
          <div className='ml-1 mb-2'>
                <p className='h1'>Hi Khian, How's Your Day?</p>
          </div>
            <div className='relative w-96 max-w-lg'>
            <div class="flex justify-center">
            <div class="container flex mx-auto">
              <div class="flex border-2 rounded">
              <button class="flex items-center justify-center px-4 border-r">
            <svg class="w-6 h-6 text-red-600" fill="currentColor"
                viewBox="0 0 24 24">
                <path
                    d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z">
                </path>
            </svg>
              </button>
        <input type="text" class="px-4 py-2 w-80" placeholder="Search Manuscript..."/>
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