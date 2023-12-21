/*
This is empty on purpose! Your code to build the resume will go here.
 */

// Model
var model = {
  bio: {
    name: "Pranav",
    role: "Dev",
    contacts: {
      mobile: "8970900658",
      email: "pranav@bhiveworkspace.com",
      github: "pranavprakash30",
      twitter: "pranavprakash30", // optional
      location: "Bengaluru",
    },
    welcomeMessage: "Welcome to my online resume!",
    skills: ["React", "Node", "Flutter"],
    biopic:
      "https://i.pinimg.com/originals/2f/42/9c/2f429c24d813736d8829a5e6b26c4a24.jpg",
  },
  education: {
    schools: [
      {
        name: "Vidya Vikas",
        location: "Mysuru",
        degree: "BE",
        majors: ["CS"],
        dates: "2021",
        // url: "School URL", // optional
      },
    ],
    onlineCourses: [
      {
        title: "Design Pattern",
        school: "Udacity",
        dates: "ongoing",
        url: "https://learn.udacity.com/courses/ud989/lessons/ec8dc4ea-adb2-41a8-bba2-742f1f478e1e/concepts/bbcf1ffa-c286-4e0a-9d2d-89413bd734cf",
      },
    ],
  },
  work: {
    jobs: [
      {
        employer: "Bhive",
        title: "Tech",
        location: "Bng",
        dates: " Dates",
        description: "Engineer",
      },
    ],
  },
  projects: {
    projects: [
      {
        title: "Learning",
        dates: " Dates",
        description: "Design pattern",
        images: [
          "https://i.pinimg.com/originals/2f/42/9c/2f429c24d813736d8829a5e6b26c4a24.jpg",
        ],
      },
    ],
  },
};

// View
var view = {
  displayBio: function () {
    var bio = model.bio;
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedTwitter = HTMLtwitter.replace(
      "%data%",
      bio.contacts.twitter || ""
    );
    var formattedLocation = HTMLlocation.replace(
      "%data%",
      bio.contacts.location
    );
    var formattedWelcomeMsg = HTMLwelcomeMsg.replace(
      "%data%",
      bio.welcomeMessage
    );

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").prepend(formattedName + formattedRole);
    $("#topContacts, #footerContacts").append(
      formattedMobile +
        formattedEmail +
        formattedGitHub +
        formattedTwitter +
        formattedLocation
    );
    $("#header").append(formattedBiopic);
    $("#header").append(formattedWelcomeMsg);
    if (bio.skills.length > 0) {
      $("#header").append(HTMLskillsStart);
      bio.skills.forEach(function (skill) {
        var formattedSkill = HTMLskills.replace("%data%", skill);
        $("#skills").append(formattedSkill);
      });
    }
    // $("#header").append(HTMLskillsStart);
    // $("#skills").append(formattedSkills);
  },

  displayEducation: function () {
    var education = model.education;
    console.log("education", education);

    education.schools.forEach(function (school) {
      $("#education").append(HTMLschoolStart);

      var formattedSchoolName = HTMLschoolName.replace("%data%", school.name);
      var formattedSchoolDegree = HTMLschoolDegree.replace(
        "%data%",
        school.degree
      );
      var formattedSchoolDates = HTMLschoolDates.replace(
        "%data%",
        school.dates
      );
      var formattedSchoolLocation = HTMLschoolLocation.replace(
        "%data%",
        school.location
      );
      var formattedSchoolMajor = HTMLschoolMajor.replace(
        "%data%",
        school.majors.join(", ")
      );
      var formattedSchoolURL = HTMLschoolURL.replace(
        "%data%",
        school.url || ""
      );

      $(".education-entry:last").append(
        formattedSchoolName + formattedSchoolDegree + formattedSchoolDates
      );
      $(".education-entry:last").append(formattedSchoolLocation);
      $(".education-entry:last").append(formattedSchoolMajor);
      $(".education-entry:last").append(formattedSchoolURL);
    });

    education.onlineCourses.forEach(function (course) {
      $("#education").append(HTMLonlineClasses);
      $("#education").append(HTMLschoolStart);

      var formattedOnlineTitle = HTMLonlineTitle.replace(
        "%data%",
        course.title
      );
      var formattedOnlineSchool = HTMLonlineSchool.replace(
        "%data%",
        course.school
      );
      var formattedOnlineDates = HTMLonlineDates.replace(
        "%data%",
        course.dates
      );
      var formattedOnlineURL = HTMLonlineURL.replace("%data%", course.url);

      $(".education-entry:last").append(
        formattedOnlineTitle + formattedOnlineSchool + formattedOnlineDates
      );
      $(".education-entry:last").append(formattedOnlineURL);
    });
  },

  displayWork: function () {
    var work = model.work;

    work.jobs.forEach(function (job) {
      $("#workExperience").append(HTMLworkStart);

      var formattedWorkEmployer = HTMLworkEmployer.replace(
        "%data%",
        job.employer
      );
      var formattedWorkTitle = HTMLworkTitle.replace("%data%", job.title);
      var formattedWorkDates = HTMLworkDates.replace("%data%", job.dates);
      var formattedWorkLocation = HTMLworkLocation.replace(
        "%data%",
        job.location
      );
      var formattedWorkDescription = HTMLworkDescription.replace(
        "%data%",
        job.description
      );

      $(".work-entry:last").append(formattedWorkEmployer + formattedWorkTitle);
      $(".work-entry:last").append(formattedWorkDates);
      $(".work-entry:last").append(formattedWorkLocation);
      $(".work-entry:last").append(formattedWorkDescription);
    });
  },

  displayProjects: function () {
    var projects = model.projects;

    projects.projects.forEach(function (project) {
      $("#projects").append(HTMLprojectStart);

      var formattedProjectTitle = HTMLprojectTitle.replace(
        "%data%",
        project.title
      );
      var formattedProjectDates = HTMLprojectDates.replace(
        "%data%",
        project.dates
      );
      var formattedProjectDescription = HTMLprojectDescription.replace(
        "%data%",
        project.description
      );

      $(".project-entry:last").append(formattedProjectTitle);
      $(".project-entry:last").append(formattedProjectDates);
      $(".project-entry:last").append(formattedProjectDescription);

      project.images.forEach(function (image) {
        var formattedProjectImage = HTMLprojectImage.replace("%data%", image);
        $(".project-entry:last").append(formattedProjectImage);
      });
    });
  },

  displayMap: function () {
    $("#mapDiv").append(googleMap);
  },
};

var octopus = {
  init: function () {
    view.displayBio();
    view.displayEducation();
    view.displayWork();
    view.displayProjects();
    view.displayMap();
  },
};

// Initialize the application
octopus.init();
