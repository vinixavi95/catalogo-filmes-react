import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Armazem(props) { 

    return (
        <Container spacing={10} color="primary" >{props.children}</Container>
    )
}

export default Container;


//PASSANDO CSS VIA UI-MATERIAL - NAO PRECISO MAIS DE UM ARQUIVO 
//CSS, IMPORTANTO AS PROPRIEDADES QUE QUERO USAR DENTRO DO COMPONENTE