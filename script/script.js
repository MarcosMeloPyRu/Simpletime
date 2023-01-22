const hours = document.getElementsByClassName('hours')
const minutes = document.getElementsByClassName('minutes')
const seconds = document.getElementsByClassName('seconds')

const Clock = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    hr = String(hr).padStart(2,'0');
    min = String(min).padStart(2,'0');
    sec = String(sec).padStart(2,'0');

    hours[0].textContent = hr;
    minutes[0].textContent = min;
    seconds[0].textContent = sec;
})