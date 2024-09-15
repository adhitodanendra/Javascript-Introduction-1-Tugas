let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  };
  
  let spreadData = {
    ...data,
    name: "Adhito Danendra", 
    email: "email@anda.com", 
    hobby: "Baca, Nonton, Olahraga", 
  };
  
  let {address: { street, city }} = data;

//console.log(spreadData)
console.log(street);
console.log(city);  