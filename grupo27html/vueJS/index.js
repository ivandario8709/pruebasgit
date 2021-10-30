new Vue({
    el:'#app',
    data:{
        titulo: 'La curva de aprendizaje de vue es rápida',
        parrafo: 'pal culo mijin',
        frutas: [{fruta:'mango', cantidad:0},{fruta:'piña', cantidad:10},{fruta:'fresa', cantidad:3}],
        frutaNueva: '', cantidadnueva:'',

    },
    
    methods:{
      agregarFruta(){
          this.frutas.push({
              fruta: this.frutaNueva, cantidad:this.cantidadnueva
              
          }),
         this.frutaNueva=''
      }
    },
}) 