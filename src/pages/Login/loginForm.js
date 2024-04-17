import React, { useState } from 'react';
import Logo from "../../assets/logo.png";
import styles from './login.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 


function Login() {
  const [CNPJ, setCNPJ] = useState('');
  const [Senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false); 
  const [senhaContemEspacos, setSenhaContemEspacos] = useState(false); 

  const handleLogin = () => {
    
    if (CNPJ === "" || Senha === "") {
      alert("Por favor, preencha todos os campos.");
      return false; 
    }

    
    if (senhaContemEspacos) {
      alert("A senha não pode conter espaços em branco.");
      return false; 
    }

    // Se tudo estiver preenchido corretamente, permite o envio do formulário
    console.log('CNPJ:', CNPJ);
    console.log('Senha:', Senha);
    return true;
  };

  const toggleMostrarSenha = () => {
    setMostrarSenha(!mostrarSenha); // Inverte o estado de mostrarSenha
  };

  const formatarCNPJ = (cnpj) => {
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
    
    let novoCNPJ = e.target.value;

    
    novoCNPJ = formatarCNPJ(novoCNPJ);

    
    setCNPJ(novoCNPJ);
  };

  const handleChangeSenha = (e) => {
    
    let novaSenha = e.target.value;

   
    if (novaSenha.includes(' ')) {
      setSenhaContemEspacos(true);
    } else {
      setSenhaContemEspacos(false);
    }

    
    setSenha(novaSenha);
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
                  type={mostrarSenha ? "text" : "password"} // Alterna entre exibir e ocultar a senha
                  value={Senha}
                  onChange={handleChangeSenha} // Utiliza a função para remover espaços ao alterar a senha
                />
                <FontAwesomeIcon
                  icon={mostrarSenha ? faEyeSlash : true} // Alterna entre os ícones de olho aberto e fechado
                  onClick={toggleMostrarSenha} // Chama a função para alternar a visibilidade da senha
                  className={styles.eyeIcon}
                />
              </div>
              {senhaContemEspacos && (
                <span style={{ color: 'red' }}>A senha não pode conter espaços em branco.</span>
              )}
            </div>
            <button type="button" onClick={handleLogin}>
              Login
            </button>
            <p>Não possui cadastro? <a href="/cadastro">Clique aqui</a> para se cadastrar.</p>
          </form>
        </div>
      </div>
    </div>
  );
}


export default Login;
