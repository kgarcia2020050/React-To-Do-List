/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import "../style/estilo.css";
import LogoInicio from "../Components/LogoInicio.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  localStorage.clear();
  const navigate = useNavigate();
  const [datos, setDatos] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    let newDatos = { ...datos, [name]: value };
    setDatos(newDatos);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("/api/login", datos)
      .then((res) => {
        localStorage.setItem("identidad", res.data.Inicio_exitoso._id);

        var identidad = localStorage.getItem("identidad");

        navigate("/verTareas/" + identidad);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.response.data.Error,
        });
        console.log(error);
      });
  };

  return (
    <div>
      <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src={LogoInicio}
                className="img-fluid"
                alt="Sample image"
                height={100}
                width={350}
              />
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={handleSubmit}>
                <div className="divider d-flex align-items-center my-4"></div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    onChange={handleInputChange}
                    value={datos.email}
                    name="email"
                    required
                    was-validated="true"
                    className="form-control form-control-lg"
                    placeholder="Ingresa tu email"
                  />
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                </div>

                <div className="form-outline mb-3">
                  <input
                    type="password"
                    onChange={handleInputChange}
                    value={datos.password}
                    name="password"
                    className="form-control form-control-lg"
                    placeholder="Ingresa tu clave"
                    required
                  />
                  <label className="form-label" htmlFor="password">
                    Clave
                  </label>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button type="submit" className="btn btn-primary btn-lg">
                    Entrar
                  </button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    No tienes una cuenta?{" "}
                    <Link className="nav-link" to="/registro">
                  <h4 className="link-danger" >Registrate</h4>
                </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2022. Todos los derechos reservados.
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
