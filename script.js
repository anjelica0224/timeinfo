dayjs.extend(dayjs_plugin_timezone)

const tzSpan = document.getElementById("timezone")
const timeSpan = document.getElementById("current-time")
const dateSpan = document.getElementById("current-date")
const date = dayjs().format("dddd, D MMMM, YYYY")
dateSpan.textContent = date

const x = function() {
    const time = dayjs().format("HH:mm:ss")
    timeSpan.textContent = time
}

x()

setInterval(x, 1000)

const timezone = dayjs.tz.guess().split('/').join(' / ')
tzSpan.textContent = timezone
