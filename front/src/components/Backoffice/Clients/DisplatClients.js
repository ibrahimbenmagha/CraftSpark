import React, { useState, useEffect } from "react";
import { Space, Table, Button, Modal, message } from "antd";
import axiosInstance from "../../../AxiosConfig";
import "./Clients.css";

const { Column } = Table;
const { confirm } = Modal;

const Clients = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axiosInstance.get("getAllClientsInfos");
      const clients = response.data.clients.map((client) => ({
        ...client,
        photo: (
          <img
            src={`data:image/jpeg;base64,${client.photo}`}
            alt="Client"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        ),
      }));
      setData(clients);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  };

  const handleDelete = (id) => {
    confirm({
      title: "Êtes-vous sûr de vouloir supprimer ce client ?",
      content: "Cette action est irréversible.",
      okText: "Oui",
      okType: "danger",
      cancelText: "Non",
      onOk: async () => {
        try {
          await axiosInstance.delete(`deleteClient/${id}`);
          message.success("Client supprimé avec succès");
          fetchClients();
        } catch (error) {
          console.error("Erreur lors de la suppression du client :", error);
          message.error("Échec de la suppression du client");
        }
      },
      onCancel() {
        console.log("Suppression annulée");
        message.error("Suppression annulée");
      },
    });
  };
  
  return (
    <div>
      <h1>Liste des Clients</h1>
      <Table dataSource={data} rowKey="id">
        
        <Column title="Photo" dataIndex="photo" key="photo" align="center" />
        <Column title="Nom" dataIndex="name" key="name" align="center" />
        <Column title="Téléphone" dataIndex="phone" key="phone" align="center" />
        <Column title="Adresse" dataIndex="address" key="address" align="center" />
        <Column
          title="Actions"
          key="action"
          align="center"
          render={(record) => (
            <Space size="middle">
              <Button type="primary"className="Modifier" style={{ fontSize: "14px", padding: "8px 40px", margin: "0" }}>
                Modifier
              </Button>

              <Button type="danger" style={{ fontSize: "14px", padding: "8px 40px", margin: "0" }} >
                Supprimer
              </Button>

            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default Clients;
