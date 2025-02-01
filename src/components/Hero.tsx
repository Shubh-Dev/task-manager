const Hero = () => {
  return (
    <div>
      <div className="flex items-center gap-4 p-4 border-b border-gray-300">
        {/* Category Dropdown */}
        <div className="relative w-48">
          <select className="w-full p-2 border border-gray-300 rounded-lg appearance-none focus:outline-none">
            <option>All Categories</option>
            <option>Work</option>
            <option>Personal</option>
          </select>
          <span className="absolute right-3 top-3 text-gray-500">▼</span>
        </div>

        {/* Due Date Dropdown */}
        <div className="relative w-48">
          <select className="w-full p-2 border border-gray-300 rounded-lg appearance-none focus:outline-none">
            <option>Any Due Date</option>
            <option>Today</option>
            <option>This Week</option>
            <option>This Month</option>
          </select>
          <span className="absolute right-3 top-3 text-gray-500">▼</span>
        </div>
      </div>
      {/* Search Bar */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search tasks..."
          className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none"
        />
        <span className="absolute left-3 top-3 text-gray-500">🔍</span>
      </div>
    </div>
  )
}
export default Hero
