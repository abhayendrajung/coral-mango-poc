import { useState, useEffect } from 'react';
const CardListView = () => {
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
    return (
      <div className="card-list">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <h2>{item.name}</h2>
            <p>Age: {item.age}</p>
            <p>Occupation: {item.occupation}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default CardListView;
  