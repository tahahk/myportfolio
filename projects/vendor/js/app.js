var imgBody = document.getElementById('large-Img');
var link = document.getElementById('link');
imgBody.src = 'project-images/todoimg.jpg'
imgBody.setAttribute('onclick','location.href = "https://todo-app-3d57d.firebaseapp.com/"') 

function changeProject(src,refLink) {
    imgBody.src = src
    link.href = refLink
    // imgBody.setAttribute('onclick','console.log(refLink)') 
// imgBody.setAttribute('onclick','location = href')
console.log(refLink)
}   
