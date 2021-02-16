'use scrpit'
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];
let th=['th1','th2','th3','th4','th5','th6','th7','th8','th9','th10','th11','th12','th13','th14',];
let td=['td1','td2','td3','td4','td5','td6','td7','td8','td9','td10','td11','td12','td13','td14',];
let tdd=['tdd1','tdd2','tdd3','tdd4','tdd5','tdd6','tdd7','tdd8','tdd9','tdd10','tdd11','tdd12','tdd13','tdd14',];
let totalEachHour=[];
function Cookieshopes(name,min,max,AvgCookie){
    this.name=name;
    this.min=min;
    this.max=max;
    this.AvgCookie=AvgCookie;
    this.CustPerH=[];
    this.coPerCustomer=[];
    this.total=0;
}



      Cookieshopes.prototype.CustPerHour=function(){
        for(let i=0;i<hours.length;i++){
         this.CustPerH.push(Math.floor(Math.random()*(this.max-this.min+1)+this.min))}
      }
      Cookieshopes.prototype.CookiePerHour=function(){
        for(let i=0;i<hours.length;i++){
                        this.coPerCustomer.push(Math.floor(this.CustPerH[i]*this.AvgCookie));
                        this.total+=this.coPerCustomer[i];
                     }
                    
      }
    //    totalPerHour();
    //    function totalPerHour(){
    //     for(let i=0;i<hours.length;i++){
    //    totalEachHour.push(seattle.coPerCustomer[i]+tokyo.coPerCustomer[i]+dubai.coPerCustomer[i]+paris.coPerCustomer[i]+lima.coPerCustomer[i]);
    //     }
    //     console.log();
    //   }
     
      console.log(totalEachHour);
     let seattle=new Cookieshopes('seattle',32,65,6.3);
     let tokyo= new Cookieshopes('tokyo',3,24,1.2);
     let dubai=new Cookieshopes('dubai',11,38,3.7);
     let paris=new Cookieshopes('paris',20,38,2.3);
     let lima=new Cookieshopes('lima',2,16,4.6);

     seattle.CustPerHour()
     seattle.CookiePerHour()
     console.log(seattle);
     tokyo.CustPerHour()
     tokyo.CookiePerHour()
     console.log(tokyo);
     dubai.CustPerHour()
     dubai.CookiePerHour()
     console.log(dubai);
     paris.CustPerHour()
     paris.CookiePerHour()
     console.log(paris);
     lima.CustPerHour()
     lima.CookiePerHour()

     console.log(lima);
     
     
        let parent1=document.getElementById('parent');
        let table1= document.createElement('table');
        parent1.appendChild(table1);
        console.log(parent1);
        let Row1 = document.createElement('tr');
        table1.appendChild(Row1);
        console.log(Row1);
        let th0 = document.createElement('th');
        Row1.appendChild(th0);
        th0.textContent = 'shopLocation';
    
        for(let i=0;i<hours.length;i++){
            th[i] = document.createElement('th');
            Row1.appendChild(th[i]);
            th[i].textContent = `${hours[i]}`;}
            let th15 = document.createElement('th');
        Row1.appendChild(th15);
        th15.textContent = 'Daily Location Total';

        
        Cookieshopes.prototype.render=function () {

        let valueRow = document.createElement('tr');
        table1.appendChild(valueRow);

        let td0 = document.createElement('td');
        valueRow.appendChild(td0);
        td0.textContent =this.name;
  
        for(let i=0;i<hours.length;i++){
        td[i] = document.createElement('td');
       valueRow.appendChild(td[i]);
       td[i].textContent = `${this.coPerCustomer[i]}`;
        }

        let td15 = document.createElement('td');
        valueRow.appendChild(td15);
        td15.textContent =this.total;
      }
      seattle.render();
        tokyo.render();
        dubai.render();
        paris.render();
        lima.render();

        let valueRow2 = document.createElement('tr');
        table1.appendChild(valueRow2);

        let td01 = document.createElement('td');
        valueRow2.appendChild(td01);
        td01.textContent ='total';

        for(let i=0;i<hours.length;i++){
            tdd[i] = document.createElement('td');
           valueRow2.appendChild(tdd[i]);
           tdd[i].textContent = seattle.coPerCustomer[i]+tokyo.coPerCustomer[i]+dubai.coPerCustomer[i]+paris.coPerCustomer[i]+lima.coPerCustomer[i];
            }

            let tdd15 = document.createElement('td');
            valueRow2.appendChild(tdd15);
            tdd15.textContent =seattle.total+tokyo.total+dubai.total+paris.total+lima.total;




    
    
    
    

        


    

