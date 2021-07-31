import React, { useState, useEffect} from 'react'
import './App.css'
import data from './assets/data.json'
import JobCard from './components/JobCard'

const App = () => {
  const [workers, setWorkers] = useState([])
  const [filters, setFilters] = useState([])

  useEffect(() => setWorkers(data), [])

  const filterFunc = ({ role, level, tools, languages }) => {
    if(filters.length === 0) {
      return true
    }

    const tags = [role, level]

    if (tools) {
      tags.push(...tools)
    } 

    if (languages) {
      tags.push(...languages)
    } 

    return filters.every(filter => tags.includes(filter))
  }

  const handleTagClick = tag => {
    if(filters.includes(tag)) return
    setFilters([...filters, tag])
  }

  const handleFilterClick = passedFilter => {
    setFilters(filters.filter(f => f !== passedFilter))
  }

  const clearFilters = () => {
    setFilters([])
  }

  const filteredWorkers = workers.filter(filterFunc)

  return (
    <div className="">
      <header className="bg-blue-500 h-20 w-screen mb-10 md:h-30"></header>
      {filters.length > 0 && (
        <div className="mx-20">
          <div className="m-10 p-4 flex bg-white rounded-md shadow-md">
            {filters.map((filter, idx) => {
                return (
                  <>
                    <span 
                      className="bg-blue-100 mx-0 sm:ml-2 mb-4 text-center text-blue-500 rounded-l-md font-semibold text-sm p-2" 
                      key={idx}
                    >
                      {filter}
                    </span>
                    <span 
                      className="bg-blue-500 h-9 w-8 text-xl font-semibold text-white cursor-pointer rounded-r-md pl-2.5"
                      onClick={() => handleFilterClick(filter)}
                    >
                        x
                    </span>
                  </>
                )
              }
            )}
              <button 
                className="font-bold text-gray-700 ml-auto"
                onClick={clearFilters}  
              >
                  Clear
              </button>
          </div>
        </div>
      )}
      <div className="mx-20">
        { workers.length === 0 ? (
            <p>Loading workers...</p>
            ) : (
              filteredWorkers.map(worker => {
                return (
                  <JobCard 
                    key={worker.id}
                    worker={worker} 
                    handleTagClick={handleTagClick}
                  />
                )
              })
          )}
      </div>
    </div>
  )
}

export default App