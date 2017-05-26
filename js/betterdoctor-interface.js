var Doctor = require('./../js/betterdoctor.js').doctorModule;

$(document).ready(function(){
  var currentMedicalIssue = new Doctor();
  $('#find-symptoms').click(function(){
    var medicalIssue = $('#symptom').val();
    currentMedicalIssue.getDoctor(medicalIssue);
  });
});
