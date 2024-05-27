import styles from "./cnpjInput.module.css";
import React, { useCallback, useState } from "react";
import { useForm, Controller } from 'react-hook-form';


export default function CnpjInput({value, onChange, errors, name}){
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
    // const handleChangeCNPJ = (e) => {
    //     let newCNPJ = e.target.value;
    
    //     newCNPJ = formatCNPJ(newCNPJ);
    
    //     onChange(newCNPJ);
    // };

    return (
        <div className={styles.formContainer}>
            <label>
                <Controller
                    control={control}
                    name="CNPJ"
                    rules={{
                        required: "Campo obrigatório",
                        pattern: {
                            value: /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
                            message: "CNPJ inválido",
                        },
                    }}
                    render={({ field }) => (
                    <div>
                        <input
                        {...field}
                        type="text"
                        value={value}
                        onChange={onChange} 
                        maxLength={14} 
                        />
                        {errors[name] && <p className={styles.error}>{errors[name].message}</p>}
                    </div>
                    )}
                />
            </label>
        </div>
    );
}