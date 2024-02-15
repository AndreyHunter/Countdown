const timeDate = '2025-01-01';

function getTimeDifference(endtime) {
    const time = Date.parse(endtime) - Date.parse(new Date()),
          days = Math.floor(time / (1000 * 60 * 60 * 24)),
          hours = Math.floor(time / (1000 * 60 * 60) % 24),
          minutes = Math.floor(time / (1000 * 60) % 60),
          seconds = Math.floor(time / 1000 % 60);

    return {
        total: time,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}

function getZero(num) {
    return num < 10 ? `0${num}` : num;
}

function renderTime(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          clockInterval = setInterval(updateTime, 1000);

    updateTime();

    function updateTime() {
        const t = getTimeDifference(endtime);

        days.textContent = getZero(t.days);
        hours.textContent = getZero(t.hours);
        minutes.textContent = getZero(t.minutes);
        seconds.textContent = getZero(t.seconds);

        t.total <= 0 ? clearInterval(clockInterval) : null;
    }
}

renderTime('.clock', timeDate)
