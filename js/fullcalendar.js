document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("demoCalendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    plugins: ["dayGrid", "interaction", "timeGrid", "list"],
    themeSystem: "bootatrap",
    locale: "ru",
    defaultView: "dayGridMonth",
    selectable: true,
    header: {
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay",
    },
    dateClick: function (info) {
      $("#exampleModal").modal();
      console.log(info);
      calendar.addEvent({ title: "Evento-x", date: info.dateStr });
    },
    eventClick: function (info) {
      console.log(info);
      console.log(info.event.title);
      console.log(info.event.start);
      console.log(info.event.end);
      console.log(info.event.textColor);
      console.log(info.event.backgroundColor);
    },
    events: [
      {
        title: "First paciant",
        start: "2020-05-31 22:56:00",
      },
      {
        title: "First paciant",
        start: "2020-06-01 22:56:00",
        end: "2020-06-09 22:56:00",
        color: "#ffb116",
        textColor: "#fff",
      },
    ],
  });
  calendar.setOption("locale", "ru");
  calendar.render();
  calendar.select({ start, end, allDay, resourceId });
});
