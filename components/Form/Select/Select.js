import { useState } from "react";
import { FormSelect } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import styles from "./Select.module.scss";

const Select = ({ label, options, onChange }) => {
    const [selectedOption, setSelectedOption] = useState("");

    const onValueChange = (value) => {
        console.log(value);
        setSelectedOption(value);
        if(onChange) onChange(value);
    }

    const getOptionContent = (value) => {
        let content = "";
        for(let option of options) {
            if(option.value === value) {
                content = option.content;
                break;
            }
        }
        return content;
    }

    return (
        <div className={styles.selectContainer} onChange={(ev) => onValueChange(ev.target.value)}>
            <label className={styles.defaultOption}>{label}<IoIosArrowDown /></label>
            <FormSelect className={styles.select} value={label}>
            {
                //label ? <option key="default" className={styles.defaultOption} value="">{label}</option> : null
            }
            {
                options.map((option, index) => {
                    return <option key={index} value={option.value} className={selectedOption === option.value ? styles.selected : ""}>{option.content}</option>
                })
            }
            </FormSelect>
            <input className={styles.input} placeholder="Como podemos te ajudar?" value={getOptionContent(selectedOption)} disabled></input>
        </div>
    )
}

export default Select;