<div class="flex">
    <div class="flex-1" style="border-bottom: 15px solid #ffde26; padding:10px">
        <img style="width:200px" src="./build/img/3.png" alt="">
    </div>
    <div class="flex-none" style='margin-left:50px;position:relative;padding:10px'>
        <span class="bar"></span>
        <img style="width:200px" src="./build/img/1.png" alt="">
    </div>
</div>

<style>
    .right:before {
    content: '';
    line-height: 0;
    font-size: 0;
    width: 0;
    height: 0;
    border-top: 100px solid #fff;
    border-bottom: 50px solid transparent;
    border-left: 0px solid transparent;
    border-right: 30px solid transparent;
    position: absolute;
    top: 0;
    left: 0;
}
.bar{
    width: 20px;
    height: 100%;
    position: absolute;
    left: -50px;
    top: 0;
    background-color: #ffde26;
    transform: skew(337deg);
}

</style>