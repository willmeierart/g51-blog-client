redirectIfNotLoggedIn()
$(() => {
  $('.new-post').submit((e) => {
    console.log(document.localStorage.user_id)
    e.preventDefault()
    const url = `${API_URL}api/v1/posts`
    const title = $('#new-post-title').val()
    const content = $('#new-post-content').val()
    // const user_id =
    const postItself = {
      title,
      content,
      user_id
    }
    console.log(postItself)
    fetchPost(url, postItself)
    simplemde.clearAutosavedValue()
    window.location = `/index.html`
  })





  var simplemde = new SimpleMDE({
    element: $('#new-post')[0],
    autofocus: true,
    autosave: {
      enabled: true,
      uniqueId: "auto",
      delay: 1000,
    },
    blockStyles: {
      bold: "__",
      italic: "_"
    },
    forceSync: true,
    hideIcons: ["guide"],
    indentWithTabs: false,
    insertTexts: {
      horizontalRule: ["", "\n\n-----\n\n"],
      image: ["![](http://", ")"],
      link: ["[", "](http://)"],
      table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
    },
    lineWrapping: true,
    parsingConfig: {
      allowAtxHeaderWithoutSpace: true,
      strikethrough: false,
      underscoresBreakWords: true,
    },
    placeholder: "Type here...",
    promptURLs: true,
    renderingConfig: {
      singleLineBreaks: false,
      codeSyntaxHighlighting: true,
    },
    shortcuts: {
      drawTable: "Cmd-Alt-T"
    },
    showIcons: ["code", "table"],
    spellChecker: false,
    status: ["autosave", "lines", "words", "cursor"],
    styleSelectedText: false,
    tabSize: 4,
    toolbar: ["bold", "italic", "strikethrough", "heading", "|", "quote", "code", "unordered-list", "ordered-list", "|", "link", "image", "|", "preview", "fullscreen", "guide"],
    toolbarTips: true
  })
})
