import React, { useState, useEffect } from 'react';
import { Space, Table, Button, Modal, message } from 'antd';
import axiosInstance from '../../../AxiosConfig'; // Assurez-vous d'importer correctement votre instance Axios

const { Column } = Table;
const { confirm } = Modal;

const Artisan = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchArtisans();
  }, []);

  const  fetchArtisans= async () => {
    try {
      const response = await axiosInstance.get('getAllArtisans');
      const artisans = response.data.artisans;
      setData(artisans);
    } catch (error) {
      console.error('Erreur lors de la récupération des données :', error);
    }
  };

  const handleDelete = (id) => {
    confirm({
      title: 'Êtes-vous sûr de vouloir supprimer cet artisan ?',
      content: 'Cette action est irréversible.',
      okText: 'Oui',
      okType: 'danger',
      cancelText: 'Non',
      onOk: async () => {
        try {
          await axiosInstance.delete(`deleteArtisan/${id}`);
          message.success('Artisan supprimé avec succès');
          fetchArtisans(); 
        } catch (error) {
          console.error('Erreur lors de la suppression de l\'artisan :', error);
          message.error('Échec de la suppression de l\'artisan');
        }
      },
      onCancel() {
        console.log('Suppression annulée');
      },
    });
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
          render={(record) => (
            <Space size="middle">
              <Button type="primary">Modifier</Button>
              <Button type="danger" onClick={() => handleDelete(record.id)}>Supprimer</Button>
            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default Artisan;
