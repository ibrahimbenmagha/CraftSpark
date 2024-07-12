import React, { useState, useEffect } from "react";
import { Space, Table, Button, Modal, message } from "antd";
import axiosInstance from "../../../AxiosConfig";
import {setRolrIdInLocalStorage,getRole,getId} from "./../../../localStorageUtils";

// import 
import "./Artisan.css";

const { Column } = Table;
const { confirm } = Modal;

const Artisan = () => {
  const [data, setData] = useState([]);

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
            alt="Artisan"
            style={{ width: "50px", height: "50px", borderRadius: "50%" }}
          />
        ),
      }));
      setData(artisans);
    } catch (error) {
      console.error("Erreur lors de la récupération des données :", error);
    }
  };
  const tst = getId();

  const handleDelete = (id) => {
    confirm({
      title: "Êtes-vous sûr de vouloir supprimer cet artisan ?",
      content: "Cette action est irréversible.",
      okText: "Oui",
      okType: "danger",
      cancelText: "Non",
      onOk: async () => {
        try {
          await axiosInstance.delete(`deleteArtisan/${id}`);
          message.success("Artisan supprimé avec succès");
          fetchArtisans();
        } catch (error) {
          console.error("Erreur lors de la suppression de l'artisan :", error);
          message.error("Échec de la suppression de l'artisan");
        }
      },
      onCancel() {
        console.log("Suppression annulée");
        message.error("Suppression annulée");

      },
    });
  };

  return (
    <div className="123">
      <h1>Liste des Artisans</h1>
      <Table dataSource={data} rowKey="id">
        <Column title="Photo" dataIndex="artisan_photo" key="artisan_photo" align="center"render={(image) => image}/>
        <Column title="Nom" dataIndex="user_name" key="user_name" align="center" />
        <Column title="Téléphone" dataIndex="phone" key="phone" align="center" />
        <Column title="Adresse" dataIndex="address" key="address" align="center" />
        <Column title="Service" dataIndex="service_name" key="service_name" align="center" />
        <Column title="Années d'expérience" dataIndex="Annes_experiances"key="Annes_experiances" width={10}  align="center"/>
        <Column align="center" title="Action" key="action" render={(record) => (
            <Space size="middle">
              <Button type="primary"className="Modifier"style={{ fontSize: "14px", padding: "8px 40px", margin: "0" }}>
                Modifier
              </Button>

              <Button type="danger" style={{ fontSize: "14px", padding: "8px 40px", margin: "0" }} onClick={() => handleDelete(record.id)}>
                Supprimer
              </Button>

            </Space>
          )}
        />
      </Table>
    </div>
  );
};

export default Artisan;
