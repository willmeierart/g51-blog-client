$(()=>{
  showUserSpecFunc($('.edit-btn'))
})


$(".button-collapse").sideNav()
$('#error-modal').modal({
  dismissible: true, // Modal can be dismissed by clicking outside of the modal
  opacity: .5, // Opacity of modal background
  inDuration: 300, // Transition in duration
  outDuration: 200, // Transition out duration
  startingTop: '4%', // Starting top style attribute
  endingTop: '10%', // Ending top style attribute
  ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters
  }
})

showUserSpecFunc($('.edit-btn'))


const API_URL = getHostURL();
const AUTH_URL = `${API_URL}auth`


// $.ajaxSetup({
//     crossDomain: true,
//     xhrFields: {
//         withCredentials:true
//     }
// })

function fetchPost(url, req) {
  const format = new Request(url, {
    method: 'POST',
    body: JSON.stringify(req),
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
  return makePostReq(format)
}

function makePostReq(req) {
  return fetch(req).then(confirmation)

  function confirmation(res) {
    return res.json().then((json) => {
      if (res.status != 200) {
        throw json
      } else {
        return json
      }
    })
  }
}

function redirectIfNotLoggedIn() {
  if (!localStorage.user_id) {
    window.location = '/login.html'
  }
}

(function toggleIfLoggedIn() {
  if (localStorage.user_id) {
    $('.logged-out').hide()
    $('.logged-in').show()
  } else {
    $('.logged-out').show()
    $('.logged-in').hide()
  }
})()

showUserSpecFunc($('.edit-btn'))

function showUserSpecFunc(el){
  console.log(el);
  console.log(el.closest('.blog-post').attr('data-id'))
  if (localStorage.user_id == el.closest('.blog-post').attr('data-id')){
    console.log(true)
    el.show()
  }
}


function redirectIfLoggedIn() {
  if (localStorage.user_id) {
    window.location = '/index.html'
  }
}

function setIdRedirect(result) {
  localStorage.user_id = result.id
  window.location = ' '
}

$('.logout-button').click((e) => {
  // e.preventDefault()
  logOut()
  // window.reload()
})

function logOut() {
  localStorage.removeItem('user_id')
  fetch(`${AUTH_URL}/logout`, {
      method: 'GET',
      credentials: 'include'
    }).then((res) => {
      console.log(res.json())
      window.location = '/login.html'
    })
    .catch((err) => {
      console.log(err)
    })
}


function getHostURL() {
  if (window.location.host.indexOf('localhost') != -1) {
    return 'http://localhost:3000/';
  } else {
    // return 'https://sticker-mania.herokuapp.com';
  }
}
