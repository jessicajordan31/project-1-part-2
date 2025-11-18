<template>
    <h1>HER DASHBOARD</h1>
   <div class="box1">
     <h2>Credit Score</h2>
     <p>$2000 paid off - $1200 left</p>
        <div class="progress-box">
            <div class="progress-bar1" style="width: 75%; height: 30px;">
            </div>
        </div>
        <p>75%</p>
   </div>

   <div class="box2">
     <h2>Loan</h2>
     <p>$6000 paid off - $7000 left</p>
        <div class="progress-box">
            <div class="progress-bar2" style="width: 40%; height: 30px;"></div>
        </div>
        <p>40%</p>
   </div>

   <div class="box3">
     <h2>Student Debt</h2>
     <p>$20000 paid off - $70000 left</p>
        <div class="progress-box">
            <div class="progress-bar3" style="width: 20%; height: 30px;"></div>
        </div>
        <p>20%</p>
   </div>

</template>

<style>
h1{
    margin-top: 50px;
}
h2{
    color: black;
}
p{
    color: black;
}
.box1{
    border: 2px solid;
    background-color: #FFFCC0;
    border-radius: 20px;
    padding: 40px;
    margin-top: 60px;
    margin-bottom: 60px;
}
.box2{
    border: 2px solid;
    background-color:#A3BBE4;
    border-radius: 20px;
    padding: 40px;
    margin-top: 60px;
    margin-bottom: 60px;
}
.box3{
    border: 2px solid;
    background-color: #FFFFFF;
    border-radius: 20px;
    padding: 40px;
    margin-top: 60px;
    margin-bottom: 60px;
}

.progress-bar1{
    background-color: #A3BBE4;
    border-radius: 20px;
}
.progress-bar2{
    background-color: #465786;
    border-radius: 20px;
}
.progress-bar3{
    background-color: #FFFCC0;
    border-radius: 20px;
}
.progress-box{
    background-color: white;
    border: 2px solid black;
    border-radius: 20px;
}


</style>
