// Instanciar Vue en una nueva const
// Llamamos la librería de Vue importada en el script con el CDN
// la nueva instancia recibe un OBJETO
const app = new Vue({
    el: "#app", // El id del div hijo del HTML
    data: {
      //Vamos a trabajar los datos
      title: "Programando con Vue",
    //   frutas: ['manzana','banana','naranja']
    frutas: [ 
    ],
      nuevaFruta: '',
      cantidad: '',
      total: 0
    },
    methods:{
      agregarFruta(){
        this.frutas.push({
          nombre: this.nuevaFruta,
          cantidad: this.cantidad
        });
        this.nuevaFruta = '',
        this.cantidad = 0
      } 
    },
    computed:{
      // Los computed son afectados dentro de la propiedad
      sumarFrutas(){
        this.total = 0;
        for(fruta of this.frutas){
          this.total += fruta.cantidad
        }
        return this.total;
      }
    }
  });