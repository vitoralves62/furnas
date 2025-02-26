import styles from "./singUp.module.css";
import React, { useCallback, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'; 


export default function SingUpForm(){
    const {control} = useForm();
    const navigate = useNavigate();
    const [singUpError, setSingUpError] = useState(null);
    const [ShowPassaword, setShowPassaword] = useState(false); 

    const port = "porta";
    const route = "rota";

    const onSubmit = useCallback(async (data) =>{
        try {
            const response = await fetch(`https://${route}:${port}/api/createUser`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringfy(data),
            });
            //const responseData = await response.json();

            if(response.ok){
                navigate('/Login')
            }else{
                
            }

        } catch (error) {
            console.error('Erro no cadastro: ', error);
        }
    }, [navigate]);

    const toggleShowPassaword = () => {
        setShowPassaword(!ShowPassaword); // Inverte o estado de ShowPassaword
      };

    return(
        <div>
            <h1>Registre-se</h1>
            {/* <form className={styles.form} onSubmit={handleSubmit(onSubmit)}> */}
            <form className={styles.form} >
                <div>
                    <label>
                        <Controller
                            render={({field}) =>(
                                <input
                                    {...field}
                                    type="CNPJ"
                                    placeholder="CNPJ"
                                    className={styles.name}
                                />
                            )}
                            control={control}
                            name="CNPJ"
                        />
                    </label>
                    <br/>
                    <label>
                        <Controller
                            render={({field}) =>(
                                <input
                                    {...field}
                                    type="email"
                                    placeholder="Email"
                                    className={styles.name}
                                />
                            )}
                            control={control}
                            name="email"
                        />
                    </label>
                    <br/>
                    <label>
                        <Controller
                            render={({field}) =>(
                                <input
                                    {...field}
                                    type="password"
                                    placeholder="Senha"
                                    className={styles.name}
                                />
                            )}
                            control={control}
                            name="password"
                        />
                        <FontAwesomeIcon
                            icon={ShowPassaword ? faEyeSlash : true} // Alterna entre os ícones de olho aberto e fechado
                            onClick={toggleShowPassaword} // Chama a função para alternar a visibilidade da senha
                            className={styles.eyeIcon}
                        />
                    </label>
                    <br/>
                    <label>
                        <Controller
                            render={({field}) =>(
                                <input
                                    {...field}
                                    type="password-confirm"
                                    placeholder="Confirmar Senha"
                                    className={styles.name}
                                />
                            )}
                            control={control}
                            name="password-confirm"
                        />
                    </label>
                    <br/>
                    <button
                        type="submit"
                        disabled={false}
                    >
                        Cadastrar
                    </button>
                </div>
                <div>
                    <a href="/login">Já possuí uma conta? Fazer login</a>
                </div>
            </form>
        </div>
    );
}