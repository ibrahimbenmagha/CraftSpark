import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../AxiosConfig";
import logo from "../../Photos/Logo1.png";
import "./CreateClient.css";

const CreateClient = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const password = watch("password");

  const onSubmit = async (data) => {
    setLoading(true);

    // Create FormData object
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("date_naissance", data.date_naissance);
    formData.append("phone", data.phone);
    formData.append("address", data.address);
    formData.append("image", data.image[0]);

    try {
      const response = await axiosInstance.post("create_client", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setLoading(false);
      setSuccess(true);
      console.log("Account created successfully:", response.data);
      setMessage("Account created successfully!");
      setTimeout(() => {
        navigate("/Login");
      }, 2000);
    } catch (error) {
      setLoading(false);
      setSuccess(false);
      const errorMsg =
        error.response?.data?.message ||
        "Error creating account. Please try again.";
      setMessage(errorMsg);
    }
  };

  return (
    <div className="create-client-container">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <h1>CRÉER UN COMPTE</h1>
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
            >
              <h2 className="form-title">Compte Client</h2>

              <div className="form-group">
                <label>Nom</label>
                <input type="text" {...register("name", { required: true })} />
                {errors.name && (
                  <span className="error">This field is required</span>
                )}
              </div>

              <div className="form-group">
                <label>Date de naissance</label>
                <input
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
                <label>Téléphone</label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: true,
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Invalid phone number format",
                    },
                  })}
                />
                {errors.phone && (
                  <span className="error">{errors.phone.message}</span>
                )}
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
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
                {/* <input className="input" type="text" {...register('address', { required: true })} /> */}
                <select
                  className="select"
                  {...register("address", { required: true })}
                >
                  <option value={"Casablanca"} selected disabled>
                    Casablanca
                  </option>
                </select>
                {errors.address && (
                  <span className="error">This field is required</span>
                )}
              </div>
              <div className="form-group">
                <label className="label">Upload Image (jpg or png)</label>
                <input
                  className="input"
                  type="file"
                  {...register("image", {
                    required: true,
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
              <div className="form-group">
                <label>Mot de passe</label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message:
                        "Password must contain a letter, a number, one of (and only) these symbols [@$!%*?&] , an uppercase and a lowercase letter",
                    },
                  })}
                />
                {errors.password && (
                  <span className="error">{errors.password.message}</span>
                )}
              </div>

              <div className="form-group">
                <label>Confirmer le mot de passe</label>
                <input
                  type="password"
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) =>
                      value === password || "Passwords do not match",
                  })}
                  onPaste={(e) => e.preventDefault()}
                />
                {errors.confirmPassword && (
                  <span className="error">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>

              <button type="submit">Créer votre compte</button>
              <div className="signup-link">
                <p>
                  Vous êtes deja inscrit?{" "}
                  <Link to="/Login">Connecter Vous</Link> <br />
                </p>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default CreateClient;
