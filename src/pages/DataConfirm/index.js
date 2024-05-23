import styles from "./dataConfirm.module.css";
import React, { useCallback, useState } from "react";
import { useForm } from 'react-hook-form';

import CnpjInput from "../../components/inputs/cnpj-input/cnpjInput.js" 

import MainHeader from "../../components/MainHeader/index.js";
import { useNavigate } from "react-router-dom";

export default function DataConfirmPage(){
    const [cnpj, setCNPJ] = useState("");
    const { handleSubmit, control, formState: { errors } } = useForm();
    const navigate = useNavigate();
    
    const buttonState = cnpj.trim() === "";

    const onSubmit = useCallback(async (data) => {
        try {
            const response = await fetch(
                'https://apigateway.conectagov.estaleiro.serpro.gov.br/api-cnpj-basica/v2/basica/',
            {
                method: 'GET',
                headers:{

                }
            })
            const responseData = await response.json();
        } catch (error) {
            
        }
    })

    return (
        <div>
            <MainHeader>
                <div className={styles.formContainer}>
                    <form  className={styles.formItens} onSubmit={handleSubmit(onSubmit)}>
                        <h3>Confirmar dados para solicitar proposta:</h3>
                        <br></br>
                        <p>CNPJ:</p>
                        <div className={styles.CnpjInput}>
                            <CnpjInput 
                                value={cnpj} 
                                onChange={setCNPJ}
                                control={control}
                                errors={errors}
                            />
                        </div>
                        <button 
                            className={styles.SearchButton}
                            type="submit"
                            disabled={buttonState}
                            // onClick={teste}
                        >
                            Buscar
                        </button>
                    </form>
                </div>
            </MainHeader>
        </div>
    );
}