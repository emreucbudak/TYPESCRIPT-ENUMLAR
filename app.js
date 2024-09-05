var media;
(function (media) {
    media[media["news"] = 0] = "news";
    media[media["paper"] = 1] = "paper";
    media[media["cloudly"] = 2] = "cloudly";
    media[media["tryied"] = 3] = "tryied";
})(media || (media = {}));
console.log(media.news);
console.log(media[0]);
var mediat;
(function (mediat) {
    mediat["paper"] = "kral";
    mediat["news"] = "emre";
    mediat["cloudly"] = "trylan";
})(mediat || (mediat = {}));
console.log(mediat.paper);
