// time
function getTimeString(time) {
    // get hour and minute
    const hour = Math.floor(time / 3600);
    const minute = Math.floor((time % 3600) / 60);

    // return time string
    return `${hour}hrs ${minute}min ago`;
}

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

// create loadCategoryVideos function
const loadCategoryVideos = (id) => {
    // alert(id);
    // fetch category videos
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then((response) => response.json())
        .then((data) => DisplayVideos(data.category))
        .catch((error) => console.log(error));
};

/*



*/
// create cardDemo object
// const cardDemo = {
//     category_id: "1001",
//     video_id: "aaaa",
//     thumbnail: "https://i.ibb.co/L1b6xSq/shape.jpg",
//     title: "Shape of You",
//     authors: [
//         {
//             profile_picture: "https://i.ibb.co/D9wWRM6/olivia.jpg",
//             profile_name: "Olivia Mitchell",
//             verified: "",
//         },
//     ],
//     others: {
//         views: "100K",
//         posted_date: "16278",
//     },
//     description:
//         "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey.",
// };

// create DisplayVideos function
const DisplayVideos = (videos) => {
    const videoContainer = document.getElementById("videos");
    videoContainer.innerHTML = "";

    if (videos.length === 0) {
        // remove grid class
        videoContainer.classList.remove("grid");
        // add no videos found message
        videoContainer.innerHTML = `
        <div class="min-h-80 flex flex-col justify-center items-center gap-5">
        <img src="images/icon.png" alt="no videos found" />
        <h2 class="text-2xl font-semibold text-center">No videos found</h2>
        </div>`;
        return;
    } else {
        // add grid class
        videoContainer.classList.add("grid");
    }

    // add data to the page
    videos.forEach((item) => {
        console.log(item);
        // create a button
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML = `
        <figure class="h-[200px] relative rounded-md">
            <img class="w-full h-full object-cover"
            src=${item.thumbnail}
            alt="" />
            ${
                item.others.posted_date?.length === 0
                    ? ""
                    : `<span class="absolute text-xs bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-md">
                    ${getTimeString(item.others.posted_date)}</span>`
            }
        
        </figure>
        <div class="px-0 py-2 flex gap-2">
            <div class="flex items-center gap-2">
                <img class="w-10 h-10 rounded-full object-cover"
                src=${item.authors[0].profile_picture}
                alt="Olivia Mitchell" />
                <div>
                    <h3 class="font-bold">${item.title}</h3>
                    <div class="flex gap-2 items-center">
                        <p class="text-sm text-gray-500">${
                            item.authors[0].profile_name
                        }</p>
                        ${
                            item.authors[0].verified === true
                                ? `<img class="w-5" src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png" alt="verified" />`
                                : ""
                        }
                    </div>
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
        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML = `
        <button onclick="loadCategoryVideos(${item.category_id})" class="btn">
            ${item.category}
        </button>`;

        // button.onclick = () => alert("clicked");

        // add button to categoryContainer
        categoryContainer.append(buttonContainer);
    });
};

loadCategories();
loadVideos();
