<template>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CaucArte</title>
    

</head>
 


<body>
   

    <hr>
    <br>
    <br>
<section > 
    <br>
    <br> 
 <img alt="logo prin" class="img" src="../assets/Logo/Isotipo.png"/>

</section>
<img class="frase" src="../assets/Logo/frase.png" alt="">
 
 
        
        </body>
</html>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class RegistroC extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body{
background-color: rgb(127, 202, 246);
}
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}    

       .frase{
            width:  300px;
            height: 20px;
            margin: auto;
            position: initial;
            background-position:right;
        }
body{
    background-size:cover;
    background-position:right;
    background-repeat: no-repeat;
    text-align: center;

}


.img{
    width: 15%;

}
</style>
