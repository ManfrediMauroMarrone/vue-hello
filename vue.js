var app = new Vue({
el: '#root',
  data: {
    message: 'Hello world',
    message2: 'immagine cambiata',
    mioValore: 'ciao',
    myClass: 'title',
    mySource: 'https://i.picsum.photos/id/913/200/200.jpg?hmac=MQWqYyJuxoagkUNdhY5lwuKw7QwcqzMEm4otshKpUWQ',
    mySource2: 'https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI'
  },

  methods: {
    imgChange: function () {
      this.mySource = this.mySource2
      this.message = this.message2

    }
  }
});
