
<template>
    <div>
        <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ArteCauca</title>
</head>
<body>
    <RegistroC/>
    <hr>

        <div>
            <br>
            <label for=""></label>
            <input type="text">
            <input type="button" value="Buscar">
            <br>
            <br>
        </div>

        <div class="enlace">
            <h2>Categoría</h2>
<section >
           <router-link to="/comprador"><a class="link">Aretes</a> </router-link> 
           <router-link to="/bolsoscom" > <a class="link">Bolsos</a></router-link>
           <router-link to="/collarescom" > <a class="link">Collares</a></router-link>
           <router-link to="/manillascom" > <a class="link">Manillas</a></router-link>
 

        </section>
        </div>
        <br>
                             <h1 >Bolsos</h1>

        <hr>
          <br>
                     <br>


                     <h4>Opción 1:</h4>
					<img src="../assets/Artesanias/b1.jpeg" width="10%">
          <nav>
              <ul>
           <!-- <img class="imagen" src="/Imagenes/Aretes/arestes 2 (1).png" alt=""> -->

                              <table class="tabla">
 <caption class="detalle">Detalles</caption></table>

         
        </ul>

          <table class="tabla">
            <thead  >
                <tr>
                  <td class="td">Tamaño</td>
                  <td class="td">Material</td>
                  <td class="td">Precio</td>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="td">Grande</td>
                    <td class="td">Mostasilla</td>
                    <td class="td">$ 80.000.00</td> 
                </tr>
                <tr>
                    <td class="td">Mediano</td>
                    <td class="td">Mostasilla</td>
                    <td class="td">$ 45.000.00</td>
                </tr>
                <tr>
                    <td class="td">Pequeño</td>
                    <td class="td">Mostasilla</td>
                    <td class="td">$ 25.000.00</td>
                </tr>
            </tbody>
         </table>  
            
      <br> <br>
            <legend class="m">Seleccionar</legend>
            <div>

                <select >
                    <option class="a" value="1">Grande</option>
                    <option class="a"  value="2">Mediano</option>
                    <option  class="a"  value="3">Pequeño</option>
                    
                </select>
                               <select >
                    <option class="a" value="1">Lana</option>
                    <option class="a" value="1">Hilo</option>

                </select>
               
            </div>
            <br>
               <div>
                    <router-link to="/correctocom">
                                  <br>
<button type="button" class="btn btn-primary">Comprar</button></router-link>
                </div>
                <br>
            
         <hr>
    
          <br>
 
        <ul> 

            <h4>Opción 2</h4>
            					<img src="../assets/Artesanias/b2.jpeg" width="10%"> <br>

               <table class="tabla">
     <caption  class="detalle">Detalles</caption> </table>

              <!-- <img class="imagen" src="/Imagenes/Aretes/aretes 1.png" alt=""> -->
              <table class="tabla">
                <br>
                 <thead>
         <tr>
                        <td class="td">Tamaño</td>
                        <td class="td">Material</td>
                        <td class="td">Precio</td>
                 </tr>
             
                 </thead>
                 <tbody>
                     <tr>
                         <td class="td">Grande</td>
                         <td class="td">Madera</td>
                         <td class="td">$ 70.000.00</td>
                     </tr>
                     <tr>
                         <td class="td">Mediano</td>
                         <td class="td">Madera</td>
                         <td class="td">$ 35.000.00</td>
                     </tr>
                     <tr>
                         <td class="td">Pequeño</td>
                         <td class="td">Madera</td>
                         <td class="td">$ 20.000.00</td>
                     </tr>
                 </tbody>
              </table>
             <br> 
             <br>  
             <legend class="m">Seleccionar</legend>
             <div>
                 <select >
                     <option class="a" value="1">Grande</option>
                     <option class="a"  value="2">Mediano</option>
                     <option  class="a"  value="3">Pequeño</option>
                 </select>
                                <select >
                    <option class="a" value="1">Lana</option>
                    <option class="a" value="1">Hilo</option>

                </select>
                 
             </div>
             <br>
                <div>
 <router-link to="/correctocom">
                                  <br>
<button type="button" class="btn btn-primary">Comprar</button></router-link>                     
                 </div>
                 <br>

                 </ul>

                 <hr>
<br>
                 <h4>opción 3</h4>
                 					<img src="../assets/Artesanias/b3.jpeg" width="10%"><br>

         <table class="tabla">
     <caption  class="detalle">Detalles</caption> </table>
                 <table class="tabla">
                     <br>
                     <thead>
                          <tr>
                            <td class="td">Tamaño</td>
                            <td class="td">Material</td>
                            <td class="td">Precio</td>
                         </tr>
                     </thead>
                     <tbody>  
                         <tr>
                             <td class="td">Grande</td>
                             <td class="td">Hilo</td>
                             <td class="td">$ 25.000.00</td>
                         </tr>
                         <tr>
                             <td class="td">Mediano</td>
                             <td class="td">Hilo</td>
                             <td class="td">$ 15.000.00</td>
                         </tr>
                         <tr>
                             <td class="td">Pequeño</td>
                             <td class="td">Hilo</td>
                             <td class="td">$ 5.000.00</td>
                         </tr>
                     </tbody>
                  </table>
                 <br>
                 <br>  
                 <legend class="m">Seleccionar</legend>
                 <div>
                     <select >
                         <option class="a" value="1">Grande</option>
                         <option class="a"  value="2">Mediano</option>
                         <option  class="a"  value="3">Pequeño</option>
                     </select>
                                    <select >
                    <option class="a" value="1">Lana</option>
                    <option class="a" value="1">Hilo</option>

                </select>
                     
                 </div>
                 <br>
                    <div>
                         <router-link to="/correctocom">
                                  <br>
<button type="button" class="btn btn-primary">Comprar</button></router-link>
                     </div>
                     <br>
                      
</nav>
<br>

<hr>

<header class="infor">
    <section class="contactos">
        <article>
            <h5>Contactanos</h5>
            <h5>Silvia: 3218921973</h5>
            <h5>Popayán: 3116946661</h5> 
        </article>
    </section> 
    
    <section class="redes">
        <article> 
            <h5>Sigenos en redes sociales</h5>
            <img class="redimagen" src="../assets/Redes sociales/facebook2.png" alt="">
            <img class="redimagen" src="../assets/Redes sociales/Instagram.png" alt="">
            <img class="redimagen" src="../assets/Redes sociales/twitter.png" alt="">
        </article>
    </section>

    
    <section class="nuestra">
        <article >
           <a href="Nuestra_empresa.html">Nuestra Empresa</a>
           <h5>Misión</h5>
           <h5>Visión</h5>
           <h5>¿Quienes somos?</h5>
        </article>
    </section>
</header>

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
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

}


@media screen {


body{
    /* background-image: url(../assets/Fondos/fondo\ 2.jpg); */
    background-size: cover;
    background-color: rgb(127, 202, 246);

    background-repeat: space;
    text-align: center;
}
 
    .link{
        background-color: rgb(162, 179, 187);
        color: black;
        border-bottom: solid blue;
        cursor: pointer;
        padding: 2px 7px;
        font-size: 12px;
        border-radius: 80px;
        border: double;
        overflow-wrap: break-word;
        font-weight: 600;
        display: inline-table;

    }
    .enlace{
        color: rgb(0, 0, 0);
        font-size: 15px;
      font-family: Georgia, 'Times New Roman', Times, serif;
        padding: 10px 15px 15px 10px;
        justify-content: center;
        align-content: center;
    }
    h2{
        block-size: 50px;
    }
    a:hover{
        color: blue;
    }
    .imagen{
        background-position: center;
        width: 100px;
        height: 100px;
        text-align: center;
         
    }
    .td{
        text-align: center;
        font-size: 18PX;
        background-position: center;
        background-color: rgb(165, 167, 143);
        border-bottom: solid rgb(142, 156, 158);
        border-top: solid rgb(221, 227, 228); 
         
      
    }
    .tabla{
        text-align: center;
        background-position: center;
        display: inline;
       
    }
    .posi{
        text-align: center;
        background-position: center;
        position: sticky;
        
    }
    .infor{
        display: inline-flex;
       
    }
    .contactos{
      box-shadow: 5px 5px 4px 5px rgb(180, 168, 168);
     margin: 15px;
    }
    
    
    .redes{
        flex-direction: column;
        box-shadow: 5px 5px 4px 5px rgb(197, 178, 178);
        margin: 5x;
    }
    .imagen{
        background-position: center;
        width: 100px;
        height: 100px;
        text-align: center;
       
        
    }
    .redimagen{
        width:  30px;
        height: 30px;
        flex-direction: column-reverse;
    }
    .detalle{
        font-weight: 700;
        font-size: 23px;
    }
    hr{
        box-shadow: 15px 2px 10px 2px rgb(14, 39, 22) ;
    }
    .m{
        color: rgb(38, 70, 35);
        font-size: 20px;
        font-weight: 700;
        font-family: 'Times New Roman', Times, serif;
        margin: 10px; 
    }
    .a{
        background-color: rgb(116, 125, 141);
        font-size: 15px;
       font-weight: 600;

    }
    
}

*{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;

}
.logoprin{
    width: 100px;
    height: 100px;
    margin: auto;
    position: static;
    background-position: right;
}

@media screen {


body{
    /* background-image: url(../Imagenes/Fondos/fondo\ 2.jpg); */
    background-size: cover;
    background-repeat: space;
    text-align: center;
}
 
    .link{
        background-color: rgb(162, 179, 187);
        color: black;
        border-bottom: solid blue;
        cursor: pointer;
        padding: 2px 7px;
        font-size: 12px;
        border-radius: 80px;
        border: double;
        overflow-wrap: break-word;
        font-weight: 600;
        display: inline-table;

    }
    .enlace{
        color: rgb(0, 0, 0);
        font-size: 15px;
      font-family: Georgia, 'Times New Roman', Times, serif;
        padding: 10px 15px 15px 10px;
        justify-content: center;
        align-content: center;
    }
    h2{
        block-size: 50px;
    }
    a:hover{
        color: blue;
    }
    .imagen{
        background-position: center;
        width: 100px;
        height: 100px;
        text-align: center;
         
    }
    .td{
        text-align: center;
        font-size: 18PX;
        background-position: center;
        background-color: rgb(165, 167, 143);
        border-bottom: solid rgb(142, 156, 158);
        border-top: solid rgb(221, 227, 228); 
         
      
    }
    .tabla{
        text-align: center;
        background-position: center;
        display: inline;
       
    }
    .posi{
        text-align: center;
        background-position: center;
        position: sticky;
        
    }
    .infor{
        display: inline-flex;
       
    }
    .contactos{
      box-shadow: 5px 5px 4px 5px rgb(180, 168, 168);
     margin: 15px;
    }
    
    
    .redes{
        flex-direction: column;
        box-shadow: 5px 5px 4px 5px rgb(197, 178, 178);
        margin: 5x;
    }
    .imagen{
        background-position: center;
        width: 100px;
        height: 100px;
        text-align: center;
       
        
    }
    .redimagen{
        width:  30;
        height: 30;
        flex-direction: column-reverse;
    }
    .detalle{
        font-weight: 700;
        font-size: 23px;
    }
    hr{
        box-shadow: 15px 2px 10px 2px rgb(14, 39, 22) ;
    }
    .m{
        color: rgb(38, 70, 35);
        font-size: 20px;
        font-weight: 700;
        font-family: 'Times New Roman', Times, serif;
        margin: 10px; 
    }
    .a{
        background-color: rgb(116, 125, 141);
        font-size: 15px;
       font-weight: 600;

    }
    
}
</style>