function set() {
    chrome.storage.local.get("ElementText", function(value) {
        var el = value.ElementText.split(/,|\s/);
        for (i = 0; i < el.length; i++) {
            var elem = document.getElementsByTagName(el[i]);
            if (elem != null) {
                for (n = 0; n < elem.length; n++) {
                    elem[n].classList.add("notranslate");
                }
            }
        }
    });
    chrome.storage.local.get("ClassText", function(value) {
        var el = value.ClassText.split(/,|\s/);
        for (i = 0; i < el.length; i++) {
            var elem = document.getElementsByClassName(el[i]);
            if (elem != null) {
                for (n = 0; n < elem.length; n++) {
                    elem[n].classList.add("notranslate");
                }
            }
        }
    });
    chrome.storage.local.get("IdText", function(value) {
        var el = value.IdText.split(/,|\s/);
        for (i = 0; i < el.length; i++) {
            var elem = document.getElementById(el[i]);
            if (elem != null) {
                elem.classList.add("notranslate");
            }
        }
    });
}

set();