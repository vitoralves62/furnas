import styles from "./dataConfirm.module.css";
import React, { useCallback, useState } from "react";

import CnpjInput from "../../components/inputs/cnpj-input/cnpjInput.js" 

import MainHeader from "../../components/MainHeader/index.js";

export default function DataConfirmPage(){

    return (
        <div>
            <MainHeader>
                <div className={styles.formContainer}>
                    <form  className={styles.formItens}>
                        <h4>Confirmar dados para solicitar proposta:</h4>
                        <p>CNPJ:</p>
                        <div className={styles.CnpjInput}>
                            <CnpjInput/>
                        </div>
                        <button className={styles.SearchButton}>
                            Buscar
                        </button>
                    </form>
                </div>
            </MainHeader>
        </div>
    );
}