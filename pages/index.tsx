import styles from '@/pages/index.module.css'
import {FieldValues, useForm} from "react-hook-form";
import {intToRoman} from "../utils/functions";
import {useState} from "react";

export default function Home() {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const [romanNumeral, setRomanNumeral] = useState('')
  const handleConvertPressed = (data: FieldValues) => {
      setRomanNumeral(intToRoman(data.number));
  }

  return (
    <div className={styles.container}>
      <form>
          <div>
              <header>Number to Roman Numeral</header>
              <input
                  {...register("number", {
                      valueAsNumber: true,
                      min:{value:1, message:'Please write a Number between 1 to 1000'},
                      max:{value:1000, message:'Please write a Number between 1 to 1000'},
                  })}
                  placeholder="Type a number"
                  type="number"
                  style={{width:300, minHeight:30}}
              />
              {errors.number?.message ? <text>{errors.number.message as string}</text> :''}
              <button onClick={handleSubmit(handleConvertPressed)} style={{marginLeft:50, marginRight: 50}}>
                  Convert
              </button>
              <label>{romanNumeral}</label>
          </div>
      </form>
    </div>
  )
}
