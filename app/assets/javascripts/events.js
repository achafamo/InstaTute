// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function () {
  var friends_calendar = $('#calendar').fullCalendar({
		
		googleCalendarApiKey: 'AIzaSyD2OIFpNEzSe4zK3uop07JxFJ_6nPWV1fQ',
		defaultView: 'month',
    events: {
      googleCalendarId: 'colgate.edu_m63pld411ffgte76kg78a3hqks@group.calendar.google.com',
			url: '/events/calendar',
      type: 'GET',
      error: function () {
        alert('There was an error while fetching events.');

        }
  });
});
