var App = Vue.extend({});
var router = new VueRouter();

var phoneList = Vue.extend({
  template: '#phones-list',
  data: function(){
    return {
      query: '',
      orderProp: 'age',
      phones:[]      
    }
  },
  created: function(){
    var self = this;
    $.getJSON('phones/phones.json').done(function(data){
      self.phones = data;
    });
  }  
});

var phoneDetail = Vue.extend({
  template: '#phones-detail',
  data: function(){
    return {     
    }
  }
})

router.map({
  '*': {
    component: phoneList
  },  
  '/phones': {
    name: 'list',
    component: phoneList
  },
  '/phones/:phoneId': { 
    name: 'detail',
    component:phoneDetail
  }
})

router.start(App, 'body');