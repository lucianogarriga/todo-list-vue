const app = new Vue({
    el:'#app',
    // En data, podemos colocar pseudo-variables
    data:{
        title: "Gym App con Vue.Js",
        subtitle: "CRUD App manipulando datos en el localStorage utilizando Vue.Js",
        tasks:[],
        newTasks: ''
    },
    methods:{
        addLocalStorage: function(){ 
            localStorage.setItem('gym-vue', JSON.stringify(this.tasks));
        },
        addTasks: function(){
            //this = p/ referirnos a 'data'
            this.tasks.push({
                name: this.newTasks,
                state: false
            });  
            this.newTasks = '';
            this.addLocalStorage();
        },
        changeState: function(index){
            this.tasks[index].state = !this.state;
            this.addLocalStorage();
        },
        removeTask: function(index){
            this.tasks.splice(index,1);            
            this.addLocalStorage();
        }
    },
    created: function(){
        let dataLS = JSON.parse(localStorage.getItem('gym-vue')); 
        if(dataLS === null){
            this.tasks = [];
        } else {
            this.tasks = dataLS;
        }
    }
})