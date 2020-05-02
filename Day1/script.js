        
        let displayCount=document.querySelector("#display-counts");
        
        let count=0;

        //function to change counter text color 
        const changeCounterColor=()=>{
            if(count>=1){
            displayCount.style.color="green";
            }
            else if(count==0){
                displayCount.style.color="black";
            }
            else{
            displayCount.style.color="red";
            }
        }
        //function to increment count
        const Increment=()=>{
            count++;
            displayCount.innerHTML=count;
            changeCounterColor();
        }
        Increment();

        //fuction to decrement counts
        const Decrement=()=>{
            count--;
            displayCount.innerHTML=count;
            changeCounterColor()
        }
        Decrement();