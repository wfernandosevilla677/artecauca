<template>

<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CaucArte</title>
    

</head>
 

<link rel="icon" href="/assets/Iconos/Isotipo_icono.ico">

<body>

    <hr>
    <br>
    <br>
<section > 
    <br>
    <br> 
 <img alt="logo prin" src="../assets/Logo/Isotipo.png"/>

</section>
<img class="frase" src="../assets/Logo/frase.png" alt="">
<img class="volcan" src="../assets/Logo/vol.png" alt="" >
 
 <br><br>
    <h3>USUARIO</h3>
    <br>
        <nav id="usuario">
            <ul>
                <router-link to="/comprador" >
                             <li><a class="usa">Comprar</a></li>
                </router-link>
                <router-link to="/registroven">
             <li><a class="usa">Vender</a></li>
                </router-link>

            
             </ul>
            </nav>
   
  
</body>
	<body>
		<div class="slide">
			<div class="slide-inner">
				<input class="slide-open" type="radio" id="slide-1" name="slide" aria-hidden="true" hidden="" checked="checked">
				<div class="slide-item">
              <img alt="Vue logo" src="../assets/Artesanias/m1.jpeg"/>
				</div>

				<input class="slide-open" type="radio" id="slide-2" name="slide" aria-hidden="true" hidden="">
				<div class="slide-item">
					<img src="../assets/Artesanias/c1.jpeg">
				</div>

				<input class="slide-open" type="radio" id="slide-3" name="slide" aria-hidden="true" hidden="">
				<div class="slide-item">
					<img src="../assets/Artesanias/ar1.jpeg">

				</div>
				<label for="slide-3" class="slide-control prev control-1">‹</label>
				<label for="slide-2" class="slide-control next control-1">›</label>
				<label for="slide-1" class="slide-control prev control-2">‹</label>
				<label for="slide-3" class="slide-control next control-2">›</label>
				<label for="slide-2" class="slide-control prev control-3">‹</label>
				<label for="slide-1" class="slide-control next control-3">›</label>
				<ol class="slide-indicador">
					<li>
						<label for="slide-1" class="slide-circulo">•</label>
					</li>
					<li>
						<label for="slide-2" class="slide-circulo">•</label>
					</li>
					<li>
						<label for="slide-3" class="slide-circulo">•</label>
					</li>
				</ol>
			</div>
		</div>
<br><br><br>

     <a class="derechos" >© 2021 Grupo CaucArte. Todos los derechos reservados.
        El contenido de este sitio está  destinado solo para el
         área de artesanías.</a>
        </body>
</html>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
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


.logoprin{
    width:  200px;
    height: 200px;
    margin: auto;
    position: initial;
    background-position:right;
     
 
    }
    
     p{
         font-size: 20px;     
         block-size: 50px;
         font-weight: bold;
     }
    @media screen {
        
        #menu ul {
            list-style:none;
            margin:0;
            padding:0;
           }
           
           /* enlaces del menu */
           
           #menu ul a {
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
           
           /* items del menu */
           
           #menu ul li {
            position:relative;
            float:left;
            margin:0;
            padding:0;
           }
           
           /* efecto al pasar el ratón por los items del menu */
           
           #menu ul li:hover {
            background:#f59e9b;
           }
           /* fin*/
           
           #menu2 ul {
            list-style:none;
            margin:0;
            padding:0;
           }
           
            
           #menu2 ul a {
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
           
           
           #menu2 ul li {
            float: right;
            
           }
           
            
           #menu2 ul li:hover {
            background:#f59e9b;
           }
          

           #usuario ul {
            list-style:none;
            margin:0;
            padding:0;
            
           }
           
           #usuario ul a {
               
            display:inline;
            color:rgb(0, 0, 0);
            text-decoration:none;
            font-weight:400;
            font-size:15px;
            padding:10px;
            font-family:"HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
            text-transform:uppercase;
            letter-spacing:5px;
          
              }
           
            
           #usuario ul li {
            position:relative;
            display: inline;
            margin:10;
            padding:10;
               }
           
          
           #usuario ul li:hover {
            background:#f59e9b;
           }
        
           

        .volcan{
            display: flex;
            flex-flow: column wrap;
            width: 100vw;
            height: 40vh;
            justify-content: center;
            align-items: center;
         
        }
       

        .frase{
            width:  300px;
            height: 20px;
            margin: auto;
            position: initial;
            background-position:right;
         }
   h3{
            font-size: 23px;       
        }
   
     
}
 
@media screen { 

body{
    background-image: url(/Imágenes/Logo/fondo.png);
    background-size:cover;
    background-position:right;
    background-repeat: no-repeat;
    text-align: center;

}

/*     */
.slide {
    position: relative;
    box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.64);
    margin-top: 26px;
}

.slide-inner {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: calc( 300px + 3em);
}

.slide-open:checked + .slide-item {
    position: static;
    opacity: 100;
}

.slide-item {
    position: absolute;
    opacity: 0;
    -webkit-transition: opacity 0.6s ease-out;
    transition: opacity 0.6s ease-out;
}

.slide-item img {
    display: flexbox;
    width: auto;
    height: 400px;
  
}

.slide-control {
    background: rgba(0, 0, 0, 0.28);
    border-radius: 50%;
    color: #fff;
    cursor: pointer;
    display: none;
    font-size: 40px;
    height: 40px;
    line-height: 35px;
    position: absolute;
    top: 50%;
    -webkit-transform: translate(0, -50%);
    cursor: pointer;
    -ms-transform: translate(0, -50%);
    transform: translate(0, -50%);
    text-align: center;
    width: 40px;
    z-index: 10;
}

.slide-control.prev {
    left: 2%;
}

.slide-control.next {
    right: 2%;
}

.slide-control:hover {
    background: rgba(0, 0, 0, 0.8);
     
}

#slide-1:checked ~ .control-1,
#slide-2:checked ~ .control-2,
#slide-3:checked ~ .control-3 {
    display: block;
}

.slide-indicador {
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    bottom: 2%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 10;
}

.slide-indicador li {
    display: inline-block;
    margin: 0 5px;
}

.slide-circulo {
    color: #da6161;
    cursor: pointer;
    display: block;
    font-size: 40px;
}

.slide-circulo:hover {
    color: #aaaaaa;
}

#slide-1:checked ~ .control-1 ~ .slide-indicador li:nth-child(1) .slide-circulo,
#slide-2:checked ~ .control-2 ~ .slide-indicador li:nth-child(2) .slide-circulo,
#slide-3:checked ~ .control-3 ~ .slide-indicador li:nth-child(3) .slide-circulo {
    color: #428bca;
}
.usa{
    font-family: 'Overpass', sans-serif;
    font-size: 110%;
    color:#1b262c;
    width: 100%;
    height: 40px;
    border: none;
    
    border-radius: 3px 3px 3px 3px;
    -moz-border-radius: 3px 3px 3px 3px;
    -webkit-border-radius: 3px 3px 3px 3px;
    
    background-color: #f1a9a3;
    
    margin-top: 10px;
}



}
</style>
