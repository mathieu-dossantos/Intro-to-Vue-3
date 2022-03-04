
const app = Vue.createApp( {
    data() {
        return {
            panier: 0,
            produit: "Stickers",
            description: "MONTPELLIER ANTIFASCISTE",
            couleur: "Rouge et Blanc",
            image: "./assets/images/jeunegarde.jpeg",
            website: "https://www.facebook.com/people/Jeune-Garde-Montpellier/100075927547890/",
            stock: true,
            details: ['50% coton' , "30% laine" , "20% polyester"],
            tailles: ['10 x 10' , '18 x 18' , '32 x 32' ,'58 x 58']    ,
            variantes: [ 
                { id: 0002 , couleur: 'Rouge et noir' , tailles: ['15 x 15' , '32 x 32']} ,
                {id: 0003 , couleur: "Vert et noir" , tailles: ['10 x 10' , '47 x 47']},
            ],
                
        }
    },

    methods:{
        ajouterPanier(){
            this.panier++;
        },

        retirerPanier(){
            this.panier--;
        },
    }
})
