const app = new Vue({
    el: "#app",
    data:{
        mensaje: "",
        contador: 0
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
        }
    } 
})