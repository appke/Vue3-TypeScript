Vue.createApp({
  template: "#my-app",
  data() {
    return {
      books: [{
        id: 1,
        name: '《算法导论》',
        data: '2006-9',
        price: 85.00,
        count: 2
      }, {
        id: 2,
        name: '《计算机概论》',
        data: '2018-9',
        price: 35.00,
        count: 1
      }, {
        id: 3,
        name: '《网络技术与基础》',
        data: '2006-9',
        price: 84.00,
        count: 2
      }, {
        id: 4,
        name: '《编程珠玑》',
        data: '2008-9',
        price: 39.00,
        count: 1
      }, {
        id: 5,
        name: '《代码大全》',
        data: '2006-9',
        price: 85.00,
        count: 1
      }],
    }
  },
  methods: {
    decrement(index) {
      this.books[index].count--;
    },
    increment(index) {
      this.books[index].count++;
    },
    removeBook(index) {
      this.books.splice(index, 1);
    },
    formatPrice(price) {
      return "¥" + price;
    }
  },
  computed: {
    totalPrice() {
      let finalPrice = 0;
      for (let book of this.books) {
        finalPrice += book.price * book.count;
      }
      return finalPrice;
    }
  },

}).mount("#app")