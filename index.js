// Grab value of input.
var password = $("#password")
var progressBar = $("#progress-bar")

var progressTag = document.getElementById("progress-bar")


// Object of every password requirement.
const passwordReq = {
    upper: new RegExp("([A-Z])"),
    lower: new RegExp("([a-z])"),
    num: new RegExp("([0-9])"),
    symbol: new RegExp('[!@#$&()\\-`.+,/\"]')
}

const requirementArr = [
    "([A-Z])",
    "([a-z])",
    "([0-9])",
    '[!@#$&()\\-`.+,/\"]'
]

$(document).ready(() => {

    $(function() {
        $(this).on("keyup", function() {
            // Used as a dynamic value for the bootstrap progress bar styling.
            var progressBarScore = 0
            var val = password.val()

            function updateProgress() {
                progressBarScore += 20
                progressBar.attr({
                    "style": `width: ${progressBarScore}%`,
                    "aria-valuenow": `${progressBarScore}`,

                })
                progressTag.innerHTML = `${progressBarScore}%`
            }

            if(val.length >= 8) {
                updateProgress()
                jQuery.map(requirementArr, (regexp) => val.match(regexp) && updateProgress())
                
            }

        })
    })
    
})


/*

if(passwordReq.upper.test(val)) {
                    progressBarScore += 20
                    progressBar.attr({
                        "style": `width: ${progressBarScore}%`,
                        "aria-valuenow": `${progressBarScore}`
                    })
                }

                if(passwordReq.lower.test(val)) {
                    progressBarScore += 20
                    progressBar.attr({
                        "style": `width: ${progressBarScore}%`,
                        "aria-valuenow": `${progressBarScore}`
                    })
                }

                if(passwordReq.num.test(val)) {
                    progressBarScore += 20
                    progressBar.attr({
                        "style": `width: ${progressBarScore}%`,
                        "aria-valuenow": `${progressBarScore}`
                    })
                }

                if(passwordReq.symbol.test(val)) {
                    progressBarScore += 20
                    progressBar.attr({
                        "style": `width: ${progressBarScore}%`,
                        "aria-valuenow": `${progressBarScore}`
                    })
                }

*/