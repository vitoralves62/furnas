import styles from "./dataConfirm.module.css";
import React, { useCallback, useState } from "react";
import Logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from 'react-hook-form';

import Background from "../../components/Background/bg.js";

export default function DataConfirmPage(){
    const [CNPJ, setCNPJ] = useState("");
    const {control} = useForm();

    const formatCNPJ = (cnpj) => {
        // Remove qualquer caractere não numérico
        cnpj = cnpj.replace(/[^\d]/g, "");
    
        // Limita a 14 caracteres
        if (cnpj.length > 14) {
          cnpj = cnpj.slice(0, 14);
        }
    
        // Adiciona pontos, barras e traços conforme o formato do CNPJ
        return cnpj.replace(
          /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
          "$1.$2.$3/$4-$5"
        );
      };
    const handleChangeCNPJ = (e) => {
        let newCNPJ = e.target.value;
    
        newCNPJ = formatCNPJ(newCNPJ);
    
        setCNPJ(newCNPJ);
    };

    return (
        <div>
            <Background />
            <div className={styles.modalContainer}>
                <div>
                    
                    <div className={styles.formContainer}>
                        <form>
                            <div>
                                <div>
                                    <p>CNPJ:</p>
                                </div>
                                <label>
                                    <Controller
                                        render={({ field }) => (
                                        <input
                                            {...field}
                                            type="text"
                                            value={CNPJ}
                                            onChange={handleChangeCNPJ} // Utiliza a função de formatação ao alterar o CNPJ
                                            maxLength={14} // Define o máximo de caracteres permitidos
                                        />
                                        )}
                                        control={control}
                                        name="CNPJ"
                                        rules={{
                                        required: "Campo obrigatório",
                                        pattern: {
                                            value: /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
                                            message: "CNPJ inválido",
                                        },
                                        }}
                                    />
                                </label>
                                <button>
                                    Buscar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}