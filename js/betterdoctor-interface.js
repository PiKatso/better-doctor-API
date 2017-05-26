var Doctor = require('./../js/betterdoctor.js').doctorModule;

$(document).ready(function(){
  var needDoctor = new Doctor();

  $('#find-symptoms').click(function(e){
    e.preventDefault();
    $('.showDoctors').empty();
    var medicalIssue = $('#symptom').val();
    needDoctor.getDoctors(medicalIssue);
  });

});
