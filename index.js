import data_light from './Data/data_light.js';

$(document).ready(function() 
{
    populate_carousel();
    populate_application_description();

    $("#contentParent").append(carousel_element + application_description_element);
});

let carousel_element = "";
let application_description_element = "";

const difficulty_level_description = [
    "Easy: In easy difficulty level, you are given a total of 10 emoticons to remember in a time duration of 30 seconds. Then, you have to select the 10 correct emoticons from a pool of 30 emoticons (10 correct + 20 wrong emoticons).",
    "Medium: In medium difficulty level, you are given a total of 15 emoticons to remember in a time duration of 30 seconds. Then, you have to select the 15 correct emoticons from a pool of 40 emoticons (15 correct + 25 wrong emoticons).",
    "Hard: In hard difficulty level, you are given a total of 20 emoticons to remember in a time duration of 30 seconds. Then, you have to select the 20 correct emoticons from a pool of 50 emoticons (20 correct + 30 wrong emoticons)."
]

const download_links = {
    qr_code : "https://tools-qr-production.s3.amazonaws.com/output/apple-toolbox/5f1060cc7a4b6be87b8d8a39df95df5d/977123ba09557330172e02955e3aa1dc.png",
    app_store_badge_link : "https://apps.apple.com/us/app/remember-me/id1627908191?itsct=apps_box_badge&amp;itscg=30200",
    app_store_badge_image : "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1654300800&h=d379166e3261cffc9318e42725545164"
}

const application_description = [
    {
        card_title : "Motivation",
        card_text : "I wanted to develop an application which would help people in training their brains. Mind exercises are critical in keeping one's brain healthy and active. My thinking behind developing this application was that since almost every person carries at least one cell phone, then why not use them to do something good for their minds? One of the best exercises for our minds is remembering and recalling things we have seen. So, Remember Me? is an exercise for your brain."
    },

    {
        card_title : "How it works",
        card_text : "There are three difficulty levels to choose from: Easy, Medium, and Hard. In each difficulty level, you will be shown a series of distinct emoticons (varying number of emoticons for each difficulty level) during a time period of 30 seconds. Your task is to remember these emoticons. At the end of 30 seconds, you will be presented with a random mix of emoticons (the count of emoticons shown here will be higher than the count of emoticons you have to remember) from which you have to select the ones that were shown to you.",
    },

    {
        card_title : "More on difficulty levels",
        card_text : "list difficulties"
    },

    {
        card_title : "How the point system works",
        card_text : "You get one point for each correct emoticon you identify or recall. However, for each incorrect emoticon you select, you lose a point. The lowest possible score is 0, so you cannot score in the negatives. There are no penalties for failing to recall emoticons. This is designed in such a way to discourage the users from selecting all the emoticons and scoring 100% every-time."
    },

    {
        card_title : "Where to find",
        card_text : "list links"
    }
]

function populate_carousel()
{
    var i = 0, j = 0;
    var carousel_data = data_light;

    for(i = 0; i < carousel_data.length; i = i + 1)
    {
        carousel_element = carousel_element +
                            "<div id=" + carousel_data[i].id + " class=\"carousel slide\" data-ride=\"carousel\">" +
                                "<h1 class=\"bg-dark text-white\" align=\"center\" style=\"font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\">" + carousel_data[i].device + "</h1>" +
                                "<ol class=\"carousel-indicators\">";
        
        for(j = 0; j < carousel_data[i].carousel_elements.length; j = j + 1)
        {
            if(j == 0)
                carousel_element = carousel_element +
                                    "<li data-target=#" + carousel_data[i].id + " data-slide-to=\"" + j + "\" class=\"active\"></li>";

            else
                carousel_element = carousel_element +
                                    "<li data-target=#" + carousel_data[i].id + " data-slide-to=\"" + j + "\"></li>";
        }

        carousel_element = carousel_element +
                            "</ol>" +
                            "<div class=\"carousel-inner\">";
        
        for(j = 0; j < carousel_data[i].carousel_elements.length; j = j + 1)
        {
            if(j == 0)
                carousel_element = carousel_element +
                                    "<div class=\"carousel-item active\">";
            
            else
                carousel_element = carousel_element +
                                    "<div class=\"carousel-item\">";
            
            carousel_element = carousel_element +
                                "<img class=\"d-block w-50 " + carousel_data[i].class + "\" src=\"" + carousel_data[i].carousel_elements[j].src + "?raw=true\" alt=\"" + carousel_data[i].carousel_elements[j].alt + "\" style=\"margin: auto;\">" +
                                "<div class=\"carousel-caption bg-dark d-none d-md-block\"" +
                                    "<h5>" + carousel_data[i].carousel_elements[j].header + "</h5>" +
                                    "<p>" + carousel_data[i].carousel_elements[j].description + "</p>" +
                                "</div>" +
                                "</div>"    // Closing tag of "<div class=\"carousel-item\">"
        }

        // Closing tag of "<div class=\"carousel-inner\">"
        carousel_element = carousel_element +
                            "</div>";
        
        for(j = 1; j <= 2; j = j + 1)
        {
            if(j == 1)
                carousel_element = carousel_element +
                                    "<a class=\"carousel-control-prev\" href=\"#" + carousel_data[i].id + "\" role=\"button\" data-slide=\"prev\">" +
                                        "<span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>" +
                                        "<span class=\"sr-only\">Previous</span>" +
                                    "</a>";
            
            else
                carousel_element = carousel_element +
                                    "<a class=\"carousel-control-next\" href=\"#" + carousel_data[i].id + "\" role=\"button\" data-slide=\"next\">" +
                                        "<span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>" +
                                        "<span class=\"sr-only\">Next</span>" +
                                    "</a>";
        }

        // Closing tag of "<div id=" + data[i].id + " class=\"carousel slide\" data-ride=\"carousel\">"
        carousel_element = carousel_element +
                            "</div>";
    }
}

function populate_application_description()
{
    var i = 0, j = 0;
    application_description_element = application_description_element + 
                                        "<div class=\"card bg-light\">" +
                                            "<div class=\"card-header\">Remember Me?</div>" +
                                            "<div class=\"card-body\">";

    // Stopping before "What you pay" because that has a different layout
    for(i = 0; i < application_description.length - 1; i = i + 1)
    {
        if(application_description[i].card_title != "More on difficulty levels")
            application_description_element = application_description_element +
                                                "<h5 class=\"card-title\">" + application_description[i].card_title + "</h5>" +
                                                "<p class=\"card-text\">" + application_description[i].card_text + "</p>" +
                                                "<hr>";

        else
        {
            application_description_element = application_description_element +
                                                "<h5 class=\"card-title\">" + application_description[i].card_title + "</h5>" +
                                                "<ul class=\"card-text\">"

            for(j = 0; j < difficulty_level_description.length; j = j + 1)
                application_description_element = application_description_element + 
                                                    "<li><b>" + difficulty_level_description[j].split(":")[0] + "</b>:" + difficulty_level_description[j].split(":")[1] + "</li>"
            
            application_description_element = application_description_element + 
                                                "</ul>" +
                                                "<hr>"
        }
    }

    // Appending "Where to find"
    application_description_element = application_description_element +
                                                "<h5 class=\"card-title\">" + application_description[application_description.length - 1].card_title + "</h5>" +
                                                "<center>" +
                                                    "<img src=\"" + download_links.qr_code + "\" style=\"max-width: 15rem; padding-bottom: 5%\">" +
                                                "</center>" +
                                                "<center>" +
                                                    "<a href=\"" + download_links.app_store_badge_link + "\" target=\"_blank\" style=\"display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 83px;\">" +
                                                    "<img src=\"" + download_links.app_store_badge_image + "\"  alt=\"Download on the App Store\" style=\"border-radius: 13px; width: 250px; height: 83px;\">" +
                                                  "</a>" +
                                                "</center>"
                                            "</div>" +
                                        "</div>";
}