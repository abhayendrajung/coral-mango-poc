import { useState, useEffect } from 'react';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortedBy, setSortedBy] = useState(null);
  const [isFiltered, setIsFiltered] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://coralmango.com/api/react-test');
        const jsonData = await response.json();
        setData(jsonData);
        setFilteredData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSort = (property) => {
    const sorted = [...filteredData].sort((a, b) => {
      if (a[property] < b[property]) return -1;
      if (a[property] > b[property]) return 1;
      return 0;
    });

    if (sortedBy === property) {
      sorted.reverse();
    }

    setFilteredData(sorted);
    setSortedBy(property);
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);

    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredData(filtered);
    setIsFiltered(searchTerm !== '');
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={searchTerm}
        onChange={handleSearch}
      />
      {isFiltered && <p>Viewing filtered results</p>}
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('name')}>Name</th>
            <th onClick={() => handleSort('age')}>Age</th>
            <th onClick={() => handleSort('occupation')}>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
