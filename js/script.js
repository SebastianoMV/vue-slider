
const app = new Vue({
    el: '#app',

    data:{ 
        slides: [
        {
            image: 'img/01.jpg',
            title: 'Svezia',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
        },
        {
            image: 'img/02.jpg',
            title: 'Svizzera',
            text: 'Lorem ipsum.',
        },
        {
            image: 'img/03.jpg',
            title: 'Gran Bretagna',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        },
        {
            image: 'img/04.jpg',
            title: 'Germania',
            text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
        },
        {
            image: 'img/05.jpg',
            title: 'Paradise',
            text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
        },
        
        ],
        counterImg: 0,
        flag: true,
        upHere: false,
        
    },
    methods: {
       nextImg(){
           this.counterImg++;
           if(this.counterImg > this.slides.length -1){
               this.counterImg = 0;
           }
           
           console.log(this.counterImg);
       },
       prevImg(){
           this.counterImg--
           if(this.counterImg < 0){
            this.counterImg = this.slides.length -1;
           }
        },
        activateThumb(index){
            this.counterImg = index;
        },
        
  
        
        
    },

    mounted() {
         
       const timer = setInterval( () =>{
          
          
          if(!this.upHere){
            this.nextImg();

          }
      }, 3000)
    
    },


})
