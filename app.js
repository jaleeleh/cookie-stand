'use scrpit'
let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm',];
// let th=['th1','th2','th3','th4','th5','th6','th7','th8','th9','th10','th11','th12','th13','th14',];
// let td=['td1','td2','td3','td4','td5','td6','td7','td8','td9','td10','td11','td12','td13','td14',];
// let tdd=['tdd1','tdd2','tdd3','tdd4','tdd5','tdd6','tdd7','tdd8','tdd9','tdd10','tdd11','tdd12','tdd13','tdd14',];
let totalEachHour=[];
let shops=[];
function Cookieshopes(name,min,max,AvgCookie){
    this.name=name;
    this.min=min;
    this.max=max;
    this.AvgCookie=AvgCookie;
    this.CustPerH=[];
    this.coPerCustomer=[];
    this.total=0;
    shops.push(this)
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
    
     
      
     let seattle=new Cookieshopes('seattle',32,65,6.3);
     let tokyo= new Cookieshopes('tokyo',3,24,1.2);
     let dubai=new Cookieshopes('dubai',11,38,3.7);
     let paris=new Cookieshopes('paris',20,38,2.3);
     let lima=new Cookieshopes('lima',2,16,4.6);




     

    
     
     
        let parent1=document.getElementById('parent');
        let table1= document.createElement('table');
        parent1.appendChild(table1);
      
        function headerRow(){
        let Row1 = document.createElement('tr');
        table1.appendChild(Row1);
        let th0 = document.createElement('th');
        Row1.appendChild(th0);
        th0.textContent = 'shopLocation';
    
        for(let i=0;i<hours.length;i++){
           let th1= document.createElement('th');
            Row1.appendChild(th1);
            th1.textContent = `${hours[i]}`;}

            let th15 = document.createElement('th');
        Row1.appendChild(th15);
        th15.textContent = 'Daily Location Total';
        }
        
        Cookieshopes.prototype.render=function () {

        let valueRow = document.createElement('tr');
        table1.appendChild(valueRow);

        let td0 = document.createElement('td');
        valueRow.appendChild(td0);
        td0.textContent =this.name;
  
        for(let i=0;i<hours.length;i++){
        let td = document.createElement('td');
       valueRow.appendChild(td);
       td.textContent = `${this.coPerCustomer[i]}`;
        }

        let td15 = document.createElement('td');
        valueRow.appendChild(td15);
        td15.textContent =this.total;
      }
    

      function tableFooter(){
        let valueRow2 = document.createElement('tr');
        valueRow2.setAttribute('id','foot');
        table1.appendChild(valueRow2);

        let td1 = document.createElement('th');
        valueRow2.appendChild(td1);
        td1.textContent ='total';
           let tatalOfTotal=0;
        for(let i=0;i<hours.length;i++){
          let totalPerhour=0;
          for(let j=0;j<shops.length;j++)
          {
           totalPerhour+=shops[j].coPerCustomer[i];
           tatalOfTotal+=shops[j].coPerCustomer[i];
           }let tdd = document.createElement('th');
            valueRow2.appendChild(tdd);
            tdd.textContent = totalPerhour;
          }
          let tdd15 = document.createElement('th');
            valueRow2.appendChild(tdd15);
            tdd15.textContent =tatalOfTotal;
        }
        ///////for intering new data from form.
      
        let formOfShops=document.getElementById('cookiesShops');
        formOfShops.addEventListener('submit',addingForms);
   
        function addingForms(event){
           event.preventDefault();
           let name=event.target.nameField.value;
           console.log(name);
           let minC=parseInt(event.target.minCusomer.value);
           console.log(minC)
           
           let maxC=parseInt(event.target.maxCusomer.value);
           console.log(minC+maxC)
         
           let AvgCookie =event.target.avgCookies.value;
           console.log(AvgCookie);
   
           let newShop= new Cookieshopes(name,minC,maxC,AvgCookie);
   
            newShop.CustPerHour();
            newShop.CookiePerHour();
             // newShop.render();
             // console.log(newShop)
             // console.log(shops)
   
          //  let emptyPage = document.getElementById('parent');
          //  emptyPage.textContent='';
   
           
           
          //   for(let i=0;i<shops.length;i++){
          //    shops[i].CustPerHour();
          //    shops[i].CookiePerHour();
          //    shops[i].render();
   
          //  }
          let i=shops.length-1;
          shops[i].render();
          document.getElementById('foot').remove();
           tableFooter();
          
        }
   




          headerRow();
          for(let i=0;i<shops.length;i++){

            shops[i].CustPerHour();
            shops[i].CookiePerHour();
            shops[i].render();

          }
    
          tableFooter();
    
    

        


    

