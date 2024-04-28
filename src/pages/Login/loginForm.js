import React, { useCallback, useState } from 'react';
import Logo from "../../assets/logo.png";
import styles from './login.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 
import { useNavigate } from 'react-router-dom';

function Login() {
  const [CNPJ, setCNPJ] = useState('');
  const [password, setpassword] = useState('');
  const [ShowPassaword, setShowPassaword] = useState(false); 
  const [passwordHaveSpaces, setpasswordHaveSpaces] = useState(false); 
  const navigate = useNavigate();

  const port = "porta";
  const route = "rota";

  const onSubmit = useCallback(async (data) => {
    
    if (CNPJ === "" || password === "") {
      alert("Por favor, preencha todos os campos.");
      return false; 
    }
    
    if (passwordHaveSpaces) {
      alert("A password não pode conter espaços em branco.");
      return false; 
    }
    try {
      const response = await fetch(`https://${route}:${port}/api/createUser`, {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringfy(data),
      });
      const responseData = await response.json();

      if(response.ok){
          navigate('/Home')
      }else{
          
      }

    } catch (error) {
      
    }
    return true;
  }, [navigate]);

  const toggleShowPassaword = () => {
    setShowPassaword(!ShowPassaword); // Inverte o estado de ShowPassaword
  };

  const formatCNPJ = (cnpj) => {
    // Remove qualquer caractere não numérico
    cnpj = cnpj.replace(/[^\d]/g, '');

    // Limita a 14 caracteres
    if (cnpj.length > 14) {
      cnpj = cnpj.slice(0, 14);
    }

    // Adiciona pontos, barras e traços conforme o formato do CNPJ
    return cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5');
  };

  const handleChangeCNPJ = (e) => {
    
    let newCNPJ = e.target.value;

    
    newCNPJ = formatCNPJ(newCNPJ);

    
    setCNPJ(newCNPJ);
  };

  const handleChangepassword = (e) => {
    
    let newpassword = e.target.value;

   
    if (newpassword.includes(' ')) {
      setpasswordHaveSpaces(true);
    } else {
      setpasswordHaveSpaces(false);
    }

    
    setpassword(newpassword);
  };

  return (
    <div className={styles.container}> {/* Aplica a classe container */}
      <img src={Logo} alt="Logo Furnas"  className={styles.photo} />
      <div className={styles.loginContainer}> {/* Aplica a classe login-container */}
        <div className={styles.loginForm}> {/* Aplica a classe login-form */}
          {/*<h2>Login</h2>*/}
          <form>
            <div>
              <label>CNPJ:</label>
              <input
                type="text"
                value={CNPJ}
                onChange={handleChangeCNPJ} // Utiliza a função de formatação ao alterar o CNPJ
                maxLength={14} // Define o máximo de caracteres permitidos
              />
            </div>
            <div>
              <label>Senha:</label>
              <div className={styles.passwordInputContainer}>
                <input
                  type={ShowPassaword ? "text" : "password"} // Alterna entre exibir e ocultar a password
                  value={password}
                  onChange={handleChangepassword} // Utiliza a função para remover espaços ao alterar a password
                />
                <FontAwesomeIcon
                  icon={ShowPassaword ? faEyeSlash : true} // Alterna entre os ícones de olho aberto e fechado
                  onClick={toggleShowPassaword} // Chama a função para alternar a visibilidade da password
                  className={styles.eyeIcon}
                />
              </div>
              {passwordHaveSpaces && (
                <span style={{ color: 'red' }}>A password não pode conter espaços em branco.</span>
              )}
            </div>
            <button type="button" onClick={onSubmit}>
              Entrar
            </button>
            <p>Não possui cadastro? <a href="/cadastro">Clique aqui</a> para se cadastrar.</p>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Login;
