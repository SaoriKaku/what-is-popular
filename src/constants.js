// display: flex, block, none
export const FLEX = "flex";
export const BLOCK = "block";
export const NONE = "none";
// for redux action types
export const LOAD_NEXT_PAGE_FROM_DB = "load_next_page_from_db";
export const ADD_TO_FAVORITE = "add_to_favorite";
export const REMOVE_FROM_FAVORITE = "remove_from_favorite";
export const ADD_TO_BLOCK = "add_to_block";
export const REMOVE_FROM_BLOCK = "remove_from_block";
// for url
export const URL_IMAGE_PREFIX = "https://image.tmdb.org/t/p/w500";
export const URL_DISCOVER_PREFIX = "https://api.themoviedb.org/3";
export const API_KEY_SUGUO = "98d76f4e69ff80643c26ba75b21f9352";
// for current page action type
export const ADD_CURRENT_PAGE = "add_current_page";
export const DEDUCT_CURRENT_PAGE = "deduct_current_page";
// month
export const MONTH = {
    "01": "January", "02": "Feburary", "03": "March", "04": "April", 
    "05": "May", "06": "June", "07": "July", "08": "Auguest", 
    "09": "September", "10": "October", "11": "November", "12": "December"
}
// day
export const DAY = {
    "01": "1st", "02": "2nd", "03": "3rd", "04": "4th", "05": "5th", 
    "06": "6th", "07": "7th", "08": "8th", "09": "9th", "10": "10th", 
    "11": "11th", "12": "12th", "13": "13th", "14": "14th", "15": "15th", 
    "16": "16th", "17": "17th", "18": "18th", "19": "19th", "20": "20th", 
    "21": "21th", "22": "22th", "23": "23th", "24": "24th", "25": "25th", 
    "26": "26th", "27": "27th", "28": "28th", "29": "29th", "30": "30th", "31": "31th",
}
// genre 
export const GENRE = {
   /*
    2 light blue: rgb(158, 239, 236), rgb(95, 202, 195)
    3 blue-green: rgb(185, 235, 209), rgb(143, 213, 177), rgb(130, 186, 183)
    4 green: rgb(159, 204, 81), rgb(134, 179, 0), rgb(152, 212, 145), rgb(86, 171, 104)
    2 brown: rgb(215, 215, 146), rgb(183, 183, 59)
    3 yellow: rgb(238, 232, 117), rgb(249, 213, 91), rgb(246, 188, 66)
    3 purple: rgb(218, 195, 216), rgb(186, 178, 204), rgb(160, 155, 195)
    2 blue-purple:  rgb(189, 200, 223), rgb(151, 161, 201)
    */
    // light blue
    12: {genre: "Adventure", color: "#fff", backgroundColor: "rgb(158, 239, 236)"}, 
    28: {genre: "Action", color: "fff", backgroundColor: "rgb(95, 202, 195)"}, 
    // blue-green
    16: {genre: "Animation", color: "#fff", backgroundColor: "rgb(185, 235, 209)"}, 
    35: {genre: "Comedy", color: "#fff", backgroundColor: "rgb(143, 213, 177)"}, 
    10402: {genre: "Music", color: "#fff", backgroundColor: "rgb(130, 186, 183)"},
    10749: {genre: "Romance", color: "#fff", backgroundColor: "rgb(159, 204, 81)"}, 
    // green
    27: {genre: "Horror", color: "#fff", backgroundColor: "rgb(134, 179, 0)"}, 
    53: {genre: "Thriller", color: "#fff", backgroundColor: "rgb(152, 212, 145)"},
    80: {genre: "Crime", color: "#fff", backgroundColor: "rgb(86, 171, 104)"}, 
    // purple
    18: {genre: "Drama", color: "#fff", backgroundColor: "rgb(218, 195, 216)"},
    10751: {genre: "Family", color: "#fff", backgroundColor: "rgb(186, 178, 204)"}, 
    10770: {genre: "TV Movie", color: "#fff", backgroundColor: "rgb(160, 155, 195)"}, 
    // yellow
    14: {genre: "Fantasy", color: "#fff", backgroundColor: "rgb(238, 232, 117)"}, 
    878: {genre: "Science Fiction", color: "#fff", backgroundColor: "rgb(249, 213, 91)"}, 
    9648: {genre: "Mystery", color: "#fff", backgroundColor: "rgb(246, 188, 66)"}, 
    // blue-purple
    36: {genre: "History", color: "#fff", backgroundColor: "rgb(189, 200, 223)"}, 
    99: {genre: "Documentary", color: "#fff", backgroundColor: "rgb(151, 161, 201)"}, 
    // brown
    37: {genre: "Western", color: "#fff", backgroundColor: "rgb(215, 215, 146)"}, 
    10752: {genre: "War", color: "#fff", backgroundColor: "rgb(183, 183, 59)"},
}

