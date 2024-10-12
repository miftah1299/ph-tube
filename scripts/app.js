// time
function getTimeString(time) {
    // get hour and minute
    const hour = Math.floor(time / 3600);
    const minute = Math.floor((time % 3600) / 60);

    // return time string
    return `${hour}hrs ${minute}min ago`;
}

// remove active class
const removeActiveClass = () => {
    const buttons = document.getElementsByClassName("category-btn");
    // console.log(buttons);
    for (let btn of buttons) {
        btn.classList.remove("active");
    }
};

// fetch, load and show categories on the page

// create loadCategories function
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then((response) => response.json())
        .then((data) => displayCategories(data.categories))
        .catch((error) => console.log(error));
};

// create loadVideos function
const loadVideos = (searchText = "") => {
    fetch(
        `https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`
    )
        .then((response) => response.json())
        .then((data) => displayVideos(data.videos))
        .catch((error) => console.log(error));
};

// create loadCategoryVideos function
const loadCategoryVideos = (id) => {
    // alert(id);
    // fetch category videos
    fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
        .then((response) => response.json())
        .then((data) => {
            removeActiveClass();

            const activeBtn = document.getElementById(`btn-${id}`);
            // if (activeBtn) console.log("btn activated");
            activeBtn.classList.add("active");
            // console.log(activeBtn);
            displayVideos(data.category);
        })
        .catch((error) => console.log(error));
};

//
const loadDetails = async (videoId) => {
    // console.log(videoId);
    const uri = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
    const response = await fetch(uri);
    const data = await response.json();
    displayDetails(data.video);
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

//
// create displayDetails function
const displayDetails = (video) => {
    console.log(video);
    const detailsContainer = document.getElementById("modal-content");

    // add details
    detailsContainer.innerHTML = `
    <div class="flex flex-col gap-4">
    <img src=${video.thumbnail} />
    <p>${video.description}</p>
    </div>`;

    // 1st way to show modal
    // document.getElementById("showModal-btn").click();

    // 2nd way to show modal
    document.getElementById("customModal").showModal();
};

// create displayVideos function
const displayVideos = (videos) => {
    const videoContainer = document.getElementById("videos");
    videoContainer.innerHTML = "";

    if (videos.length === 0) {
        // remove grid class
        videoContainer.classList.remove("grid");
        // add no videos found message
        videoContainer.innerHTML = `
        <div class="min-h-80 w-1/2 mx-auto flex flex-col justify-center items-center gap-5">
        <img src="images/icon.png" />
        <h2 class="text-4xl font-semibold text-center">Oops!! Sorry, There is no content here</h2>
        </div>`;
        return;
    } else {
        // add grid class
        videoContainer.classList.add("grid");
    }

    // add data to the page
    videos.forEach((item) => {
        // console.log(item);

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
                    <p><button onclick="loadDetails('${
                        item.video_id
                    }')" class="btn btn-xs btn-outline">Details</button></p>
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

// create displayCategories function
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");

    // add data to the page
    // console.log(categories);
    categories.forEach((video) => {
        console.log(video);
        // create a button
        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML = `
        <button id='btn-${video.category_id}' onclick="loadCategoryVideos(${video.category_id})" class="btn category-btn">
            ${video.category}
        </button>`;

        // button.onclick = () => alert("clicked");

        // add button to categoryContainer
        categoryContainer.append(buttonContainer);
    });
};

document.getElementById("search-input").addEventListener("keyup", (e) => {
    loadVideos(e.target.value);
});

loadCategories();
loadVideos();
