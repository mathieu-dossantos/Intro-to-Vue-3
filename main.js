const app = Vue.createApp({
    data() {
        return {
            cart:0,
            product: 'Chaussettes anti-flics',
            brand: 'ACAB',
            selectedVariant: 0,
            details: ['50% molotov', '30% pavé', '20% fumigène'],
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50, onSale: false },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0, onSale: true },
            ],
            
        }
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        updateVariant(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + '\n' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].image
        },
        inStock() {
            return this.variants[this.selectedVariant].quantity
        },
        // solution
        sale() {
            if (this.variants[this.selectedVariant].onSale) {
                return this.brand + ' ' + this.product + ' est en vente.'
            }
            return ''
        }
        // solution
    }
})
