console.log("Welcome to Spotify");
//Intialize the variables
let songIndex=0;
let audioElement=new Audio('songs1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('masterplay');
let GIF=document.getElementById('GIF');
let masterSongName = document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let songs=[ 
    
       {songName:"Let me Love You",filePath:"C:\Users\HP\Desktop\Spotify\songs1.mp3" , coverPath:"C:\Users\Desktop\Spotify\cover1.jpg"},
       {songName:"salam-e-Ishq",filePath:"C:\Users\HP\Desktop\Spotify\songs2.mp3" , coverPath:"C:\Users\Desktop\Spotify\covers2.jpg"},
       {songName:"Phir se Ud Chala",filePath: "C:\Users\HP\Desktop\Spotify\songs3.mp3" , coverPath:"C:\Users\Desktop\Spotify\cover3.jpg"},
       {songName:"Aaj Din Chadheya",filePath:"C:\Users\HP\Desktop\Spotify\songs4.mp3" , coverPath:"C:\Users\Desktop\Spotify\cover4.jpg"},
       {songName:"Husn",filePath:"C:\Users\HP\Desktop\Spotify\songs5.mp3" , coverPath:"C:\Users\Desktop\Spotify\cover5.jpg"},
]
songItems.forEach((element,i)=>{
   
element.getElementByTagName("img")[0].src=songs[i].coverPath;
element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})


//audioElement.play();
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    GIF.style.opacity=1;
}
else{
    audioElement.pause();
audioElement.classList.remove('fa-pausee-circle');
    masterPlay.classList.add('fa-play-circle');
    GIF.style.opacity=0;
}
})
//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
    //Update Seekbaar
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myProgressBar.value= progress;
})
myProgressBar.addEventListener('change',()=>{
audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        e.target.classList.remove('fa-pause-circle');
    element.classList.add('fa-play-circle');
   

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{

     makeAllPlays();
     songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    masterSongName.innerText = songs[songIndex].songName;
    e.target.classList.add('fa-pause-circle');
    audioElement.src='songs/${songIndex+1}.mp3';
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity =1;6
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    })

})
document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=4){
        songIndex =0
    }
    else{
        songIndex += 1;
   
}
audioElement.src='songs/${songIndex+1}.mp3';
masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');


})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex =0
    }
    else{
        songIndex -= 1;
   
}
audioElement.src='songs/${songIndex+1}.mp3';
masterSongName.innerText = songs[songIndex].songName;
audioElement.currentTime=0;
audioElement.play();
masterPlay.classList.remove('fa-play-circle');
masterPlay.classList.add('fa-pause-circle');


})