var images = ["https://i.postimg.cc/L6HcYQM0/grand-father.png",  "https://i.postimg.cc/wjMnFtMX/father.jpg","https://i.postimg.cc/5ymDKL83/bro.jpg", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var i = 0;
function nextimg(){
i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array )
    {
        i = 0;
    }
    var updatedImage = images[i];
    document.getElementById("family_member_image").src = updatedImage;
} 