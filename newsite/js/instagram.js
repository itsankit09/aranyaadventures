
var instagramPosts = [];
var fetchUrl = 'https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=IGQVJXb2RtR0tpZATNmb0l2T2ZAlbk5RNENCM1BfNkg0TDg4dGQ1X28xcmFBeTRiVnh4dWVhd2hveXNtU3pqSjhUVjRSUEZAsd1V2OUZARaEY2enpMdWg4SFBxVlpRNlUwNGxESDBQNFBrVjFuVnU3Q0xJYwZDZD'
var postsCount = 0;
var currentDisplayPostcount = 0;

function populatePosts(posts){
    const instaGrid = document.getElementsByClassName("instagram-grid")[0];
    let  child = '';
    const len = posts.length;
    const maxPost = currentDisplayPostcount;
    posts.forEach((post, i)=> {
        try{
            if(i<maxPost)
                child += createNewPost(post.media_url, post.caption, post.permalink)
        }catch(e){

        }
    })
    instaGrid.innerHTML = child;
}

function createNewPost(image, content, hyperlink) {
    return `
        <div class="element-item post">
            <a class="popup-with-move-anim" href="${hyperlink}">
                <div class="element-item-overlay">
                    <span><div>${content.normalize()}</div></span>
                </div>
                <img src="${image}" alt="alternative">
            </a>
        </div>
    `
}

function fetchNewPosts(){
    fetch(fetchUrl)
    .then(response => response.json())
    .then(data => {
        instagramPosts = [...instagramPosts, ...data.data];
        postsCount = instagramPosts.length;
        fetchUrl = data.paging.next;
        populatePosts(instagramPosts);
    })
}

function getPosts() {
    currentDisplayPostcount += 12
    if(currentDisplayPostcount > postsCount){
        fetchNewPosts();
    }else{
        populatePosts(instagramPosts)
    }
}