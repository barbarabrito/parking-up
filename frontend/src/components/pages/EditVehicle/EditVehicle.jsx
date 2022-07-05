import { useState, useEffect } from 'react';
import api from '../../../services/api';
import Sidebar from '../../Sidebar/Sidebar';
import styles from './EditVehicle.module.css';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { MdEdit } from 'react-icons/md';

function EditVehicle() {

  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [placaVeiculo, setPlacaVeiculo] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();


  useEffect(() => {

    api.get(`/veiculos/${id}`)
      .then((response) => {
          console.log(response.data);
          setMarca(response.data.veiculo.marca);
          setModelo(response.data.veiculo.modelo);
          setAno(response.data.veiculo.ano);
          setPlacaVeiculo(response.data.veiculo.placaVeiculo);
      })
      .catch(error => {
          console.error(error);
      })
  }, [])

  function updateVehicle(e, id){
      e.preventDefault();

      api.put(`/veiculos/${id}`, {
        marca,
        modelo,
        ano,
        placaVeiculo
      })
      .then(response => {
          console.log(response.data);
          navigate('/gerenciar');
      })
      .catch(error => {
          console.log('Algo deu errado', error)
      })
  }

  return(
    <div className="wrapper-container">
        <Sidebar />
          <main className="main">
            <div className={styles.editar_veiculos_title_container}>
                <br />
                  <h2>&nbsp;<MdEdit style={{ fontSize: "20px" }} /> Editar veículo</h2>
              </div>
              <br />
                <div className={styles.form_container_edit}>
                    <form>

                        <input type="text"
                            id="marca"
                            placeholder="Marca"
                            value={marca}
                            onChange={(e) => setMarca(e.target.value)}
                        />
                        <input type="text"
                            id="modelo"
                            placeholder="Modelo"
                            value={modelo}
                            onChange={(e) => setModelo(e.target.value)}
                        />
                        <input type="text"
                            id="ano"
                            placeholder="Ano"
                            value={ano}
                            onChange={(e) => setAno(e.target.value)}
                        />
                        <input type="text"
                            id="placaVeiculo"
                            placeholder="Placa do veículo"
                            value={placaVeiculo}
                            onChange={(e) => setPlacaVeiculo(e.target.value)}
                        />

                        <span className={styles.container_btn_edit}>
                            <Link to='/gerenciar'>Cancelar</Link>
                            <button onClick={(e) => updateVehicle(e, id)}>Atualizar veículo</button>
                        </span>
                    </form>
                </div>
          </main>
    </div>
  )
}
export default EditVehicle;