const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
        <h2>Pesquisar Tarefa:</h2>
        <i className="fa fa-search"></i>
        <input type="text" placeholder="Pesquisar" value={search} 
        onChange={(e) => setSearch(e.target.value)}/>
    </div>
  )
}

export default Search