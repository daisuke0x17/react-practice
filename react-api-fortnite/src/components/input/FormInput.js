import { Input, makeStyles } from "@material-ui/core";
import React, { useState } from 'react'

const useStyle = makeStyles((theme) => ({
    form: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(6),
      textAlign: "center",
    },
    input: {
      width: "420px",
      height: "40px",
    },
  }));

const FormInput = () => {
    const classes = useStyle();
    const [inputText, setInputText] = useState("");

    const handleChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputText);
    };

  return (
    <div>
        <form onSubmit={handleSubmit} className={classes.form}>
            <Input  placeholder="Enter Player_name"
                    value={inputText}
                    className={classes.input}
                    onChange={handleChange}/>
        </form>
    </div>
  )
}

export default FormInput
