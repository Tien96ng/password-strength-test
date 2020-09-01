// Grab value of input.
var password = $("#password")
var progressBar = $("#progress-bar")
var strength = 1
const minLength = 8

// This array has regex for the following to be met at least once.
var requirementsArr = [
    /[0-9]/,       // Number
    /[!@#$%^&*]/,   // Symbol
    /[a-z]/,        // Lowercase
    /[A-Z]/         // Uppercase
]

function debug() {
    $("#myBtn").click(function(){
        var str = password.val()
        console.log(str)
    })
}


$(document).ready(() => {
    debug()
    
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