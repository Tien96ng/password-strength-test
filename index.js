// Grab value of input.
var password = $("#password")
var progressBar = $("#progress-bar").popover()

// Grab progress bar by ID to manipulate later.
var progressTag = document.getElementById("progress-bar")

// Array of every password requirement in Regex form.
const requirementArr = [
    "([A-Z])",
    "([a-z])",
    "([0-9])",
    '[!@#$&()\\-`.+,/\"]'
]


// Run when page loads.
$(document).ready(() => {

    $(function() {
        
        // using event handler when the user releases their key.
        $(this).on("keyup", function() {

            // Used as a dynamic value for the bootstrap progress bar styling and text.
            var progressBarScore = 0
            var val = password.val()
            // Variable to determine color via class string in bootstrap.
            var color = ""

            // Created a local function to reduce lines of code and repetition.
            function updateProgress() {
                // Updates the bar by 20% because there are 5 total requirements.
                progressBarScore += 20
                // Updates the bootstrap progress bar depending on which requirements have been met.

                // Condition to set color according to %.
                if(progressBarScore === 100) {
                    color = "bg-success"
                } else if(progressBarScore === 80) {
                    color = "bg-info"
                } else if(progressBarScore === 60) {
                    color = "bg-warning"
                } else {
                    color = "bg-danger"
                }
    
                progressBar.attr({
                    "style": `width: ${progressBarScore}%`,
                    "aria-valuenow": `${progressBarScore}`,
                    "class" : `progress-bar progress-bar-striped ${color}`

                })
                // Creates a text with the bar to show a visual to user.
                progressTag.innerHTML = `${progressBarScore}%`
            }

            // First condition of 8 or more characters,
            if(val.length >= 8) {
                updateProgress()
                // Maps through each index in the requirement array.
                // Used ternary operator to determine if there is a match with a requirement, if so run the updateProgress function.
                jQuery.map(requirementArr, (regexp) => val.match(regexp) && updateProgress())
            }

        })
    })
    
})
