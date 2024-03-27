import styles from "./singUp.module.css";
import React, { useCallback, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

export default function SingUpForm(){
    const { control} = useForm();
    const navigate = useNavigate();
    const [singUpError, setSingUpError] = useState(null);

    const port = "porta";
    const route = "rota";

    const onSubmit = useCallback(async (data) =>{
        try {
            const response = await fetch(`https://${route}:${port}/api/login`, {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringfy(data),
            });
            const responseData = await response.json();

            if(response.ok){
                navigate('/Login')
            }else{
                
            }

        } catch (error) {
            console.error('Erro no cadastro: ', error);
        }
    }, [navigate])

    return(
        <div>
            <h1>Registre-se</h1>
            <form >
                <div>
                    <label>
                        <Controller
                            render={({field}) =>(
                                <input
                                    {...field}
                                    type="name"
                                    placeholder="Usuário"
                                    className={styles.name}
                                />
                            )}
                            control={control}
                            name="name"
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
                                    type="email"
                                    placeholder="Confirmar email"
                                    className={styles.name}
                                />
                            )}
                            control={control}
                            name="email2"
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
                    </label>
                    <br/>
                    <label>
                        <Controller
                            render={({field}) =>(
                                <input
                                    {...field}
                                    type="password"
                                    placeholder="Confirmar Senha"
                                    className={styles.name}
                                />
                            )}
                            control={control}
                            name="password"
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