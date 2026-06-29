// Draft only — no backend or external connection. Submitting the lead form
// just swaps it for the thank-you message, exactly like the design prototype.
document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('leadForm')
  var thanks = document.getElementById('thanks')
  if (!form || !thanks) return
  form.addEventListener('submit', function (e) {
    e.preventDefault()
    form.hidden = true
    thanks.hidden = false
  })
})
