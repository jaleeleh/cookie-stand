'use scrpit'
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];
let Seattle = {
    name:'Seattle',
    CustPerH:[],
    min:32,
    max:65,
    AvgCookie:6.3,
    coPerCustomer:[],
    total:0,
    

    CustPerHour:function(){
        for(let i=0;i<hours.length;i++){
        this.CustPerH.push(Math.floor(Math.random()*(this.max-this.min+1)+this.min)) 
        console.log(this.CustPerH) ;
        }
    },
    CookiePerHour:function(){
        for(let i=0;i<hours.length;i++){
         
        
            this.coPerCustomer.push(Math.floor(this.CustPerH[i]*this.AvgCookie));
            console.log(this.coPerCustomer);
            this.total+=this.coPerCustomer[i];
        
            

        }
    }


}


Seattle.CustPerHour()
Seattle.CookiePerHour()

let parent = document.getElementById('seattle');
let header1 = document.createElement('h2');
parent.appendChild(header1)
header1.textContent=Seattle.name
let undorderedList =document.createElement('ul');
parent.appendChild(undorderedList);
for(let i=0; i<hours.length;i++){
   
    let listItem = document.createElement('li');
    undorderedList.appendChild(listItem);
    console.log(listItem);
    listItem.textContent = hours[i]+":"+Seattle.coPerCustomer[i]+"cookies";
  }
  let listItem2 = document.createElement('li');
  undorderedList.appendChild(listItem2);
  listItem2.textContent =` total:${Seattle.total}`;
   

  let tokyo = {
    name:'tokyo',
    CustPerH:[],
    min:3,
    max:24,
    AvgCookie:1.2,
    coPerCustomer:[],
    total:0,

    CustPerHour:function(){
        for(let i=0;i<hours.length;i++){
        this.CustPerH.push(Math.floor(Math.random()*(this.max-this.min+1)+this.min)) 
        console.log(this.CustPerH) ;
        }
    },
    CookiePerHour:function(){
        for(let i=0;i<hours.length;i++){
        
            this.coPerCustomer.push(Math.floor(this.CustPerH[i]*this.AvgCookie));
            console.log(this.coPerCustomer);
            this.total+=this.coPerCustomer[i];

             

        }
    }


}


tokyo.CustPerHour()
tokyo.CookiePerHour()
let parent1 = document.getElementById('tokyo');
let header2 = document.createElement('h2');
parent1.appendChild(header2)
header2.textContent=tokyo.name
let undorderedList1 =document.createElement('ul');
parent1.appendChild(undorderedList1);
for(let i=0; i<hours.length;i++){
    let listItem1 = document.createElement('li');
    undorderedList1.appendChild(listItem1);
    listItem1.textContent = hours[i]+":"+tokyo.coPerCustomer[i]+"cookies";
  }
  let listItem3 = document.createElement('li');
  undorderedList1.appendChild(listItem3);
  listItem3.textContent =` total:${tokyo.total}`;

  let dubai = {
    name:'dubai',
    CustPerH:[],
    min:11,
    max:38,
    AvgCookie:3.7,
    coPerCustomer:[],
    total:0,

    CustPerHour:function(){
        for(let i=0;i<hours.length;i++){
        this.CustPerH.push(Math.floor(Math.random()*(this.max-this.min+1)+this.min)) 
        console.log(this.CustPerH) ;
        }
    },
    CookiePerHour:function(){
        for(let i=0;i<hours.length;i++){
    
            this.coPerCustomer.push(Math.floor(this.CustPerH[i]*this.AvgCookie));
            console.log(this.coPerCustomer);
            this.total+=this.coPerCustomer[i];
        

        }
    }


}


dubai.CustPerHour()
dubai.CookiePerHour()

let parent2 = document.getElementById('dubai');
let header3 = document.createElement('h2');
parent2.appendChild(header3)
header3.textContent=dubai.name
let undorderedList2 =document.createElement('ul');
parent2.appendChild(undorderedList2);
for(let i=0; i<hours.length;i++){
    let listItem2 = document.createElement('li');
    undorderedList2.appendChild(listItem2);
    console.log(listItem2);
    listItem2.textContent = hours[i]+":"+dubai.coPerCustomer[i]+"cookies";
  }
  let listItem4 = document.createElement('li');
  undorderedList2.appendChild(listItem4);
  listItem4.textContent =` total:${dubai.total}`;

 
  let paris = {
    name:'paris',
    CustPerH:[],
    min:20,
    max:38,
    AvgCookie:2.3,
    coPerCustomer:[],
    total:0,

    CustPerHour:function(){
        for(let i=0;i<hours.length;i++){
        this.CustPerH.push(Math.floor(Math.random()*(this.max-this.min+1)+this.min)) 
        console.log(this.CustPerH) ;
        }
    },
    CookiePerHour:function(){
        for(let i=0;i<hours.length;i++){
        
            this.coPerCustomer.push(Math.floor(this.CustPerH[i]*this.AvgCookie));
            console.log(this.coPerCustomer);
            this.total+=this.coPerCustomer[i];


        }
    }


}


paris.CustPerHour()
paris.CookiePerHour()
let parent3 = document.getElementById('paris');
let header4 = document.createElement('h2');
parent3.appendChild(header4)
header4.textContent=paris.name
let undorderedList3 =document.createElement('ul');
parent3.appendChild(undorderedList3);
for(let i=0; i<hours.length;i++){
    let listItem3 = document.createElement('li');
    undorderedList3.appendChild(listItem3);
    console.log(listItem3);
    listItem3.textContent = hours[i]+":"+paris.coPerCustomer[i]+"cookies";
  }
  let listItem5 = document.createElement('li');
  undorderedList3.appendChild(listItem5);
  listItem5.textContent =` total:${paris.total}`;

  let lima = {
    name:'lima',
    CustPerH:[],
    min:2,
    max:16,
    AvgCookie:4.6,
    coPerCustomer:[],
    total:0,

    CustPerHour:function(){
        for(let i=0;i<hours.length;i++){
        this.CustPerH.push(Math.floor(Math.random()*(this.max-this.min+1)+this.min)) 
        console.log(this.CustPerH) ;
        }
    },
    CookiePerHour:function(){
        for(let i=0;i<hours.length;i++){
        
            this.coPerCustomer.push(Math.floor(this.CustPerH[i]*this.AvgCookie));
            console.log(this.coPerCustomer);
            this.total+=this.coPerCustomer[i];


        }
    }


}


lima.CustPerHour()
lima.CookiePerHour()
let parent4 = document.getElementById('paris');
let header5 = document.createElement('h2');
parent4.appendChild(header5)
header5.textContent=lima.name
let undorderedList4 =document.createElement('ul');
parent4.appendChild(undorderedList4);
for(let i=0; i<hours.length;i++){
    let listItem4 = document.createElement('li');
    undorderedList4.appendChild(listItem4);
    console.log(listItem4);
    listItem4.textContent = hours[i]+":"+lima.coPerCustomer[i]+"cookies";
  }
  let listItem6 = document.createElement('li');
  undorderedList4.appendChild(listItem6);
  listItem6.textContent =` total:${lima.total}`;

