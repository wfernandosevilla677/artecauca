<template>
  <div>

<body>
        <RegistroC /> <br>       

        <div class="enlace">
            <h2>Categoría</h2>
             <section >
           <router-link to="/vendedor"><a class="link">Bolsos</a> </router-link> 
           <router-link to="/aretesven" > <a class="link">Aretes</a></router-link>
           <router-link to="/collaresven" > <a class="link">Collares</a></router-link>
           <router-link to="/manillasven" > <a class="link">Manillas</a></router-link>
 

        </section>
        </div>


         

          <fieldset>
                                  <h1 >Aretes</h1>

            <legend class="m">Filtro</legend>
            <div>
                <select >
                    <h3>selecione la categoría</h3>
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
                 <table class="tabla">
            <caption class="detalle">Detalles</caption>
                        </table>    

            </fieldset>
   
             <label for="file">Ingrese la imagen del producto: </label><br>
            <input type="file"  id="file">
                   <div>
                    <label for="producto1">Dama</label>
                    <input id="producto1" type="radio" name="producto">
                    <label for="producto2">Caballero</label>
                    <input id="producto2" type="radio"  name="producto" ><br>
  
                    
                </div>
                                  <router-link to="/correctoven">
                                  <br>
<button type="button" class="btn btn-primary">Registrar Producto</button></router-link>
                <br><br>
            

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
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}    

body{
    background-color: rgb(127, 202, 246);

    background-size:cover;
    background-position:right;
    background-repeat: no-repeat;
    text-align: center;

}
.logoprin{
    width: 100px;
    height: 100px;
    margin: auto;
    position: static;
    background-position: right;
}

@media screen {


/* body{
    background-image: url(../assets/Logo/fondo.png);
    background-size: cover;
    background-repeat: space;
    text-align: center;
} */
 
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
    .boton{
           font-family: 'Overpass', sans-serif;
    font-size: 110%;
    color:#1b262c;
    width: 100%;
    height: 40px;
    border: none;
    
    border-radius: 100px 100px 1000px 1000px;
    -moz-border-radius: 100px 100px 1000px 1000px;
    -webkit-border-radius: 1000px 1000px 1000px 1000px;
    
    background-color: #2817c7;
    
    margin-top: 10px;
    }
    
}


</style>