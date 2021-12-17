<template>
  <div>

<body>
        <RegistroC />
        <br>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Formulario de Acceso </title>

        
          <link rel="icon" href="../assets/Iconos/Isotipo_icono.ico">
        
       <meta name="description" content="Muestra de un formulario de acceso en HTML y CSS">
        <meta name="keywords" content="Formulario Acceso, Formulario de LogIn">
        
        <link href="https://fonts.googleapis.com/css?family=Nunito&display=swap" rel="stylesheet"> 
        <link href="https://fonts.googleapis.com/css?family=Overpass&display=swap" rel="stylesheet">
        
        <!-- Link hacia el archivo de estilos css -->
     </head>
    
    <body>
        
        <div id="contenedor">
            <div id="central">
                <div id="login">
                    <div class="titulo">
                        Bienvenido
                    </div>
                    <form id="loginform">                        
                    <input  name="nombre" type="text" id="nombre" class="nombre" placeholder="Nombres" autofocus="">
                       <input name="apellidos" type="text" id="apellidos" class="apellidos" placeholder="Apellidos" />
                       <input name="correo" type="text" id="correo" class="correo" placeholder="Correo" />
                        <input name="pass" type="password" id="pass" class="pass" placeholder="Contraseña">
                        <input name="repass" type="password" id="repass" class="repass" placeholder="Repite contraseña" />
 
                             <router-link to="/vendedor"> <button type="submit" title="Ingresar" name="Ingresar" >Acceder</button>
                                                                                         </router-link>
                          

                    </form>



                </div>


            </div>
        </div>
        
             <a class="derechos" >© 2021 Grupo CaucArte. Todos los derechos reservados.
        El contenido de este sitio está  destinado solo para el
         área de artesanías.</a>

    </body>
</html>
        
    </body>
    </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RegistroC from "@/components/RegistroC.vue"; // @ is an alias to /src

@Component({
  components: {
    RegistroC,
  },
})
export default class Home extends Vue {}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}    
#contenedor {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
}
#central {
    max-width: 320px;
    width: 100%;
}
.titulo {
    font-size: 250%;
    color:#000000;
    text-align: center;
    margin-bottom: 20px;
}
#login {
    width: 100%;
    padding: 50px 30px;
    background-color: #3a19cc;
    -webkit-box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.15);
    -moz-box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.15);
    box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.15);
    border-radius: 3px 3px 3px 3px;
    -moz-border-radius: 3px 3px 3px 3px;
    -webkit-border-radius: 3px 3px 3px 3px;
    
    box-sizing: border-box;
}
#login input {
    font-family: 'Overpass', sans-serif;
    font-size: 110%;
    color: #1b262c;
    
    display: block;
    width: 100%;
    height: 40px;
    
    margin-bottom: 10px;
    padding: 5px 5px 5px 10px;
    
    box-sizing: border-box;
    
    border: none;
    border-radius: 3px 3px 3px 3px;
    -moz-border-radius: 3px 3px 3px 3px;
    -webkit-border-radius: 3px 3px 3px 3px;
}
#login button {
    font-family: 'Overpass', sans-serif;
    font-size: 110%;
    color:#1b262c;
    width: 100%;
    height: 40px;
    border: none;
    
    border-radius: 3px 3px 3px 3px;
    -moz-border-radius: 3px 3px 3px 3px;
    -webkit-border-radius: 3px 3px 3px 3px;
    
    background-color: #90cef7;
    
    margin-top: 10px;
}
#login button:hover {
    background-color: #0f4c75;
    color:#bbe1fa;
}

.pie-form {
    font-size: 90%;
    text-align: center;    
    margin-top: 15px;
}
.pie-form a {
    display: block;
    text-decoration: none;
    color: #bbe1fa;
    margin-bottom: 3px;
}
.pie-form a:hover {
    color: #0f4c75;
}

.inferior {
    margin-top: 10px;
    font-size: 25px;
    text-align: center;
}
.inferior a {
    display: block;
    text-decoration: none;
    color: #000000;
    margin-bottom: 3px;
}

.inferior a:hover {
    color: #0915c4;
}
body{
    background-color: rgb(127, 202, 246);

    background-size:cover;
    background-position:right;
    background-repeat: no-repeat;
    text-align: center;

}
.derechos{
     display:block;
            color:rgb(0, 0, 0);
            text-decoration:none;
            font-weight:400;
            font-size:15px;
            padding:10px;
            font-family:"HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
            text-transform:uppercase;
            letter-spacing:1px;
}
</style>