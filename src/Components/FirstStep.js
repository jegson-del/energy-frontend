import React from 'react'
import {Button, TextField} from 'material-ui-core';


export default function FirstStep() {
  return (
    <div>
        <TextField label="postcode" margin="normal" variant="outlined" color="secondary"/>
        <TextField label="email" margin="normal" variant="outlined" color="secondary"/>
        <Button variant="contained" color="primary">Join 121energy </Button> 
    </div>
  )
}
