import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './CreateArtisan.css'; // Assurez-vous de créer le fichier CSS correspondant pour le style
import axiosInstance from '../../AxiosConfig'; // Assurez-vous d'importer correctement votre instance Axios
import { useNavigate } from 'react-router-dom';
import logo from '../../Photos/Logo1.png';

const CreateArtisan = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  const password = watch('password');

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axiosInstance.get('getAllServices');
        // Vérifiez ici la structure de la réponse et assurez-vous qu'elle est correcte
        if (Array.isArray(response.data)) {
          setServices(response.data);
        } else {
          console.error('La réponse de getAllServices n\'est pas un tableau:', response.data);
        }
      } catch (error) {
        console.error('Erreur lors de la récupération des services :', error);
      }
    };

    fetchServices();
  }, []);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post('create_artisan', data);
      setLoading(false);
      setSuccess(true);
      console.log('Compte créé avec succès :', response.data);
      setMessage('Compte créé avec succès !');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setLoading(false);
      setSuccess(false);
      setMessage('Erreur lors de la création du compte. Veuillez réessayer.');
    }
  };

  return (
    <div className="create-artisan-container">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo"/>
      </div>
      <h1>CRÉER UN COMPTE ARTISAN</h1>
      <div className="create-account-container">
        {loading ? (
          <div className="loader">Chargement...</div>
        ) : (
          success ? (
            <p className="message success">{message}</p>
          ) : (
            <>
              {message && <p className={`message ${success ? 'success' : 'error'}`}>{message}</p>}
              <form onSubmit={handleSubmit(onSubmit)} className="create-account-form">
                <h2 className='form-title'>Compte Artisan</h2>

                <div className="form-group">
                  <label>Nom</label>
                  <input type="text" {...register('name', { required: true })} />
                  {errors.name && <span className='error'>Ce champ est requis</span>}
                </div>

                <div className="form-group">
                  <label>Date de naissance</label>
                  <input 
                    type="date" 
                    {...register('date_naissance', { 
                      required: true,
                      validate: value => new Date(value) < new Date() || 'La date doit être antérieure à aujourd\'hui'
                    })} 
                  />
                  {errors.date_naissance && <span className='error'>{errors.date_naissance.message}</span>}
                </div>

                <div className="form-group">
                  <label>Téléphone</label>
                  <input 
                    type="tel" 
                    {...register('phone', { 
                      required: true,
                      pattern: {
                        value: /^[0-9]{10}$/, // Ajustez cette regex pour correspondre au format souhaité pour le numéro de téléphone
                        message: 'Format de numéro de téléphone invalide'
                      }
                    })} 
                  />
                  {errors.phone && <span className='error'>{errors.phone.message}</span>}
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input 
                    type="email" 
                    {...register('email', { 
                      required: true,
                      pattern: {
                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                        message: 'Format d\'email invalide'
                      }
                    })} 
                  />
                  {errors.email && <span className='error'>{errors.email.message}</span>}
                </div>

                <div className="form-group">
                  <label>Adresse complète</label>
                  <input type="text" {...register('address', { required: true })} />
                  {errors.address && <span className='error'>Ce champ est requis</span>}
                </div>

                <div className="form-group">
                  <label>Service</label>
                  <select {...register('service', { required: true })}>
                    <option value="">Sélectionnez un service</option>
                    {services.map(service => (
                      <option key={service.id} value={service.id}>{service.name}</option>
                    ))}
                  </select>
                  {errors.service && <span className='error'>Ce champ est requis</span>}
                </div>

                <div className="form-group">
                  <label>Années d'expérience</label>
                  <input type="number" {...register('Annes_experiances', { required: true, min: 0 })} />
                  {errors.Annes_experiances && <span className='error'>Ce champ est requis et doit être un nombre non négatif</span>}
                </div>

                <div className="form-group">
                  <label>Mot de passe</label>
                  <input 
                    type="password" 
                    {...register('password', { 
                      required: true,
                      minLength: {
                        value: 8,
                        message: 'Le mot de passe doit comporter au moins 8 caractères'
                      },
                      pattern: {
                        value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                        message: 'Le mot de passe doit contenir une lettre, un chiffre, l\'un de ces symboles [@$!%*?&], une majuscule et une minuscule'
                      }
                    })} 
                  />
                  {errors.password && <span className='error'>{errors.password.message}</span>}
                </div>

                <div className="form-group">
                  <label>Confirmer le mot de passe</label>
                  <input 
                    type="password" 
                    {...register('confirmPassword', { 
                      required: true,
                      validate: value => value === password || 'Les mots de passe ne correspondent pas'
                    })} 
                    onPaste={(e) => e.preventDefault()}
                  />
                  {errors.confirmPassword && <span className='error'>{errors.confirmPassword.message}</span>}
                </div>

                <button type="submit">Créer votre compte</button>
              </form>
            </>
          )
        )}
      </div>
    </div>
  );
};

export default CreateArtisan;
