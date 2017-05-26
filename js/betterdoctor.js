var apiKey = require('./../.env').apiKey;
var weaKey = require('./../.env').weaKey;

function Doctor(medicalIssue){
  this.medicalIssue = medicalIssue;
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     (result.data.forEach(function(data){
      var docName = data.profile.first_name + " " + data.profile.last_name;
      var docSpeacialties = data.specialties[0].actor + ", " + data.profile.title + "<br>" + data.specialties[0].description;
      var docDegree = data.educations.school;
      var docPic = data.profile.image_url;
      var docInfo = data.practices[0].name + "<br>" + data.practices[0].visit_address.street + ", " + data.practices[0].visit_address.zip;

     $('.showDoctors').append("Dr. " + docName + "</span><p>" + docSpeacialties + "</p><img src='" + docPic + "'><br>" + docInfo + "<hr>");
    }));
   })

   .fail(function(error){
     $('.showDoctors').text("No doctors found that met your search criteria");
    });
};

exports.doctorModule = Doctor;
