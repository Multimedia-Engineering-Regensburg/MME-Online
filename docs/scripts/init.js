(function() {

	const WEEKDAYS = ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
	MONTHNAMES = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezemeber"];

    function initialize() {
        setHomepageLink();
        convertRevisionDate();
    }

    // Fix link to start page
    function setHomepageLink(path) {
        $(".navbar-brand").attr("href", "/mme/");
    }

    function convertRevisionDate() {
        let dateEl = document.querySelector(".updated_at .date"),
            date = new Date(dateEl.innerHTML),
            day = WEEKDAYS[date.getDay()],
            month = MONTHNAMES[date.getMonth()],
            dateText = `${day}, ${date.getDate()}. ${month} ${date.getFullYear()}`;
        dateEl.innerHTML = dateText;
    }

    // Call initialize() when page is ready
    window.onload = initialize;

}());