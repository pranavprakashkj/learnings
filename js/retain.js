$(function () {
  var model = {
    init: function () {
      if (!localStorage.notes) {
        localStorage.notes = JSON.stringify([]);
      }
    },
    add: function (obj) {
      var data = JSON.parse(localStorage.notes);
      data.push(obj);
      localStorage.notes = JSON.stringify(data);
    },
    getAllNotes: function () {
      return JSON.parse(localStorage.notes);
    },
  };

  var octopus = {
    addNewNote: function (noteStr, date) {
      model.add({
        content: noteStr,
        value: date,
      });
      view.render();
    },

    getNotes: function () {
      return model.getAllNotes();
    },

    init: function () {
      model.init();
      view.init();
    },
  };

  var view = {
    init: function () {
      this.noteList = $("#notes");
      var newNoteForm = $("#new-note-form");
      var newNoteContent = $("#new-note-content");
      newNoteForm.submit(function (e) {
        octopus.addNewNote(newNoteContent.val(), Date.now());
        newNoteContent.val("");
        e.preventDefault();
      });
      view.render();
    },
    render: function () {
      var htmlStr = "";
      octopus.getNotes().forEach(function (note) {
        htmlStr +=
          '<li class="note">' +
          note.content +
          '<span class="note-date">' +
          new Date(note.value).toString() +
          "</span>" +
          "</li>";
        // htmlStr += '<li class="note-date">' + note.value + "</li>";
      });
      this.noteList.html(htmlStr);
    },
  };

  octopus.init();
});
