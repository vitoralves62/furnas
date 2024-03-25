import styles from "./singUp.module.css";
import { useForm, Controller } from 'react-hook-form';

export default function(){
    const { control} = useForm();

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
                                    placeholder="Razão Social"
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
                </div>
            </form>
        </div>
    );
}