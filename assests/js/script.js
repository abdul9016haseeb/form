// function filechecking() {
//     let File = document.getElementById("Upload");

//     if (File.files.length === 0) {
//         document.getElementById("Uploadfield").innerText = "Please upload an image";
//         return false;
//     }

//     let fileName = File.files[0].name;
//     let fileSize = File.files[0].size;
//     let fileType = File.files[0].type;
//     let fileModifiedDate = File.files[0].lastModifiedDate;

//     let allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
//     let maxSize = 3 * 1024 * 1024; // 3 MB

//     if (!allowedExtensions.exec(fileName)) {
//         document.getElementById("Uploadfield").innerText = "Only JPG, JPEG, and PNG files are allowed";
//         File.value = ''; // Clear the file input
//         return false;
//     }

//     if (fileSize > maxSize) {
//         document.getElementById("Uploadfield").innerText = "File size should not exceed 3 MB";
//         File.value = ''; // Clear the file input
//         return false;
//     }

//     let file_info = `File Name: ${fileName}\nFile Size: ${fileSize} bytes\nFile Type: ${fileType}\nLast Modified: ${fileModifiedDate}`;
//     //   document.getElementById("Image").innerHTML = `File Name: ${fileName}`;

//     document.getElementById("Uploadfield").innerText = ''; // Clear any previous error messages

//     return fileName;

// }


// function storeImage(image) {
//     const imageInput = document.getElementById('Upload').files[0];
//     if (!imageInput) {
//         alert("Please select an image to store.");
//         return;
//     }

//     const reader = new FileReader();
//     reader.onload = function (event) {
//         const base64String = event.target.result;
//         localStorage.setItem("storedImage", base64String);
//         // document.getElementById('storedImage').src = `assests/img/${image}`;
//         document.getElementById('storedImage').src = base64String;
//         console.log(base64String);
//         // alert("Image stored in local storage.");
//     };
//     reader.readAsDataURL(imageInput);
// }



// function output() {

//     // document.getElementById("output").style.display = "none";
//     let text = "";
//     const checkboxes = document.querySelectorAll('input[type="checkbox"][id]:not([id="agree"])');
//     const checkedValues = Array.from(checkboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
//     // console.log(checkedValues);
//     const radioboxes = document.querySelectorAll('input[type="radio"]');
//     const radiovalues = Array.from(radioboxes).filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);
//     // console.log(radiovalues);
//     const obj = {
//         firstname: document.getElementById("fname").value,
//         lastname: document.getElementById("lname").value,
//         Email: document.getElementById("Email").value,
//         password: document.getElementById("password").value,
//         cpassword: document.getElementById("cpassword").value,
//         phno: Number(document.getElementById("number").value),
//         dob: document.getElementById("dateofbirth").value,
//         collegeName: document.getElementById("college").value,
//         course: document.getElementById("course").value,
//         gender: radiovalues,
//         language: checkedValues,
//         Address: document.getElementById("Address").value,
//         agree:document.getElementById("agree")

//     }



//     //destructing
//     let { firstname, lastname, Email, password, cpassword, phno, dob, collegeName, course, gender, language, Address,agree } = obj;


//     // console.log(isNaN(firstname));

//     let x;
//     {//firstname
//         // console.log(firstname.length);

//         if (firstname.length == 0) {
//             document.getElementById("firstfield").innerHTML = "Please fill out the field";

//         }
//         else if (firstname.length > 0) {
//             document.getElementById("firstfield").innerHTML = "";
//             let y = "invalid";

//             for (x of firstname) {
//                 if (isNaN(x) == false) {
//                     document.getElementById("firstfield").innerHTML = y;
//                     console.log("Invalid Name");
//                     break;
//                 }
//                 else {
//                     continue;
//                 }
//             }
//         }
//         // else { 

//         // }
//     }


//     let z;
//     {//lastname


//         if (lastname.length == 0) {
//             document.getElementById("lastfield").innerHTML = "Please fill out the field";

//         }
//         else if (lastname.length > 0) {
//             document.getElementById("lastfield").innerHTML = "";
//             let y = "invalid"
//             for (z of lastname) {
//                 if (isNaN(z) == false) {
//                     document.getElementById("lastfield").innerHTML = y;
//                     console.log("Invalid Name");
//                     break;
//                 }
//                 else {
//                     continue;
//                 }
//             }
//         }
//         // if (lastname == "") {
//         //     document.getElementById("lastfield").innerHTML = "Please fill out the field";
//         // }
//         // else {
//         //     document.getElementById("lastfield").innerHTML = "";

//         // }
//     }



//     {//email
//         {
//             if (Email == "") {
//                 document.getElementById("emailfield").innerHTML = "Please fill out the field";
//             } else if (Email.search("@gmail.com") == -1) {
//                 document.getElementById("emailfield").innerHTML = "Enter correct email";
//                 Email = "Invalid email";


//             } else {
//                 document.getElementById("emailfield").innerHTML = "";

//             }
//         }
//     }



//     {//password 
//         {//password fill out the field
//             if (password == "") {
//                 document.getElementById("passfield").innerHTML = "Please fill out the field";

//             } else {
//                 document.getElementById("passfield").innerHTML = "";

//             }
//         }
//         {//password checking
//             if ((cpassword.length) < 5 && (cpassword.length) != 0) {
//                 document.getElementById("passconfirmfield").innerHTML = "Please enter alteast 5 characters";
//                 // cpassword = "Invalid Password";


//             } else if (cpassword == "") {
//                 document.getElementById("passconfirmfield").innerHTML = "Please fill out the field";

//             } else if (password != cpassword) {
//                 document.getElementById("passconfirmfield").innerHTML = "Invalid password";


//                 cpassword = "Invalid Password";
//             } else {
//                 document.getElementById("passconfirmfield").innerHTML = "";

//             }
//         }
//     }



//     let verify = isNaN(phno);
//     {//phone number 
//         {//phone number checking

//             // console.log(phno);
//             if (phno == 0) {

//                 document.getElementById("phonefield").innerHTML = "Please fill out the field";
//                 // phno = "null";

//             }
//             else if (verify == true || phno >= 9999999999 || phno <= 999999999) {
//                 document.getElementById("phonefield").innerHTML = "Invalid Phone number";

//                 // phno = "invalid Phone number";
//             } else {
//                 document.getElementById("phonefield").innerHTML = "";
//             }
//         }
//     }



//     {//Date of Birth
//         let date = new Date(`${dob}`).getFullYear();
//         {
//             if (date >= 2006 || date >= 2024) {
//                 date = "invalid date";
//                 dob = null;
//                 document.getElementById("Datefield").innerHTML = "Invalid";
//                 // console.log(date);
//             } else if (dob == 0) {
//                 document.getElementById("Datefield").innerHTML = "Please fill out the field";
//                 //   console.log(date);
//             }
//             else {
//                 document.getElementById("Datefield").innerHTML = "";

//             }
//         }
//     }



//     {//college name
//         {
//             if (collegeName == "") {
//                 document.getElementById("collegefield").innerHTML = "Please fill out the field";
//             }
//             else {
//                 document.getElementById("collegefield").innerHTML = "";
//             }
//         }
//     }



//     {//course
//         {
//             if (course == "") {
//                 document.getElementById("coursefield").innerHTML = "Please fill out the field";
//             }
//             else {
//                 document.getElementById("coursefield").innerHTML = "";
//             }
//         }
//     }



//     {//gender
//         {
//             if (gender == "") {
//                 document.getElementById("genderfield").innerHTML = "Please fill out the field";
//             }
//             else {
//                 document.getElementById("genderfield").innerHTML = "";
//             }
//         }
//     }



//     {//language
//         {
//             language.forEach(languagefunction);
//             function languagefunction(value) {
//                 text += value + " ";
//             }
//             // console.log(((text.length)==0));
//         }
//         {
//             if (language == "") {
//                 document.getElementById("languagefield").innerHTML = "Please fill out the field";
//             }
//             else {
//                 document.getElementById("languagefield").innerHTML = "";
//             }
//         }
//     }

//     filechecking();//document.getElementById("Upload").value

  
  
//     {//image preview
//     let imageurl =document.getElementById("Upload").value;
//     let imageurl2=imageurl.slice(12);

//     console.log("valued"+imageurl2);
//     storeImage(image=imageurl2);
//    }



     
//     {//Address
//         if (Address == "") {
//             document.getElementById("addressfield").innerHTML = "Please fill out the field";
//             // console.log("Please fill out the field");
//         }
//         else {
//             document.getElementById("addressfield").innerHTML = "";
//         }
//     }


//     {//agree the terms
//         {
//             if (agree.checked == false) {
//                 document.getElementById("agreefield").innerHTML = "Agree the terms and conditions";
//                  console.log("Please fill out the field");
//             }
//             else {
//                 document.getElementById("agreefield").innerHTML = "";
//             }
//         }
//         console.log("agree"+agree.checked);
//         console.log( document.getElementById("agreefield").innerHTML == "Please fill out the field");
//     }
//     // console.log(dob == 0);



//     {//Printing

//         if (firstname == "" || isNaN(x) == false || isNaN(z) == false || lastname == "" || Email == "" || (Email.search("@gmail.com") == -1) || (password == "" || cpassword == "") || (cpassword != password) || ((cpassword.length) < 5 && (cpassword.length) != 0) || phno == undefined || (verify == true || phno >= 9999999999 || phno <= 999999999) || (dob == 0 || dob == null) ||
//             collegeName == "" || course == "" || gender == "" || text == "" || Address == "" || ((text.length) == 0) || (filechecking() == false)||agree.checked == false) {
//             if (localStorage.length != 0) {
//                 localStorage.clear();
//                 console.log(localStorage);
//                 console.log(localStorage.length);
//             }
//             // document.getElementById("Upload").value="";



//         } else {

            

//             localStorage.setItem(`firstname`, `${firstname}`);
//             localStorage.setItem(`lastname`, `${lastname}`);
//             localStorage.setItem(`Email`, `${Email}`);
//             localStorage.setItem(`cpassword`, `${cpassword}`);
//             localStorage.setItem(`phno`, `${phno}`);
//             localStorage.setItem(`dob`, `${dob}`);
//             localStorage.setItem(`collegeName`, `${collegeName}`);
//             localStorage.setItem(`course`, `${course}`);
//             localStorage.setItem(`gender`, `${gender}`);
//             localStorage.setItem(`language`, `${text}`);
//             localStorage.setItem(`Address`, `${Address}`);
//             localStorage.setItem(`image`, `${filechecking()}`);
//             localStorage.setItem(`agree`, `${agree.checked}`);
//             alert("Form has been submitted");
//             window.location.assign("output.html");

//         }
//     }
// }








function filechecking() {
    let $file = $("#Upload");

    if ($file[0].files.length === 0) {
        $("#Uploadfield").text("Please upload an image");
        return false;
    }

    let file = $file[0].files[0];
    let fileName = file.name;
    let fileSize = file.size;
    let fileType = file.type;
    let fileModifiedDate = file.lastModifiedDate;

    let allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    let maxSize = 3 * 1024 * 1024; // 3 MB

    if (!allowedExtensions.exec(fileName)) {
        $("#Uploadfield").text("Only JPG, JPEG, and PNG files are allowed");
        $file.val(''); // Clear the file input
        return false;
    }

    if (fileSize > maxSize) {
        $("#Uploadfield").text("File size should not exceed 3 MB");
        $file.val(''); // Clear the file input
        return false;
    }

    let file_info = `File Name: ${fileName}\nFile Size: ${fileSize} bytes\nFile Type: ${fileType}\nLast Modified: ${fileModifiedDate}`;
    //   $("#Image").html(`File Name: ${fileName}`);

    $("#Uploadfield").text(''); // Clear any previous error messages

    return fileName;
}

function storeImage(image) {
    let $imageInput = $('#Upload')[0].files[0];
    if (!$imageInput) {
        // alert("Please select an image to store.");
        return;
    }

    let reader = new FileReader();
    reader.onload = function (event) {
        let base64String = event.target.result;
        localStorage.setItem("storedImage", base64String);
        $('#storedImage').attr('src', base64String);
        console.log(base64String);
        // alert("Image stored in local storage.");
    };
    reader.readAsDataURL($imageInput);
}

function output() {
    // $("#output").hide();
    let text = "";
    let checkboxes = $('input[type="checkbox"][id]:not([id="agree"])');
    let checkedValues = checkboxes.filter(':checked').map(function () {
        return this.value;
    }).get();
    // console.log(checkedValues);
    let radioboxes = $('input[type="radio"]');
    let radiovalues = radioboxes.filter(':checked').map(function () {
        return this.value;
    }).get();
    // console.log(radiovalues);
    let obj = {
        firstname: $("#fname").val(),
        lastname: $("#lname").val(),
        Email: $("#Email").val(),
        password: $("#password").val(),
        cpassword: $("#cpassword").val(),
        phno: Number($("#number").val()),
        dob: $("#dateofbirth").val(),
        collegeName: $("#college").val(),
        course: $("#course").val(),
        gender: radiovalues,
        language: checkedValues,
        Address: $("#Address").val(),
        agree: $("#agree").is(":checked")
    };

    //destructuring
    let { firstname, lastname, Email, password, cpassword, phno, dob, collegeName, course, gender, language, Address, agree } = obj;

    // console.log(isNaN(firstname));

    {//firstname
        // console.log(firstname.length);

        if (firstname.length == 0) {
            $("#firstfield").html("Please fill out the field");

        } else if (firstname.length > 0) {
            $("#firstfield").html("");
            let y = "invalid";

            for (let x of firstname) {
                if (!isNaN(x)) {
                    $("#firstfield").html(y);
                    console.log("Invalid Name");
                    break;
                }
            }
        }
    }

    {//lastname
        if (lastname.length == 0) {
            $("#lastfield").html("Please fill out the field");

        } else if (lastname.length > 0) {
            $("#lastfield").html("");
            let y = "invalid"
            for (let z of lastname) {
                if (!isNaN(z)) {
                    $("#lastfield").html(y);
                    console.log("Invalid Name");
                    break;
                }
            }
        }
    }

    {//email
        if (Email == "") {
            $("#emailfield").html("Please fill out the field");
        } else if (Email.search("@gmail.com") == -1) {
            $("#emailfield").html("Enter correct email");
            Email = "Invalid email";
        } else {
            $("#emailfield").html("");
        }
    }

    {//password 
        if (password == "") {
            $("#passfield").html("Please fill out the field");
        } else {
            $("#passfield").html("");
        }

        if ((cpassword.length) < 5 && (cpassword.length) != 0) {
            $("#passconfirmfield").html("Please enter at least 5 characters");
        } else if (cpassword == "") {
            $("#passconfirmfield").html("Please fill out the field");
        } else if (password != cpassword) {
            $("#passconfirmfield").html("Invalid password");
            cpassword = "Invalid Password";
        } else {
            $("#passconfirmfield").html("");
        }
    }

    let verify = isNaN(phno);
    {//phone number 
        if (phno == 0) {
            $("#phonefield").html("Please fill out the field");
        } else if (verify == true || phno >= 9999999999 || phno <= 999999999) {
            $("#phonefield").html("Invalid Phone number");
        } else {
            $("#phonefield").html("");
        }
    }

    {//Date of Birth
        let date = new Date(`${dob}`).getFullYear();
        if (date >= 2006 || date >= 2024) {
            date = "invalid date";
            dob = null;
            $("#Datefield").html("Invalid");
        } else if (dob == 0) {
            $("#Datefield").html("Please fill out the field");
        } else {
            $("#Datefield").html("");
        }
    }

    {//college name
        if (collegeName == "") {
            $("#collegefield").html("Please fill out the field");
        } else {
            $("#collegefield").html("");
        }
    }

    {//course
        if (course == "") {
            $("#coursefield").html("Please fill out the field");
        } else {
            $("#coursefield").html("");
        }
    }

    {//gender
        if (gender == "") {
            $("#genderfield").html("Please fill out the field");
        } else {
            $("#genderfield").html("");
        }
    }

    {//language
        language.forEach(function (value) {
            text += value + " ";
        });
        if (language == "") {
            $("#languagefield").html("Please fill out the field");
        } else {
            $("#languagefield").html("");
        }
    }

    filechecking(); // Call the filechecking function

    {//image preview
        let imageurl = $("#Upload").val();
        let imageurl2 = imageurl.slice(12);

        console.log("valued" + imageurl2);
        storeImage(imageurl2);
    }

    {//Address
        if (Address == "") {
            $("#addressfield").html("Please fill out the field");
        } else {
            $("#addressfield").html("");
        }
    }

    {//agree the terms
        if (!agree) {
            $("#agreefield").html("Agree to the terms and conditions");
            console.log("Please fill out the field");
        } else {
            $("#agreefield").html("");
        }
        console.log("agree" + agree);
        console.log($("#agreefield").html() == "Please fill out the field");
    }

    {//Printing
        if (firstname == "" || !isNaN(firstname) || !isNaN(lastname) || lastname == "" || Email == "" || (Email.search("@gmail.com") == -1) || (password == "" || cpassword == "") || (cpassword != password) || ((cpassword.length) < 5 && (cpassword.length) != 0) || phno == undefined || (verify == true || phno >= 9999999999 || phno <= 999999999) || (dob == 0 || dob == null) || collegeName == "" || course == "" || gender == "" || text == "" || Address == "" || ((text.length) == 0) || (filechecking() == false) || !agree) {
            if (localStorage.length != 0) {
                localStorage.clear();
                console.log(localStorage);
                console.log(localStorage.length);
            }
            // $("#Upload").val('');
        } else {
            localStorage.setItem(`firstname`, `${firstname}`);
            localStorage.setItem(`lastname`, `${lastname}`);
            localStorage.setItem(`Email`, `${Email}`);
            localStorage.setItem(`cpassword`, `${cpassword}`);
            localStorage.setItem(`phno`, `${phno}`);
            localStorage.setItem(`dob`, `${dob}`);
            localStorage.setItem(`collegeName`, `${collegeName}`);
            localStorage.setItem(`course`, `${course}`);
            localStorage.setItem(`gender`, `${gender}`);
            localStorage.setItem(`language`, `${text}`);
            localStorage.setItem(`Address`, `${Address}`);
            localStorage.setItem(`image`, `${filechecking()}`);
            localStorage.setItem(`agree`, `${agree}`);
            alert("Form has been submitted");
            window.location="output.html";
        }
    }
}

