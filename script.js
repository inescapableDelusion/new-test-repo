// this function would save the historylist of the saves, with the first element there

var limit = 20;
var historylist = [""];

// let us use a counter in order to undo and redo
var counter = {
    current: 0,
    increment() {
        if (this.current < historylist.length - 1) {this.current++}
        else { alert("Cannot redo further!")}
    },
    decrement() {
        if (this.current > 0) {this.current--}
        else { alert("Cannot undo further!") }
    }
};

function save() {
    // first compare whether the last historylist is similar to the current one
    // get the current item
    var c = document.getElementById("textarea").value;
    var l = historylist.length - 1;

    // check if the length is exceeding
    if (l + 1 > limit) { historylist.shift(); }
    if (historylist[l] !== c) {
        historylist.push(c);
        counter.increment();
    }

    alert("Saved successfully! (save or autosave)");
    console.log(historylist);
}

// finally, implement this on the undo and redo functions
function undo() {
    counter.decrement();
    document.getElementById("textarea").value = historylist[counter.current];
}

function redo() {
    counter.increment();
    document.getElementById("textarea").value = historylist[counter.current];
}

// example of an autosave (warning, this is simplistic and therefore can be buggy but the main gist is there), in word documents, files are autosaved every 15 minutes, so let's do that
setInterval(save, 1000 * 60 * 15);


