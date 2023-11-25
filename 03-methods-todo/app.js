const app = new Vue({
    el:'#app',
    // En data, podemos colocar pseudo-variables
    data:{
        title: "Gym App con Vue.Js",
        tasks:[],
        newTasks: ''
    },
    methods:{
        addTasks: function(){
            //this = p/ referirnos a 'data'
            this.tasks.push({
                name: this.newTasks,
                state: false
            }); 
            console.log(this.tasks);
            this.newTasks = ''
        },
        changeState: function(index){
            this.tasks[index].state = !this.state;
        },
        removeTask: function(index){
            this.tasks.splice(index,1);
        }
    }
})