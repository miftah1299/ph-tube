// fetch, load and show categories on the page

// create loadCategories function
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((response) => response.json())
        .then((data) => DisplayCategories(data.categories))
        .catch((error) => console.log(error));
};

// create loadVideos function
const loadVideos = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then((response) => response.json())
        .then((data) => DisplayVideos(data.videos))
        .catch((error) => console.log(error));
};

/*



*/
// create cardDemo object
const cardDemo = {
    category_id: "1001",
    video_id: "aaaa",
    thumbnail: "https://i.ibb.co/L1b6xSq/shape.jpg",
    title: "Shape of You",
    authors: [
        {
            profile_picture: "https://i.ibb.co/D9wWRM6/olivia.jpg",
            profile_name: "Olivia Mitchell",
            verified: "",
        },
    ],
    others: {
        views: "100K",
        posted_date: "16278",
    },
    description:
        "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey.",
};

// create DisplayVideos function
const DisplayVideos = (videos) => {
    const videoContainer = document.getElementById("videos");

    // add data to the page
    videos.forEach((item) => {
        console.log(item);
        // create a button
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML = `
        <figure class="h-[200px]">
            <img class="w-full h-full object-cover"
            src=${item.thumbnail}
            alt="Shoes" />
        </figure>
        <div class="px-0 py-2 flex gap-2">
            <div class="flex items-center gap-2">
                <img class="w-10 h-10 rounded-full"
                src=${item.authors[0].profile_picture}
                alt="Olivia Mitchell" />
                <div>
                    <h3 class="font-semibold">${item.title}</h3>
                    <p class="text-sm text-gray-500">${item.authors[0].profile_name}</p>
                </div>
            </div>
        </div>`;
        // add button to categoryContainer
        videoContainer.append(card);
    });
};

// {
//     "category_id": "1001",
//     "category": "Music"
// }

// create DisplayCategories function
const DisplayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");

    // add data to the page
    // console.log(categories);
    categories.forEach((item) => {
        console.log(item);
        // create a button
        const button = document.createElement("button");
        button.classList = "btn";
        button.innerText = item.category;

        // add button to categoryContainer
        categoryContainer.append(button);
    });
};

loadCategories();
loadVideos();
