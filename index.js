const placeRegex = /^https:\/\/www\.google[.\w]+\/maps\/place\/([\w+]+)\/@(-?[0-9]{1,3}\.-?[0-9]+),(-?[0-9]{1,3}\.-?[0-9]+),([0-9]{1,2})z/

module.exports = {
    // Map of hooks
    hooks: {},

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {
        placeMap: function(placeUrl, kwargs) {
            var placeData = placeRegex.exec(placeUrl);
            if (! placeData) return placeUrl;
            var placeName = placeData[1],
                latitude = placeData[2],
                longitude = placeData[3],
                zoom = placeData[4],
                size = (kwargs || {}).size || "600x600";

            var staticMapUrl = "https://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=" + zoom + "&size=" + size;
            return "[![" + placeName + "](" + staticMapUrl + ")](" + placeUrl + ")";
        }
    }
};
