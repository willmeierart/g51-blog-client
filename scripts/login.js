redirectIfLoggedIn()

$(() => {
  $('form').submit((event) => {
    event.preventDefault()
    const email = $('#email').val()
    const password = $('#password').val()
    const user = {
      "email": email,
      "password": password
    }
    fetchPost(`${AUTH_URL}/login`, user)
      .then(result => {
        console.log(result)
        setIdRedirect(result)
      }).catch(error => {
        console.log(error)
        $('.error-message').text(error.message)
        $('#error-modal').modal('open')
      })
  })
})
