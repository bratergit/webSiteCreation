window.onload = function() {
    var news = [
        {
            title: "Good News 1",
            content: "This is the content for Good News 1.",
            image: "URL_to_stock_image_1"
        },
        {
            title: "Good News 2",
            content: "This is the content for Good News 2.",
            image: "URL_to_stock_image_2"
        },
        {
            title: "Good News 3",
            content: "This is the content for Good News 3.",
            image: "URL_to_stock_image_3"
        }
    ];

    var newsDiv = document.getElementById('news');

    if (!newsDiv) {
        console.error("Element with ID 'news' not found");
        return;
    }

    for (var i = 0; i < news.length; i++) {
        var newsItem = document.createElement('div');
        newsItem.className = 'news-item';

        var title = document.createElement('h2');
        title.textContent = news[i].title;
        newsItem.appendChild(title);

        var image = document.createElement('img');
        image.src = news[i].image;
        newsItem.appendChild(image);

        var content = document.createElement('p');
        content.textContent = news[i].content;
        newsItem.appendChild(content);

        newsDiv.appendChild(newsItem);
    }
};

