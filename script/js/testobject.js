// Create an object:
const car = {type:"Fiat", model:"500", color:"white", motors:["diesel","Benzina"]};

const obj = {
  num: 100,
  sum(a, b) {return a + b;},
  sub(a, b) {return a - b;},
  molt(a, b) {return a * b;},
  div(a, b) {
      let result = 0;
      if( b == 0) {
        return "Non si può dividere per " + b;
      } else {
        result = a / b;
      }

      return result;
    }
  };
  alert(obj.sum(obj.num, 2)); // 👉️ 102

  alert(obj.sub(obj.num, 2)); // 👉️ 102

  alert(obj.molt(obj.num, 2)); // 👉️ 102

  alert(obj.div(obj.num, 2)); // 👉️ 102
  
const users =  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  };
