const emailDisplay=document.getElementById('email-display');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const contact=document.getElementById('contact');
const city=document.getElementById('location');
const submitButton=document.getElementById('submitButton')
const form=document.getElementById('useform')

const homeDiv= document.getElementById('homedv');
const resultDiv=document.getElementById('resultdisplay');

const arr=[]

submitButton.addEventListener('click', (e)=>{
        e.preventDefault();
        const usernameInput=username.value;
        const emailInput=email.value;
        const passwordInput=password.value;
        const contactInput=contact.value;
        const locationInput=city.value;
        const errorMessage=document.getElementById('error-msg');
    if(usernameInput=="" ||emailInput=="" ||passwordInput==""|| contactInput=="" || locationInput==""){
         errorMessage.style.visibility="visible"
    }
    else{
        const newUser={
            username:usernameInput,
            email:emailInput,
            password:passwordInput,
            contact:contactInput,
            location:locationInput
        }
        homeDiv.style.display='none';
        resultDiv.classList.add('displayresults');
        emailDisplay.innerHTML=emailInput;   
        userform.reset();
        const resultdv=document.getElementById('list-items')
        const list= document.createElement('ul')
        list.innerHTML=`<li style="margin-bottom=10px"> <b>Username:</b> ${newUser.username}</li>
                        <li> <b>Email:</b> ${newUser.email}</li>
                        <li> <b>Password:</b> ${newUser.password}</li>
                        <li> <b>Contact:</b> ${newUser.contact}</li>
                        <li> <b>Location:</b> ${newUser.location}</li>`
        resultdv.appendChild(list)

    }

})

var loadFile =(event)=> {
	const userImage = document.getElementById('user-img');
	userImage.src = URL.createObjectURL(event.target.files[0]);
};


const exitApp=document.getElementById('exit-btn')
exitApp.addEventListener('click', (e)=>{
    e.preventDefault();
      homeDiv.classList.add('hideform');
      homeDiv.style.display='block';
      resultDiv.style.display='none';
      emailDisplay.innerHTML="LOYCE'S APP";
     
})
for(let user of arr){
    if (arr.user==password){
        continue;
    }else{
        const userOutput=document.getElementById('user-output')
        const list=document.createElement('li');
        list.innerHTML=user;
        userOutput.appendChild(list)
    }
}
