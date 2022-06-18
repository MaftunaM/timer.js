window.addEventListener('load', function (e) {
    // body
    var span1 = document.querySelector('.item-1 span');
    var btn1 = document.querySelector('.btn1');
    var stop1 = document.querySelector('.stop1');
    var reset1 = document.querySelector('.reset1');
    var span2 = document.querySelector('.item-2 span');
    var btn2 = document.querySelector('.btn2');
    var stop2 = document.querySelector('.stop2');
    var reset2 = document.querySelector('.reset2');
    var time1 = 1000


    /* 
    span,
    btn,
    stop,
    reset
    time,
    interTime
    */
    class Timer {
        constructor(spanAll, btn, stop, reset, inerTime, time, resetTime) {
            this.resetTime = resetTime
            this.spanAll = spanAll
            this.btn = btn
            this.stop = stop
            this.reset = reset
            this.time = time
            this.inerTime = inerTime

            spanAll.innerHTML = time

            function timerOptions() {
                var interval = setInterval(function () {
                    spanAll.innerHTML = time--
                    time === -1 ? clearInterval(interval) : null
                }, inerTime)

                stop.addEventListener('click', function () {
                    clearInterval(interval)

                    btn.disabled = false
                })
            }

            reset.addEventListener('click', function () {
                time = resetTime
                spanAll.innerHTML = time
            })

            btn.addEventListener('click', function () {
                timerOptions()

                this.disabled = true
            })

        }
    }

    var oneTime = new Timer(span1, btn1, stop1, reset1, 1000, time1, time1)
    var twoTime = new Timer(span2, btn2, stop2, reset2, 10, time1, time1)
});
// function timerOptions() {
//     var interval = setInterval(function () {
//         span.innerHTML = time1--
//         time1 === -1 ? clearInterval(interval) : null
//     }, 10)

//     stop1.addEventListener('click', function () {
//         clearInterval(interval)

//         btn1.disabled = false
//     })
// }

// reset1.addEventListener('click', function () {
//     time1 = 1000
//     span.innerHTML = time1
// })

// btn1.addEventListener('click', function () {
//     timerOptions()

//     this.disabled = true
// })