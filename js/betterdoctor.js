var apiKey = require('./../.env').apiKey;

function Doctor(medicalIssue){
  this.medicalIssue = medicalIssue;
}

Doctor.prototype.getDoctors = function(medicalIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medicalIssue+'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
   .then(function(result) {
     (result.data.forEach(function(data){
      var docName = data.profile.first_name + " " + data.profile.last_name;
      var docSpeacialties = data.specialties[0].actor + ", " + data.specialties[0].description;
      var docDegree = data.educations.school;
      var docPic = data.profile.image_url;

     $('.showDoctors').append("<div class='doctor'<h5>Dr. " + docName + "</h5><p>" + docSpeacialties + "</p><img src='" + docPic + "'></div><hr>");
    }));
   })

   .fail(function(error){
     $('.showDoctors').text("No doctors found that met your search criteria");
    });
};

exports.doctorModule = Doctor;
