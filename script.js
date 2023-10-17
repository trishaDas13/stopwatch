let time = document.querySelectorAll('span')
let btn = document.querySelectorAll('button');
let timer = true; 
let hour = 0, minute = 0, second = 0, counter = 0;

//todo ---------- To start the stopwatch ----------
btn[0].addEventListener('click', function(e){
    timer = true;
    setInterval(() => {
        if(timer == true){
            counter++;
            if(counter == 100){
                second++;
                counter = 0;
            }
            else if(second == 60){
                minute++;
                second = 0;
            }
            else if(minute == 60){
                hour++;
                minute = 0;
                second = 0;
            }
            //* adding 0 at the start
            counter = String(counter).padStart('2','0');
            second = String(second).padStart('2','0');
            minute = String(minute).padStart('2','0');
            hour = String(hour).padStart('2','0');

            //* updating the stopwatch
            time[3].innerHTML = counter;
            time[2].innerHTML = second;
            time[1].innerHTML = minute;
            time[0].innerHTML = hour;
        }        
    }, 10);    
});

//todo ---------- To stop the stopwatch ----------
btn[1].addEventListener('click', function(){
        timer = false;
});

//todo ---------- To reset the stopwatch ----------
btn[2].addEventListener('click', function(){
    timer = false;
    hour = 0, minute = 0, second = 0, counter = 0;

    time[3].innerText = "00";
    time[2].innerText = "00";
    time[1].innerText = "00";
    time[0].innerText = "00";      
});