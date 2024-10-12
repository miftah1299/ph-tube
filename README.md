# PH Tube

PH Tube is a video streaming platform that allows users to browse and watch videos from various categories. The platform provides a seamless and responsive user experience with features like search, sort, and detailed video information.

## Features

-   Browse videos by categories
-   Search for videos
-   Sort videos by views
-   View detailed information about each video

## API Used

This project uses the [Programming Hero Tube API](https://openapi.programming-hero.com/api/phero-tube) to fetch video data. The following endpoints are used:

-   **Categories**: `https://openapi.programming-hero.com/api/phero-tube/categories`
-   **Videos**: `https://openapi.programming-hero.com/api/phero-tube/videos`
-   **Category Videos**: `https://openapi.programming-hero.com/api/phero-tube/category/categoryId`
-   **Video Details**: `https://openapi.programming-hero.com/api/phero-tube/video/video_id`
-   **Video based on Title [Query]**: `https://openapi.programming-hero.com/api/phero-tube/videos?title=videoTitle`

## Usage

-   **Browse Categories**: The homepage displays a list of video categories. Click on a category to view the videos in that category.
-   **Search Videos**: Use the search bar to find videos by title.
-   **Sort Videos**: Click the "Sort by view" button to sort videos by the number of views in descending order.
-   **View Video Details**: Click on a video to view detailed information about it.
