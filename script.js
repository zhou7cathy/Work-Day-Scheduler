$(function () {
  //Add code to display the current date in the header of the page
  var currentDay = dayjs().format('dddd, MMMM D')
  $('#currentDay').text(currentDay);

  // Add a listener for click events on the save button.
  $( ".saveBtn" ).click(function(event) {
    event.preventDefault();          
    var description = this.parentElement.children[1].value ;
    localStorage.setItem(this.parentElement.id, description);
  });
    

  //Add code to apply the past, present, or future class to each time
  var currentHour = dayjs().get('hour');
  
  for(var i = 9; i <= 17; i++){
    if(currentHour == i) {
      $('#hour-' + i).addClass('present');
    } else if(i < currentHour) {
      $('#hour-' + i).addClass('past');
    } else if(i > currentHour) {
      $('#hour-' + i).addClass('future');
    }
  }

  //Add code to get any user input that was saved in localStorage and set the values of the corresponding textarea elements.
  function renderDescription(){
    for(var i = 9; i <= 17; i++){
      if(localStorage != null) {
        $('#hour-' + i).children()[1].value = localStorage.getItem('hour-'+ i);
      }
    }
  }
  
  renderDescription();
});


