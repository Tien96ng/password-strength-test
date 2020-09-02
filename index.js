// Grab value of input.
var password = $("#password")
var progressBar = $("#progress-bar")
var strength = 1
const minLength = 8

const passwordReq = {
    upper: new RegExp("([A-Z])"),
    lower: new RegExp("([a-z])"),
    num: new RegExp("([0-9])"),
    symbol: new RegExp('!@#$&()\\-`.+,/\"')
}

function debug() {
    $("#myBtn").click(function(){
        var str = password.val()
        console.log(str + " | " + strength)
    })
}


$(document).ready(() => {
    debug()

    $(function() {
        $(this).on("keyup", function() {
            // Used as a dynamic value for the bootstrap progress bar styling.
            var progressBarScore = 0
            var val = password.val()

            if(password.val().length >= 8) {
                strength++
                progressBarScore+=20
                progressBar.attr({
                    "style": `width: ${progressBarScore}%`,
                    "aria-valuenow": `${progressBarScore}`
                })
                console.log(`${strength} | ${progressBarScore} | Greater than 8.`)
                if (passwordReq.upper.test(val)) {
                    strength++
                    progressBarScore+=20
                    progressBar.attr({
                        "style": `width: ${progressBarScore}%`,
                        "aria-valuenow": `${progressBarScore}`
                    })
                    console.log(`${strength} | ${progressBarScore} | Contains an uppercase.`)
                }
            }

        })
    })
    
})

/*

$(() => {
        $(this).on("keyup", function() {
            var progressBarScore = 0

            if(password.length >= 8) {
                strength++
                progressBarScore+=20
                progressBar.attr("style", `width: ${progressBarScore}`)
                console.log("Greater than 8.")
            } else if (password.search(requirementsArr[0]) > 0) {
                strength++
                progressBarScore+=20
                progressBar.attr("style", `width: ${progressBarScore}`)
            } else if (password.search(requirementsArr[1]) > 0) {
                strength++
                progressBarScore+=20
                progressBar.attr("style", `width: ${progressBarScore}`)
            } else if (password.search(requirementsArr[2]) > 0) {
                strength++
                progressBarScore+=20
                progressBar.attr("style", `width: ${progressBarScore}`)
            } else if (password.search(requirementsArr[3]) > 0) {
                strength++
                progressBarScore+=20
                progressBar.attr("style", `width: ${progressBarScore}`)
            } else {
                console.log(value)
            }
        })
    })

*/