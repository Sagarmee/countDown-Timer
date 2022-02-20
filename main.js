const Day = document.querySelector("#days")
const Hour = document.querySelector("#hours")
const Min = document.querySelector("#minutes")
const Sec = document.querySelector("#sec")

const newYearDate = '1 jan 2023'

function countYear(){

    const newYear = new Date(newYearDate)
    const todayDate = new Date()

    const findSecond = (newYear-todayDate) / 1000

    const day = Math.floor(findSecond / 3600 / 24);
    const hour = Math.floor(findSecond / 3600) % 24;
    const min = Math.floor(findSecond / 60) % 60;
    const sec = Math.floor(findSecond) % 60;

    Day.innerHTML = day
    Hour.innerHTML = hour
    Min.innerHTML = min
    Sec.innerHTML = sec
}


countYear()
setInterval(countYear,1000)
