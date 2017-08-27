var user = {
    name: 'Taha Hassan',
    job: 'Application Developer',
    imgsrc: 'headshot.png',
    personal: 'A highly motivated and hardworking individual, who has recently completed my BSc (Applied Chemistry) from Karachi University Currently Studying Web App developement, is seeking an apprenticeship in the engineering industry to build upon a keen scientific interest and start a career as a maintenance engineer. Eventual career goal is to become a fully-qualified and experienced in web app development, with the longer-term aspiration of moving into project management.',
    work: ['Epla Laboratories Pvt Limited' , 'Internee Lab Analyzer and Data Collector','Aug 2016 - oct 2016' , 'Bk Textile Pvt Limited' , 'Dyes producer / processor' , 'jan 2017 - present' ] ,
    education: ['University Of Karachi BSc. Applied Chemistry' , 'Allama Iqbal Govt. College ' ,'Chiniot Islamia School And College '],
    skills: ['Microsoft Office 2010' , 'Photoshop CS7' , 'Word 2010','PowerPoint 2010' , 'Excellent Typing Skills', 'Adobe Flash 8']
}

document.getElementById('myName').innerHTML = user.name;
document.getElementById('currentJob').innerHTML = user.job;
document.getElementById('profilepic').setAttribute('src',user.imgsrc)
document.getElementById('personal').innerHTML = user.personal;
document.getElementById('jobTitle1').innerHTML = user.work[0];
document.getElementById('job1').innerHTML = user.work[1];
document.getElementById('jobDate1').innerHTML = user.work[2];
document.getElementById('jobTitle2').innerHTML = user.work[3];
document.getElementById('job2').innerHTML = user.work[4];
document.getElementById('jobDate2').innerHTML = user.work[5];
document.getElementById('qualifications').innerHTML = user.education[0]
document.getElementById('qualifications1').innerHTML = user.education[1]
document.getElementById('qualifications2').innerHTML = user.education[2]

for (var i = 0; i<user.skills.length;i++) {
   var ul =  document.getElementById('skills')
   var text = document.createTextNode(user.skills[i])
    var list = document.createElement('li');
    list.appendChild(text)
    ul.appendChild(list)
    
}



