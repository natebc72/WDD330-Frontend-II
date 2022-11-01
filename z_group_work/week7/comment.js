const commentList = [
    {name: "Bechler Falls",
     date: new Date(),
     content: "Don't 'fall' in!",
     type: "comment",
    },
    {name: "Teton Canyon",
        date: new Date(),
        content: "A secret wonder",
        type: "comment",
       },
    {name: "Denanda Falls",
    date: new Date(),
    content: "Fall in love with the sights",
    type: "comment",
    },
]

export default class Comments {
    constructor(elementId) {
        this.parentElement = document.getElementById(elementId);
        this.type = "hike"
    }
    getAllComments() {
        return commentList
    }
    showCommentList(){
        this.parentElement.innerHTML = ""
        renderCommentList(this.parentElement, this.getAllComments())
    }
    getFilterByName(hikeName) {
        return this.getAllComments().filter(comment => comment.name === hikeName);
    }
}

function renderCommentList(parent, comments) {
    comments.forEach(comment => {
        parent.appendChild(renderOneComment(comment))
    })
}

function renderOneComment(comment) {
    const item = document.createElement('li');
    item.classList.add('comment');
    // setting this to make getting the details for a specific hike easier later.
    item.setAttribute('data-type', comment.type);
    item.innerHTML = ` <h2>${comment.name}</h2>
  <div>
          <div>
              <h3>Hike Comment</h3>
              <p>${comment.content}</p>
              <p>${comment.date}</p>
          </div>
  </div>`;
  
    return item;
  }