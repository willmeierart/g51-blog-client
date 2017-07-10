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
      let sortedPosts = posts.sort((a,b)=>{
        return b.id - a.id
      })
      showBlogPosts(sortedPosts)
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

  // var editPostMDE = new SimpleMDE({
  //   element: $('#new-post')[0],
  //   autofocus: true,
  //   autosave: {
  //     enabled: true,
  //     uniqueId: "default",
  //     delay: 1000,
  //   },
  //   blockStyles: {
  //     bold: "__",
  //     italic: "_"
  //   },
  //   forceSync: true,
  //   hideIcons: ["guide"],
  //   indentWithTabs: false,
  //   insertTexts: {
  //     horizontalRule: ["", "\n\n-----\n\n"],
  //     image: ["![](http://", ")"],
  //     link: ["[", "](http://)"],
  //     table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
  //   },
  //   lineWrapping: true,
  //   parsingConfig: {
  //     allowAtxHeaderWithoutSpace: true,
  //     strikethrough: false,
  //     underscoresBreakWords: true,
  //   },
  //   placeholder: "Type here...",
  //   promptURLs: true,
  //   renderingConfig: {
  //     singleLineBreaks: false,
  //     codeSyntaxHighlighting: true,
  //   },
  //   shortcuts: {
  //     drawTable: "Cmd-Alt-T"
  //   },
  //   showIcons: ["code", "table"],
  //   spellChecker: false,
  //   status: ["autosave", "lines", "words", "cursor"],
  //   styleSelectedText: false,
  //   tabSize: 4,
  //   toolbar: ["bold", "italic", "strikethrough", "heading", "|", "quote", "code", "unordered-list", "ordered-list", "|", "link", "image", "|", "preview", "fullscreen", "guide"],
  //   toolbarTips: true
  // })
})
