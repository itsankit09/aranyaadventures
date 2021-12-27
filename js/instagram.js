var instagramPosts = [];
var fetchUrl =
  "https://graph.instagram.com/me/media?fields=caption,id,media_type,media_url,permalink,thumbnail_url,timestamp,username&access_token=IGQVJXNFRLaTREWmt1My02eVNXUF9fWHN2T2RoOEp4NktRMHlKTmp5RElrMFN0SW9JMnJWVHE1cFhMZAmgzclhhY1hjZAl82Yi15aTJET0g4UWNIei01enE1eDFrVllnYXNaTHVNYkpRU3V2WHA5a0k0YgZDZD";
var postsCount = 0;
var currentDisplayPostcount = 0;

function populatePosts(posts) {
  const instaGrid = document.getElementsByClassName("instagram-grid")[0];
  let child = "";
  const len = posts.length;
  var maxPost = currentDisplayPostcount;
  posts.forEach((post, i) => {
    try {
      if (i < maxPost) {
        if (post.media_type === "VIDEO") {
          // child += createNewVideoPost(post.media_url, post.caption, post.permalink)
          maxPost++;
        } else {
          child += createNewPost(post.media_url, post.caption, post.permalink);
        }
      }
    } catch (e) {}
  });
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
    `;
}

function createNewVideoPost(image, content, hyperlink) {
  return `
        <div class="element-item post">
            <a class="popup-with-move-anim" >
                <div class="element-item-overlay">
                    <span><div>${content.normalize()}</div></span>
                </div>
                <video width="480" height="480" controls autoplay>
                    <source src="${image}" type="video/mp4"/>
                </video>
            </a>
        </div>
    `;
}

function fetchNewPosts() {
  fetch(fetchUrl)
    .then((response) => response.json())
    .then((data) => {
      const imagePosts = data.data.filter(
        (post) => post.media_type !== "VIDEO"
      );
      instagramPosts = [...instagramPosts, ...imagePosts];
      postsCount = instagramPosts.length;
      fetchUrl = data.paging.next;
      populatePosts(instagramPosts);
    });
}

function getPosts() {
  currentDisplayPostcount += 12;
  if (currentDisplayPostcount > postsCount) {
    fetchNewPosts();
  } else {
    populatePosts(instagramPosts);
  }
}
