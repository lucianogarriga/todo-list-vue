const app = new Vue({
    el: "#app",
    data:{
        mensaje: "",
        contador: 0
    },
    methods:{
        sumar(){
            this.contador<100 ? this.contador += 5 : this.contador;
            console.log(this.contador);
        },
        restar(){
            this.contador>0 
                ? this.contador -= 5 
                : alert("El contador no puede ser negativo");
        }
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return {
                'bg-success': this.contador <= 100,
                'bg-warning': this.contador < 66 && this.contador > 21,
                'bg-danger': this.contador < 20 && this.contador > 0
            }
        }
    } 
})