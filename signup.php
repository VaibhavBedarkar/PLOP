<?php
$conn = new mysqli("localhost","root","","studentdb");
$name=$_POST["name"];
$class=$_POST["Class"];
$email=$_POST["email"];
$password=$_POST["password"];
$mobile=$_POST["mobile"];
$dob=$_POST["dob"];
$prn=$_POST["prn"];
$address=$_POST["address"];
$state=$_POST["state"];
$qry= "insert into student(name,clas,email,password,mobile,dob,prn,address,state) values('$name','$class','$email','$password','$mobile','$dob','$prn','$address','$state')";
if($conn)
{
    $conn->query($qry);
    echo"
    <script>
    location.href='login.html';
    </script>
    ";
}
$conn->close();
?>