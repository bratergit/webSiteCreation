// script.js

// Your existing window.onload function
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
        console.error("Element with ID 'news' not found.");
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
        image.alt = news[i].title; // Add alt text for accessibility
        newsItem.appendChild(image);

        var content = document.createElement('p');
        content.textContent = news[i].content;
        newsItem.appendChild(content);

        newsDiv.appendChild(newsItem);
    }
};

// Additional interactivity for the landing page
window.onload = function() {
    var mainContent = document.getElementById('mainContent');
    var toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function() {
        mainContent.style.backgroundColor = getRandomColor();
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
};
