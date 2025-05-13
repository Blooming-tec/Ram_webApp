import React, { useState, useEffect, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRamById, createRam, updateRam, getRamTypes } from '../services/api';

function RamDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ram, setRam] = useState({
    brand: '',
    model: '',
    type: { id: '' },
    clockSpeed: 0,
    size: 0,
    casLatency: 0,
    ecc: false,
    price: 0
  });
  const [ramTypes, setRamTypes] = useState([]);
  const isNew = id === 'new';
  const [loading, setLoading] = useState(!isNew);

  
  const fetchRam = useCallback(async () => {
    try {
      const response = await getRamById(id);
      console.log("API response:", response.data); 
      setRam(response.data); 
      setLoading(false);
    } catch (error) {
      console.error('Error fetching RAM:', error);
      setLoading(false);
    }
  }, [id]);

  const fetchRamTypes = useCallback(async () => {
    try {
      const response = await getRamTypes();
      setRamTypes(response.data);
    } catch (error) {
      console.error('Error fetching RAM types:', error);
    }
  }, []);

  useEffect(() => {
    fetchRamTypes();
    if (!isNew) {
      fetchRam();
    }
  }, [fetchRam, fetchRamTypes, isNew]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRam(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'number' ? (value=== "" ? "": Number(value)) : value
    }));
  };


  const handleTypeChange = (e) => {
  const typeId = parseInt(e.target.value, 10); // convert to number
  const selectedType = ramTypes.find(type => type.id === typeId);
  setRam(prev => ({
    ...prev,
    type: selectedType || { id: typeId }
  }));
};


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isNew) {
        await createRam(ram);
      } else {
        await updateRam(id, ram);
      }
      navigate('/');
    } catch (error) {
      console.error('Error saving RAM:', error);
    }
  };

  if (loading) {
  return <div>Loading RAM details...</div>;
  }
  return (
    <div>
      <h2>{isNew ? 'Add New RAM' : 'Edit RAM'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Brand:</label>
          <input
            type="text"
            name="brand"
            value={ram.brand}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Model:</label>
          <input
            type="text"
            name="model"
            value={ram.model}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Type:</label>
          <select
            name="type"
            //value={ram.type.id}
            value={ram.type?.id || ''}
            onChange={handleTypeChange}
            className="form-control"
            required
          >
            <option value="">Select a type</option>
            {ramTypes.map(type => (
             // <option key={type.id} value={type.id}>{type.name}</option>
             <option key={type.id} value={type.id.toString()}>{type.name}</option>

            ))}
          </select>
        </div>
        
        <div className="form-group">
          <label>Clock Speed (MHz):</label>
          <input
            type="number"
            name="clockSpeed"
            min="800"
            value={ram.clockSpeed}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Size (GB):</label>
          <input
            type="number"
            name="size"
            min="1"
            value={ram.size}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        
        <div className="form-group">
          <label>CAS Latency:</label>
          <input
            type="number"
            name="casLatency"
            min="10"
            value={ram.casLatency}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="ecc"
              checked={ram.ecc}
              onChange={handleChange}
            />
            ECC Status
          </label>
        </div>
        
        <div className="form-group">
          <label>Price (€):</label>
          <input
            type="number"
            name="price"
            min="0"
            step="0.01"
            value={ram.price}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Save</button>
        <button type="button" onClick={() => navigate('/')} className="btn btn-secondary">Cancel</button>
      </form>
    </div>
  );
}

export default RamDetail;
