redirectIfLoggedIn()
$(() => {
  $('form').submit((event) => {
    event.preventDefault()
    const email = $('#email').val()
    const password = $('#password').val()
    const user = {
      email,
      password
    }
    console.log(user);
    fetchPost(`${AUTH_URL}/signup`, user)
      .then(result => {
        setIdRedirect(result)
      }).catch(error => {
        console.log(error)
        $('.error-message').text(error.responseJSON.message)
        $('#error-modal').modal('open')
      })
  })
})
