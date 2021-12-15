<template>
  <div>
    <div>

<router-link to="/registrarse" >
      <nav id="menu">
        <ul>
         <li><a>Acerca de nosotros</a></li>
        </ul>
            </nav>
</router-link>

<router-link to="/producto" >
      <nav id="menu">
        <ul>
         <li><a >Productos</a></li>

        </ul>
            </nav>
</router-link>

<router-link to="">
      <nav id="menu">
        <ul>
         <li><a>Contactenos</a></li>
        </ul>
            </nav>
</router-link>

      <router-link to="/">
          <nav id="menu">
        <ul>
         <li><a>INICIO</a></li>
        </ul>
      </nav>
      </router-link > 

      <router-link to="/about">    <nav id="menu2">
        <ul>         <li><a href="Acceder.html">ACCEDER</a></li>
        </ul>
      </nav></router-link>

            <router-link to="/registrarse">    <nav id="menu2">
        <ul>         <li><a href="Acceder.html">Registrarse</a></li>
        </ul>
      </nav></router-link>
    </div>
    <router-view />
  </div>
</template>

<style scoped>

@media screen {
  #nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}
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
#nav a.router-link-exact-active {
  color: #42b983;
} 

 
}
</style>
