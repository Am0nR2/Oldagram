const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "./images/avatar-vangogh.jpg",
        post: "./images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "./images/avatar-courbet.jpg",
        post: "./images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "./images/avatar-ducreux.jpg",
        post: "./images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const mainArea = document.getElementById("main-area")
function renderOldagram(){
    let string = " "
    for(let post of posts){
        string += `
        
        <section class="container">
              
                    <div class="user-info">
                        <img class="avatar" src="${post.avatar}" alt="${post.name} profile picture">
                        <div class="user-name-adress">
                            <p class="user-name">${post.name}</p>
                            <p class="user-adress">${post.location}</p>
                        </div>
                    </div>
                    
                    <img class="user-post" src="${post.post}" alt="${post.name}'s personal photo post">
                    
                    <div class="like-share-comment">
                        <img class="icons" src="./images/icon-heart.png" alt="heart icon">
                        <img class="icons" src="./images/icon-comment.png" alt="comment icon">
                        <img class="icons" src="./images/icon-dm.png" alt="dm icon">
                    </div>
    
                    <p class="comment-section bold-text">${post.likes} likes</p>
                    <p class="comment-section" ><span class="bold-text">${post.username}</span> ${post.comment}</p>
             
            </section>
        
        `
    }
    mainArea.innerHTML = string
}

renderOldagram()