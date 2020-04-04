<?php
session_start();
$dbhost="localhost";
$dbuser="id13071373_pvgcompte";
$dbpass="Vaibhav@26598";
$dbname="id13071373_pvgsupport";
$conn= new mysqli($dbhost,$dbuser,$dbpass,$dbname);
$sqry2="SELECT name,email,password FROM student";
$result=$conn->query($sqry2);
$email=$_POST["email"];
$password=$_POST["password"];
$flag=1;
 if($result->num_rows>0)
 {
     while($row=$result->fetch_assoc())
     {
         $tname=$row["name"];
         $temail=$row["email"];
         $tpassword=$row["password"];         
         if($temail==$email && $tpassword==$password)
         {
             $_SESSION["studinfo"]=$tname;
         echo"
         <script>
         location.href='dashboard.php';
         </script>
         ";
         }
         else
             $flag=2;
     }
 }
if($flag==2)
{
    echo"
    <script>
    alert('Invalid Student ID or Password');
    location.href='login.html';
    </script>
    ";
}
$conn->close();
?>