export const Filter = ({ filter, setFilter, setSort }) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
                <p>Status:</p>
                <select value={filter} onChange={(e) => 
                    setFilter(e.target.value)}>
                    <option value="All">Todos</option>
                    <option value="Completed">Completas</option>
                    <option value="incompleted">Incompletas</option>
                </select>
            </div>
            <div>
                <p>Ordem alfabética:</p>
                <button onClick={() => setSort("Crescente")}>Crescente</button>
                <button onClick={() => setSort("Decrescente")}>Decrescente</button>
            </div>
        </div>
    </div>
  )
}
