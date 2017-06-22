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
    fetchPost(`${AUTH_URL}/login`, user)
      // login(user)
      .then(result => {
        setIdRedirect(result)
      }).catch(error => {
        console.log(error)
        $('.error-message').text(error.message)
        $('#error-modal').modal('open')
      })
  })
  // function login(user){
  //     return $.post(`${AUTH_URL}/login`, user)
  // }


})
