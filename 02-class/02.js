const app = new Vue({
    el: '#app',
    data: {
        fondo: 'bg-dark',
        color: true
    },
    methods:{
        changeState(){
            this.color = !this.color
        }
    }
})