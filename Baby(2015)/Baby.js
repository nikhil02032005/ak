const clickCounts = {
    Home: 0,
    Hollywood:0,
    Bollywood:0,
    Punjab:0,
    South :0,
    Web :0,
    GENREs:0,
    More:0,
    disney :0,
    netflix:0,
    amazon :0,
    jiocinema:0,
    zee5:0,
    mini:0,
    mx :0,
    sonic1:0,
    screen:0,
    sonic3:0,
    sonic2:0,
}


// Function to handle clicks on Movies, Song, Game, and End
function handleClick(page) {
    clickCounts[page]++;

    // Get the page content to display
    const pageContent = document.getElementById(`${page}-page`);
    if (page === 'Home') {
        if (clickCounts.Home === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Home === 2) {
            window.open('../index.html', '_blank');
            clickCounts.Home = 0;  // Reset click count for Movies
        }
        
    }
    if (page === 'Hollywood') {
        if (clickCounts.Hollywood === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Hollywood === 2) {
            window.open('../hollywood.html', '_blank');
            clickCounts.Hollywood = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Bollywood') {
        if (clickCounts.Bollywood === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Bollywood === 2) {
            window.open('../bollywood.html', '_blank');
            clickCounts.Bollywood = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Punjab') {
        if (clickCounts.Punjab === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Punjab === 2) {
            window.open('../Punjab.html', '_blank');
            clickCounts.Punjab = 0;  // Reset click count for Movies
        }
    }
    if (page === 'South') {
        if (clickCounts.South === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.South === 2) {
            window.open('../south.html', '_blank');
            clickCounts.South = 0;  // Reset click count for Movies
        }
    }
    if (page === 'Web') {
        if (clickCounts.Web  === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.Web  === 2) {
            window.open('../web.html', '_blank');
            clickCounts.Web = 0;  // Reset click count for Movies
        }
    }
    if (page === 'GENREs') {
        if (clickCounts.GENREs === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.GENREs === 2) {
            window.open('../movies.html', '_blank');
            clickCounts.GENREs = 0;  // Reset click count for Movies
        }
    }
    if (page === 'More') {
        if (clickCounts.More === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.More === 2) {
            window.open('../movies.html', '_blank');
            clickCounts.More = 0;  // Reset click count for Movies
        }
    }
    if (page === 'disney') {
        if (clickCounts.disney === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.disney === 2) {
            window.open('../disney.html', '_blank');
            clickCounts.disney = 0;  // Reset click count for Movies
        }
    }
    if (page === 'netflix') {
        if (clickCounts.netflix === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.netflix === 2) {
            window.open('../Netflix.html', '_blank');
            clickCounts.netflix = 0;  // Reset click count for Movies
        }
    }

    if (page === 'amazon') {
        if (clickCounts.amazon === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.amazon  === 2) {
            window.open('../amazon.html', '_blank');
            clickCounts.amazon  = 0;  // Reset click count for Movies
        }
    }
    if (page === 'jiocinema') {
        if (clickCounts.jiocinema === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.jiocinema === 2) {
            window.open('../jiocinema.html', '_blank');
            clickCounts.jiocinema = 0;  // Reset click count for Movies
        }
    }
    if (page === 'zee5') {
        if (clickCounts.zee5 === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.zee5 === 2) {
            window.open('../zee5.html', '_blank');
            clickCounts.zee5 = 0;  // Reset click count for Movies
        }
    }
    if (page === 'mini') {
        if (clickCounts.mini === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.mini === 2) {
            window.open('../mini tv.html', '_blank');
            clickCounts.mini = 0;  // Reset click count for Movies
        }
    }
    if (page === 'mx') {
        if (clickCounts.mx === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts. mx === 2) {
            window.open('../mx.html', '_blank');
            clickCounts. mx = 0;  // Reset click count for Movies
        }
    }
    if (page === 'sonic1') {
        if (clickCounts.sonic1 === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts.sonic1 === 2) {
            window.open('Baby1.html', '_blank');
            clickCounts. sonic1 = 0;  // Reset click count for Movies
        }
    }
    if (page === 'sonic2') {
        if (clickCounts.sonic2 === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts. sonic2 === 2) {
            window.open('Baby2.html', '_blank');
            clickCounts. sonic2 = 0;  // Reset click count for Movies
        }
    }
    if (page === 'sonic3') {
        if (clickCounts.sonic3 === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts. sonic3 === 2) {
            window.open('Baby3.html', '_blank');
            clickCounts. sonic3 = 0;  // Reset click count for Movies
        }
    }



    if (page === 'screen') {
        if (clickCounts.screen === 1) {
            window.open("https://www.example.com", "_blank");
        } else if (clickCounts. screen === 2) {
            window.open('movies.html', '_blank');
            clickCounts. screen = 0;  // Reset click count for Movies
        }
    }
}
        // When the thumbnail is clicked, show the video player
        document.getElementById("thumbnail").addEventListener("click", function() {
            // Hide the thumbnail image
            document.getElementById("thumbnail").style.display = "none";
            
            // Show the video player
            document.getElementById("videoPlayerContainer").style.display = "block";
            
            // Play the video
            const video = document.getElementById("videoPlayer");
            video.play();
        });
        