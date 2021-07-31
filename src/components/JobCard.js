import React from 'react'

const JobCard = ({ 
  worker: {
    company,
    logo,
    isNew,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools
  },
  handleTagClick
}) => {
  const tags = [role, level]

  if(languages) {
    tags.push(...languages)
  }

  if(tools) {
    tags.push(...tools)
  }

  return (
    <div className="flex flex-col bg-white m-10 p-4 rounded-md shadow-md md:flex-row">
      <div className="flex-none">
        <img className="-mt-11 mb-6 w-14 md:w-full md:m-0"
          src={logo} 
          alt={company} 
        />
      </div>
      <div className="flex flex-grow md:ml-4 md:mt-2">
        <div className="">
          <div className="flex -mt-4 mb-2 md:m-0">
            <h3 className="text-sm text-blue-300 font-semibold">{company}</h3>
            <span className={isNew ? "text-xs bg-blue-300 font-semibold text-white rounded-full px-2 py-0.5 ml-4" : ''}>{isNew ? 'NEW' : ''}</span> 
            <span className={featured ? "text-xs bg-gray-800 font-semibold text-white rounded-full px-2 py-0.5 ml-1" : ''}>{featured ? 'FEATURED' : ''}</span> 
          </div>
          <h2 className="font-bold mt-1 mb-2 md:m-0 tracking-wide hover:text-blue-400 cursor-pointer">{position}</h2>
          <p className="text-sm text-gray-400 mb-4 md:m-0">
            {postedAt} <span className="mx-2">·</span> {contract} <span className="mx-2">·</span> {location}
          </p>
          
        </div>
      </div>
      <hr className="md:hidden" />
      <div className=" mt-4 md:my-auto md:mr-4">
        {tags
          ? tags.map((tag, idx) => {
              return (
                <button
                  className="bg-blue-100 mx-4 sm:mx-2 mb-4 text-blue-500 rounded-md font-semibold text-sm p-2 hover:bg-blue-500 hover:text-white" 
                  key={idx} 
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}   
                </button>
              )
            })
          : ''}
      </div>
    </div>
  )
} 

export default JobCard