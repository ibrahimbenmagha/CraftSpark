import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import "./AllArtisansPage.css";

import axiosInstance from "../../AxiosConfig";
import logo from "./../../Photos/Logo1.png";
import ServiceCard from "./ServiceCard";

const AllArtisansPage = () => {
  {
    /*
  const [services, setServices] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    // Fetch filters
    axios.get('https://api.example.com/filters') // Replace with your API endpoint
      .then(response => setFilters(response.data))
      .catch(error => console.error('Error fetching filters:', error));
    
    // Fetch services
    axios.get('https://api.example.com/services') // Replace with your API endpoint
      .then(response => setServices(response.data))
      .catch(error => console.error('Error fetching services:', error));
  }, []);
*/
  }
  const [data, setData] = useState([]);
  const [servicesList, setServicesList] = useState([]);
  const [filters, setFilters] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchArtisans();
  }, []);

  const fetchArtisans = async () => {
    try {
      const response = await axiosInstance.get("getArtisansWithAllInfos");
      const artisans = response.data.artisans.map((artisan) => ({
        ...artisan,
        artisan_photo: (
          <img
            src={`data:image/jpeg;base64,${artisan.artisan_photo}`}
            alt={artisan.user_name}
            className="service-image"
          />
        ),
      }));
      setData(artisans);
      setLoading(false);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axiosInstance.get("getAllServices");
        setServicesList(response.data.services);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  const handleFilterChange = (serviceId) => {
    setSelectedFilters((prevSelectedFilters) =>
      prevSelectedFilters.includes(serviceId)
        ? prevSelectedFilters.filter((id) => id !== serviceId)
        : [...prevSelectedFilters, serviceId]
    );
  };

  const handleResetFilters = () => {
    setSelectedFilters([]);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredServices = data.filter((artisan) => {
    const matchesFilters = selectedFilters.length
      ? selectedFilters.includes(artisan.service_id)
      : true;
    const matchesSearchQuery = artisan.user_name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesFilters && matchesSearchQuery;
  });

  if (loading) {
    return <div className="loader">Loading...</div>; // Show loading spinner
  }

  if (error) {
    return <div>Error loading services.</div>; // Show error message
  }

  return (
    <div className="services-page">
      <header>
        <div className="logo">
          <img src={logo} alt="Logo" className="logo"/>
        </div>

        <div className="search-profile">
          <span className="icon">
            <FontAwesomeIcon icon={faSearch} />
          </span>
          <input
            type="text"
            placeholder="Rechercher"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <span className="icon">
            <FontAwesomeIcon icon={faUser} />
          </span>
        </div>
      </header>

      <div className="content">
        <aside>
          <h3>Filtres</h3>
          {servicesList.map((service) => (
            <div key={service.id} className="filter-item">
              <input
                type="checkbox"
                id={service.id}
                checked={selectedFilters.includes(service.id)}
                onChange={() => handleFilterChange(service.id)}
              />
              <label htmlFor={service.id}>{service.name}</label>
            </div>
          ))}
          <button className="reset-filters" onClick={handleResetFilters}>
            Reset
          </button>
        </aside>

        <main>
          <div className="services-list">
            {filteredServices.map((artisan) => (
              <ServiceCard key={artisan.id} artisan={artisan} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AllArtisansPage;
