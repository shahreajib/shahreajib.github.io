fetch('list.json', {
    headers: {
      'Cache-Control': 'no-cache'
    }
})
    .then(response => response.json())
    .then(data => {
        const memeList = document.getElementById('meme-list');

        data.forEach(meme => {
            // Replace newline characters with <br/> tags
            meme.description = meme.description.replace(/\n/g, '<br/>');

            // Create meme container
            const memeContainer = document.createElement('div');
            memeContainer.classList.add('rounded', 'overflow-hidden', 'shadow-lg', 'bg-white');

            if (meme.type === 'i') { // If image type
                // Create image element
                const image = document.createElement('img');
                image.src = meme.src;
                image.alt = 'Meme Image';
                image.classList.add('h-auto');
                image.width = 300;

                // Append image to meme container
                memeContainer.appendChild(image);
            } else if (meme.type === 'v') { // If video type
                // Create video element
                const video = document.createElement('video');
                video.src = meme.src;
                video.controls = true;
                video.classList.add('h-auto');
                video.width = 300;

                // Append video to meme container
                memeContainer.appendChild(video);
            }

            // Create description element
            const description = document.createElement('p');
            description.innerHTML = meme.description; // Use innerHTML to render <br/> tags
            description.classList.add('p-4');

            // Append description to meme container
            memeContainer.appendChild(description);

            // Append meme container to meme list
            memeList.appendChild(memeContainer);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
