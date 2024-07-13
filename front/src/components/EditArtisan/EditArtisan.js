import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../AxiosConfig";
import logo from "../../Photos/Logo1.png";
import { getId } from "../../localStorageUtils.js";
import "./EditArtisan.css";

const EditArtisan = () => {
  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [servicesList, setServicesList] = useState([]);
  const navigate = useNavigate();
  const idlocal = getId();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const servicesResponse = await axiosInstance.get("getAllServices");
        setServicesList(servicesResponse.data.services);

        const artisanResponse = await axiosInstance.get(`getArtisansWithAllInfosById/${idlocal}`);
        const artisanData = artisanResponse.data.artisans[0];

        // Set values for the form fields
        setValue("name", artisanData.user_name);
        setValue("date_naissance", artisanData.user_date_naissance);
        setValue("phone", artisanData.phone);
        setValue("email", artisanData.user_email);
        setValue("address", artisanData.address);
        setValue("service", artisanData.service_id);
        setValue("Annes_experiances", artisanData.Annes_experiances);
        setValue("description", artisanData.description);

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [idlocal, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const formData = new FormData();
      for (const key in data) {
        formData.append(key, data[key]);
      }
      if (data.image[0]) {
        formData.append("image", data.image[0]);
      }

      const response = await axiosInstance.post(`update_artisan/${idlocal}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
      setSuccess(true);
      console.log("Account updated successfully:", response.data);
      setMessage("Account updated successfully!");
      setTimeout(() => {
        navigate("/Login");
      }, 2000);
    } catch (error) {
      setLoading(false);
      setSuccess(false);
      setMessage("Error updating account. Please try again.");
      console.error("Error updating account:", error);
    }
  };

  return (
    <div className="create-artisan-container">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1>ÉDITER VOTRE COMPTE</h1>
      <div className="create-account-container">
        {loading ? (
          <div className="loader">Loading...</div>
        ) : success ? (
          <p className="message success">{message}</p>
        ) : (
          <>
            {message && (
              <p className={`message ${success ? "success" : "error"}`}>
                {message}
              </p>
            )}
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="create-account-form"
              encType="multipart/form-data"
            >
              <h2 className="form-title">Compte Artisan</h2>

              <div className="form-group">
                <label className="label">Nom</label>
                <input
                  className="input"
                  type="text"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="error">This field is required</span>
                )}
              </div>

              <div className="form-group">
                <label className="label">Date de naissance</label>
                <input
                  className="input"
                  type="date"
                  {...register("date_naissance", {
                    required: true,
                    validate: (value) =>
                      new Date(value) < new Date() ||
                      "Date must be before today",
                  })}
                />
                {errors.date_naissance && (
                  <span className="error">{errors.date_naissance.message}</span>
                )}
              </div>

              <div className="form-group">
                <label className="label">Téléphone</label>
                <input
                  className="input"
                  type="tel"
                  {...register("phone", {
                    required: true,
                    pattern: {
                      value: /^[0-9]{10}$/, // Adjust this regex to match the desired phone format
                      message: "Invalid phone number format",
                    },
                  })}
                />
                {errors.phone && (
                  <span className="error">{errors.phone.message}</span>
                )}
              </div>

              <div className="form-group">
                <label className="label">Email</label>
                <input disabled
                  className="input"
                  type="email"
                  {...register("email", {
                    required: true,
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <span className="error">{errors.email.message}</span>
                )}
              </div>

              <div className="form-group">
                <label className="label">Ville</label>
                <select
                  className="select"
                  {...register("address", { required: true })}
                >
                  <option value={"Casablanca"} disabled>
                    Casablanca
                  </option>
                </select>
                {errors.address && (
                  <span className="error">This field is required</span>
                )}
              </div>

              <div className="form-group">
                <label className="label">Services</label>
                <select
                  className="select"
                  {...register("service", { required: true })}
                >
                  <option value="">Sélectionnez un service</option>
                  {servicesList.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.name}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <span className="error">This field is required</span>
                )}
              </div>

              <div className="form-group">
                <label className="label">Années d'expérience</label>
                <input
                  className="input"
                  type="number"
                  {...register("Annes_experiances", {
                    required: true,
                    min: {
                      value: 0,
                      message: "Years of experience must be a positive number",
                    },
                  })}
                />
                {errors.Annes_experiances && (
                  <span className="error">
                    {errors.Annes_experiances.message}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label className="label">Description</label>
                <textarea
                  className="textarea"
                  {...register("description", {
                    required: true,
                    maxLength: {
                      value: 500,
                      message: "Description must be less than 500 characters",
                    },
                  })}
                />
                {errors.description && (
                  <span className="error">{errors.description.message}</span>
                )}
              </div>

              <div className="form-group">
                <label className="label">Upload Image (jpg or png)</label>
                <input
                  className="input"
                  type="file"
                  {...register("image", {
                    required: false,
                    validate: {
                      acceptedFormats: (files) =>
                        ["image/jpeg", "image/png"].includes(files[0]?.type) ||
                        "Only jpg and png files are accepted",
                    },
                  })}
                />
                {errors.image && (
                  <span className="error">{errors.image.message}</span>
                )}
              </div>

              <button type="submit">Mettre à jour votre compte</button>
              <div className="signup-link">
                <p>
                  <Link to="/Client/AllArtisansPage">Accueil</Link> <br />
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default EditArtisan;
