const app = new Vue({
    el: "#app",
    data:{
        saludo: "Bienvenido a la sección de Ciclo de Vida"
    },
    beforeCreate(){
        console.log("beforeCreate");
    },
    created(){
        // Luego de leer los methods, watchers y events, pero aún NO accede al DOM
        // Aún NO se puede acceder a 'el' / No ha leído el 'el' todavía
        console.log("created");
    },
    beforeMount(){
        // Se ejecuta ANTES de insertar el DOM
        console.log("beforeMount");
    },
    mounted(){
        // Se ejecuta al insertar el DOM
        console.log("mounted");
    },
    beforeUpdate(){
        // Al detectar un cambio
        console.log("beforeUpdate");
    },
    updated(){
        // Al realizar los cambios
        console.log("updated");
    },
    beforeDestroy(){
        // Antes de destruir la Instancia
        console.log("beforeDestroy");
    },
    destroyed(){
        // Se destruye toda la instancia
        console.log("destroyed");
    },
    methods: {
        destruir(){
            this.$destroy();
        }
    }

})