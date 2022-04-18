import { useEffect, useState } from "react";
import styles from "./Input.module.scss";

const Input = ({ label, placeholder, type, value, onChange }) => {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.label}>{label}</label>
            <input className={styles.input} type={type} placeholder={placeholder} value={value ? value: ""} onChange={onChange} />
        </div>
    )
}

export default Input;