var Doctor = require('./../js/betterdoctor.js').doctorModule;

var displayDoctor = function(medicalIssue, doctors) {
  console.log(doctors);
  $('.showDoctors').append(doctors);
};

$(document).ready(function(){
  var needDoctor = new Doctor();

  $('#find-symptoms').click(function(e){
    e.preventDefault();
    var medicalIssue = $('#symptom').val();
    needDoctor.getDoctors(medicalIssue, displayDoctor);
  });

});
