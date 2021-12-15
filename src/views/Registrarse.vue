<template>

    <div>
    <body>
    
<head>
    <title>Formulario</title>
    <meta charset="utf-8">
</head>
 

<!-- <link rel="icon" href="../assets/Iconos/Isotipo_icono.icp"> -->

    <div id="registrar">
        
    </div>
    <div id="envoltura">
        <div id="contenedor">
 
            <div id="cabecera">
                <h1>Bienvenido</h1>
            </div>
 
            <div id="cuerpo">
 
                <form id="form-login" action="#" method="post" >
                        <input  name="nombre" type="text" id="nombre" class="nombre" placeholder="Nombres" autofocus="">
                       <input name="apellidos" type="text" id="apellidos" class="apellidos" placeholder="Apellidos" />
                       <input name="correo" type="text" id="correo" class="correo" placeholder="Correo" />
                        <input name="pass" type="password" id="pass" class="pass" placeholder="Contraseña">
                        <input name="repass" type="password" id="repass" class="repass" placeholder="Repite contraseña" />
 
                       

                    <p id="bot"> 
                        <a href="Acceder.html">
                        <button type="submit" title="Registrarse" name="Registrarse">Registrarse</button>
                    </a>
                    </p>
                  
                </form>
            </div>
 
            <div id="pie">Sistema de Login Y Registro</div>
        </div><!-- fin contenedor -->
 <br>
        <!-- <a href="Index.html">Atras</a> -->
    </div>
 
</body>

 
    </div>
</template>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
    
}

body{
    background-image: url(../assets/Logo/fondo.png);
    color:#000000;

    text-align: center;
   
}
 
#registrar{
        float:left;
        width:80%;
        font-size:24px;
        font-weight:bold;
        color:#FFF;
        text-align:right;
}
 
#envoltura{
        position:absolute;
    /*left y top al 50% para que quede centrado en la pantalla*/
    left:50%;
    top:50%;
    margin-left:-165px;
    margin-top: -210px;
    width: 380px;
 
}
 
#contenedor{
    background-color: #dd406f;
    /*Margen de sombra alrededor del contenedor 8px negro*/
    box-shadow: 3px 3px 10px 5px rgba(0,0,0,.8);
    /*Las 3 líneas siguientes, sirven para el borde redondeado
     * pero para diferentes navegadores*/
   
}
 
 #cabecera{
    font-size: 25px;
   font-family: 'Times New Roman', Times, serif;  
   
    margin-bottom: 40px;
 }
 
 
 
 
/* input#usuario{
    background:#ffc url(../assets/logo.png) no-repeat 0 2px; /*probar con #ddf.
                                                                Para mover arriba-abajo la imagen 'jugar' con 2px, 5px */
    /*Para que el texto dentro del input se mueva*/
    /* padding-left: 25px; Sirve para darle espacio ala imagen, probar con 30px 10px y ver comportamiento */
/*} */
 
/* input#contrasenia{
    background:#ffc url(./images/infinio.jpg) no-repeat 0 5px;
    padding-left: 25px;
 
} */
 
.boton{
    font-family: 'Overpass', sans-serif;
    font-size: 110%;
    color:#1b262c;
    width: 100%;
    height: 40px;
    border: none;
 
    background-color: #f1a9a3;
    
    margin-top: 10px;
}
 
/*Tip estas instrucciones animan al boton enviar
 * para que se vea como si se pulsara*/
.boton:active{
    position: relative;
    top: 3px;
} 
#form-login input {
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
 
form,p{
    margin: 40px;
   
}
 
 /* Estilo del buton */
#bot button {
    
    font-family: 'Overpass', sans-serif;
    font-size: 110%;
    color:#1b262c;
    width: 100%;
    height: 40px;
    border: none;
 
    background-color: #f1a9a3;
    
    margin-top: 10px;
}
 a{
     font-size: 25px;
 }

</style>