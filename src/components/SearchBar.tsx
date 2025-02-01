// Components/SearchBar.tsx
interface SearchbarText {
  text: string
}
const SearchBar: React.FC<SearchbarText> = ({ text }) => {
  return (
    <div className="relative flex-1">
      <input
        type="text"
        placeholder={text}
        className="w-full p-2 pl-10 border border-gray-300 rounded-3xl mt-4 focus:outline-none"
      />
      <img
        src="/assets/search.svg"
        alt="magnifier"
        className="absolute left-3 top-7 text-gray-700"
      />
    </div>
  )
}

export default SearchBar
