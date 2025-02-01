import Dropdown from './Dropdown'
import SearchBar from './SearchBar'

const Hero = () => {
  return (
    <div>
      <p className="text-sm text-gray-700 mb-2 ">Filter by:</p>
      <div className="flex items-center gap-2">
        {/* Category Dropdown */}
        <Dropdown label="Category" options={['Work', 'Personal', 'Urgent']} />

        {/* Due Date Dropdown */}
        <Dropdown
          label="Due Date"
          options={['Today', 'This Week', 'This Month']}
        />
      </div>
      {/* Search Bar */}
      <SearchBar text="Search tasks ..." />
    </div>
  )
}
export default Hero
