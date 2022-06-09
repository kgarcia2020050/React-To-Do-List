/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import "../style/estilo.css";
import LogoInicio from "../Components/LogoInicio.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Registro = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  var navigate = useNavigate();

  function agregarUsuario() {
    var usuario = {
      nombre: nombre,
      email: email,
      password: password,
    };

    axios
      .post("/api/registro", usuario)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Exito",
          text: "Te has registrado exitosamente.",
        });
      })
      .then(navigate("/"))
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: error.response.data.Error,
        });
      });
  }

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
              <form>
                <div className="divider d-flex align-items-center my-4"></div>

                <div className="form-outline mb-4">
                  <input
                    type="text"
                    name="nombre"
                    value={nombre}
                    onChange={(n) => {
                      setNombre(n.target.value);
                    }}
                    required
                    className="form-control form-control-lg"
                    placeholder="Ingresa tu nombre"
                  />
                  <label className="form-label" htmlFor="nombre">
                    Nombre
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(n) => {
                      setEmail(n.target.value);
                    }}
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
                    name="password"
                    value={password}
                    onChange={(n) => {
                      setPassword(n.target.value);
                    }}
                    className="form-control form-control-lg"
                    placeholder="Ingresa tu clave"
                    required
                  />
                  <label className="form-label" htmlFor="password">
                    Clave
                  </label>
                </div>

                <div className="text-center text-lg-start mt-4 pt-2">
                  <button
                    onClick={agregarUsuario}
                    className="btn btn-primary btn-lg"
                  >
                    Guardar datos
                  </button>``
                  <p className="small fw-bold mt-2 pt-1 mb-0">
                    Ya tienes una cuenta?{" "}
                    <Link className="nav-link" to="/">
                      <h4 className="link-danger">Iniciar sesion</h4>
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

export default Registro;
