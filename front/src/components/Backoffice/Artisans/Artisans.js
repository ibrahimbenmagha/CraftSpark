import React, { useState, useEffect } from 'react';
import { Space, Table, Button } from 'antd';
import axiosInstance from '../../../AxiosConfig'; // Assurez-vous d'importer correctement votre instance Axios

const { Column, ColumnGroup } = Table;

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchArtisans();
  }, []);

  const fetchArtisans = async () => {
    try {
      const response = await axiosInstance.get('getAllArtisans');
      const artisans = response.data.artisans;
      setData(artisans);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };


  return (
    <div>
      <h1>Liste des Artisans</h1>
      <Table dataSource={data} rowKey="id">
        <Column title="Nom" dataIndex="user_name" key="user_name" />
        <Column title="Téléphone" dataIndex="phone" key="phone" />
        <Column title="Adresse" dataIndex="address" key="address" />
        <Column title="Service" dataIndex="service_name" key="service_name" />
        <Column title="Années d'expérience" dataIndex="Annes_experiances" key="Annes_experiances" />
        <Column
          title="Action"
          key="action"
          render={() => (
            <Space size="middle">
              <Button type="primary">Modifier</Button>
              <Button type="danger">Supprimer</Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default App;
