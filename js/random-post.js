function getRandomPosts(numPosts) {
    const apiKey = 'AIzaSyAXOGhTqzZAcPWt91G-XdX8srcBhIJH8To';

    const blogId = '6079813804505380240';

    const apiUrl = `https://www.googleapis.com/blogger/v3/blogs/${blogId}/posts?key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const posts = data.items;

            const randomPosts = [];
            for (let i = 0; i < numPosts; i++) {
                const randomIndex = Math.floor(Math.random() * posts.length);
                randomPosts.push(posts[randomIndex]);
            }

            const postContainer = document.getElementById('post-container');
            postContainer.innerHTML = '';
            randomPosts.forEach(post => {
                    // Extract the first image from the post content
                    const image = post.content.match(/<img[^>]*src="([^"]+)"[^>]*>/);
                    const imageUrl = image ? image[1] : ''; // Extracted image URL
                    if (imageUrl) {
                        // Display the image with a link to the post
                        postContainer.innerHTML += `
                            <div class="rndPostContainer">
                                <a href="${post.url}">
                                <span> ${post.title}</span>
                                    <div class="rel-image nnxt">
                                        <img src="${imageUrl}" alt="${post.title}">
                                    </div>
                                </a>
                            </div>
                        `;
                    }
            });
        })
        .catch(error => {
            console.error('Error fetching posts:', error);
        });

}

// Call the function to fetch and display multiple random posts when the page loads
window.onload = function() {
    getRandomPosts(3); // Change the number to display different numbers of random posts
};
