document.querySelector('#save'),addEventListener('click', save);

chrome.storage.local.get("ElementText", function(value) {
    console.log(value.ElementText);
    console.log(document.getElementById('ElementText'));
    document.getElementById('ElementText').value = value.ElementText;
});
chrome.storage.local.get("ClassText", function(value) {
    console.log(value.ClassText);
    console.log(document.getElementById('ClassText'));
    document.getElementById('ClassText').value = value.ClassText;
});
chrome.storage.local.get("IdText", function(value) {
    console.log(value.IdText);
    console.log(document.getElementById('IdText'))
    document.getElementById('IdText').value = value.IdText;
});

function save() {
    var ElemText = document.getElementById('ElementText').value;
    var ClassText = document.getElementById('ClassText').value;
    var IdText = document.getElementById('IdText').value;

    chrome.storage.local.set({'ElementText': ElemText}, function() {

    });
    chrome.storage.local.set({'ClassText': ClassText}, function() {

    });
    chrome.storage.local.set({'IdText': IdText}, function() {

    });
}