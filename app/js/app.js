new Vue({
  el: 'body',
  data: {
    query: '',
    orderProp: 'age',    
    phones: []
  },
  created: function(){
    var self = this;
    $.getJSON('phones/phones.json').done(function(data){
      self.phones = data;
    });
  }  
})