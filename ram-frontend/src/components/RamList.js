import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRams } from '../services/api';

function RamList() {
  const [rams, setRams] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRams();
        setRams(response.data);
      } catch (error) {
        console.error("API Error:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleRowClick = (ramId) => {
    navigate(`/rams/${ramId}`);
    
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <style>{`
        .ram-row:hover {
          background-color: #f5f5f5;
        }
        .ram-row:active {
          background-color: #e9e9e9;
        }
      `}</style>
      <h2>RAM List</h2>
      
      
      {rams.length === 0 ? (
        <div>No RAMs found</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Brand</th>
              <th>Model</th>
              <th>Type</th>
              <th>Size</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {rams.map(ram => (
              <tr 
                key={ram.id}
                onClick={() => handleRowClick(ram.id)}
                style={{ cursor: 'pointer' }}
                className="ram-row"
              >
                <td>{ram.brand}</td>
                <td>{ram.model}</td>
                <td>{ram.type?.name}</td>
                <td>{ram.size} GB</td>
                <td>{ram.price}€</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default RamList;