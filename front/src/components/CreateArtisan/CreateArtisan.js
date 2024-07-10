import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './CreateArtisan.css'; // Ensure you create the corresponding CSS file for styling
import axiosInstance from '../../AxiosConfig';
import { useNavigate } from 'react-router-dom';
import logo from '../../Photos/Logo1.png';
import { useEffect } from 'react';

const CreateArtisan = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const password = watch('password');

  const [servicesList, setServicesList] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axiosInstance.get('getAllServices'); // Replace with your actual endpoint
        setServicesList(response.data.services); // Assuming the response structure has a 'services' array
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };
    fetchServices();
  }, []);  

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      //data.services = data.services.value;
      const response = await axiosInstance.post('create_artisan', data);
      setLoading(false);
      setSuccess(true);
      console.log('Account created successfully:', response.data);
      setMessage('Account created successfully!');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setLoading(false);
      setSuccess(false);
      setMessage('Error creating account. Please try again.');
      console.error('Error creating account:', error);
    }
  };

  return (
    <div className="create-Artisan-container">
      <div className="logo">
        <img src={logo} alt="Logo" className="logo"/>
      </div>
      <h1>CRÉER UN COMPTE</h1>
    <div className="create-account-container">
      
      {loading ? (
        <div className="loader">Loading...</div>
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
          {errors.name && <span className='error'>This field is required</span>}
          
          {/*
          <label>Prénom</label>
          <input type="text" {...register('lastName', { required: true })} />
          {errors.lastName && <span className='error'>This field is required</span>}
          */}

        </div>

        <div className="form-group">
          <label>Date de naissance</label>
          <input 
                  type="date" 
                  {...register('date_naissance', { 
                    required: true,
                    validate: value => new Date(value) < new Date() || 'Date must be before today'
                  })} 
                />
                {errors.birthDate && <span className='error'>{errors.birthDate.message}</span>}
        </div>

        <div className="form-group">
          <label>Téléphone</label>
          <input 
                  type="tel" 
                  {...register('phone', { 
                    required: true,
                    pattern: {
                      value: /^[0-9]{10}$/, // Adjust this regex to match the desired phone format
                      message: 'Invalid phone number format'
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
                      message: 'Invalid email format'
                    }
                  })} 
                />
                {errors.email && <span className='error'>{errors.email.message}</span>}
              </div>

        <div className="form-group">
          <label>Adresse complete</label>
          <input type="text" {...register('address', { required: true })} />
          {errors.address && <span className='error'>This field is required</span>}
        </div>

        {/*
        <div className="form-group">
          <label>Ville</label>
          <input type="text" {...register('city', { required: true })} />
          {errors.city && <span className='error'>This field is required</span>}
          <label>Pays</label>
          <input type="text" {...register('country', { required: true })} />
          {errors.country && <span className='error'>This field is required</span>}
        </div>
        */}
        
        <div className="form-group">
          <label>Services</label>
          <select {...register('service', { required: true })}>
            <option>Selectioner un service</option>
            {servicesList.map(service => (
              <option key={service.id} value={service.id}>{service.name}</option>
            ))}
          </select>
          {errors.services && <span className='error'>This field is required</span>}
        </div>

        <div className="form-group">
          <label>Années d'expérience</label>
          <input 
            type="number" 
            {...register('Annes_experiances', { 
              required: true,
              min: {
                value: 0,
                message: 'Years of experience must be a positive number'
              }
            })}
          />
          {errors.Annes_experiances && <span className='error'>{errors.Annes_experiances.message}</span>}
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input 
                  type="password" 
                  {...register('password', { 
                    required: true,
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters'
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                      message: 'Password must contain a letter, a number, one of (and only) these symbols [@$!%*?&] , an uppercase and a lowercase letter'
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
                    validate: value => value === password || 'Passwords do not match'
                  })} 
                  onPaste={(e) => e.preventDefault()}
                />
                {errors.confirmPassword && <span className='error'>{errors.confirmPassword.message}</span>}
              </div>
        {/*
        <div className="form-group">
          <input type="checkbox" {...register('terms', { required: true })} />
          <label>Accepter nos <a href="#">Conditions de confidentialité</a></label>
          {errors.terms &&<span className='error'>You must accept the terms</span>}
        </div>
      */}
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