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
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
};

const DisplayVideos = (videos) => {
    const videoContainer = document.getElementById("videos");

    // add data to the page
    videos.forEach((item) => {
        console.log(item);
        // create a button
        const card = document.createElement("div");
        card.classList = "card card-compact";
        card.innerHTML = `
        <figure>
            <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
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
