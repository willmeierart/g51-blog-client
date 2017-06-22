$(() => {
  const getBlogPosts = (() => {
    const url = 'http://localhost:3000/api/v1/posts'
    const request = new Request(url, {
      method: 'GET',
      mode: 'cors'
    })
    getAllBlogPosts(request)
  })()

  function getAllBlogPosts(request) {
    fetch(request)
      .then(returnPosts)
      .catch(throwError)
  }

  function returnPosts(data) {
    const posts = data.json()
    posts.then((posts) => {
      showBlogPosts(posts)
    })
  }

  function throwError() {
    console.log('error')
  }

  function showBlogPosts(posts) {
    const source = $('#blog-content-template').html()
    const template = Handlebars.compile(source)
    const html = template({
      posts
    })
    $('.blog-content').html(html)
  }
})
