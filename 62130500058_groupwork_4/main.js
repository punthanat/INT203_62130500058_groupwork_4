const app = {
    data() {
        return {
            places: [
                { Pname: 'Achan Daeng', des: 'Valley', country: 'Thailand', img: "./images/1.jpg", done: false, expand: false, id: 0 },
                { Pname: 'Saaawaadee Krap', des: 'Valley', country: 'UK', img: "./images/2.jpg", done: false, expand: false, id: 1 },
                { Pname: 'Lung Roeng', des: 'Valley', country: 'Pakistan', img: "./images/3.jpg", done: false, expand: false, id: 2 }
            ],
            search: false,
            input: '',
            expand: false,
            expandImgPath: '',
        }
    },
    methods: {
        placess(index) {
            this.places[index].done = !this.places[index].done
        },

        clickSearch() {
            this.search = !this.search
        },
        clickcancel() {
            this.search = !this.search
            this.input='';
        },
        expandImg(img) {
            this.expand = !this.expand
            this.expandImgPath = img;
        },
        expandImg2() {
            this.expand = !this.expand
            this.expandImgPath = '';
        },
        
       

    },
    computed: {
        countUndone() {
            return this.tasks.filter(t => !t.done).length
        },
        inputSearchfil() {
            return this.places.filter((p) => {
                return p.Pname.toLowerCase().includes(this.input.toLowerCase())
            })
        }

    }
}
Vue.createApp(app).mount('#app')

