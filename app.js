Vue.createApp({
    data(){
        return {
            appName: "List Portofolio",
            info : {}
        }
    },
    methods: {
        incrementAge(){
           this.age++;
        },
        getCreator(data){
            let name = "nobody";
            if(data != null){
                if(data.firstname != null){
                    name = data.firstname;
                }
            }
            return name;
        },
        getImage(data){
            let url = "https://api.appdul.com"+ data.url;
            console.log(url);
            return url;
        }
    },
    mounted () {
        axios
          .get('https://api.appdul.com/portofolios?_sort=name:ASC')
          .then(response => (this.info = response.data))
      }
}).mount('#app');