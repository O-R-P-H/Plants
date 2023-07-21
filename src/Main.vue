<script>

</script>
<template>



<div class="main_div">
<div class="title_div">
  <img src="./././../public/img/main%20title.svg" alt="main">
</div>
  <div class="subtitle">
    <p>All plants for your home
      in one app.</p>
  </div>
  <input type="email" placeholder="username" class="usermname" >
  <input type="password" placeholder="password" class="password" >
  <div class="buttons">
    <p id="reg">REGISTER</p>
    <p id="log">LOGIN</p>
  </div>
</div>
</template>

<style scoped>

@media (min-width: 769px) {
  input::placeholder{
    color: #F2F2F2;
  }
  #log{
    cursor: pointer;
    color: #FFFFFF;
    font-family: 'Inter',sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 1px;;
    margin-left: 0;
  }
  #reg{
    cursor: pointer;
    color: #5A7324;
    font-family: 'Inter',sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    letter-spacing: 1px;;
    margin-left: 0;
  }
  .buttons{
    width: 758px;
    display: flex;
    justify-content: space-between;
  }
  .password{
    color: #F2F2F2;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    padding-left: 32px;
    margin-top: 17px;
    width: 797px;
    height: 53px;
    border-radius: 40px;
    background: rgba(242, 242, 242, 0.50);
    border-style: hidden;
  }
  .usermname{
    color: #F2F2F2;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    padding-left: 32px;
    margin-top: 208px;
    width: 797px;
    height: 53px;
    border-radius: 40px;
    background: rgba(242, 242, 242, 0.50);
    border-style: hidden;
  }
  .subtitle{
    margin-top: 10px;
    display: flex;
    justify-content: center;
    text-align: center;
    font-family: 'Montserat',sans-serif;
    color: #F2F2F2;
    font-weight: 400;
    font-size: 24px;



  }
  .subtitle p{
    letter-spacing: 3px;
    width: 356px;
    margin: 0;
  }
  .title_div{
    height:92px ;
    display: flex;
    margin: 0;
    justify-content: center;
    width: 100%;
    font-size: 92px;
    color: #F2F2F2;
    font-weight: 900;
    font-family: 'Montserat' ,sans-serif ;
    letter-spacing: 9.66px;
    margin-top: 78px;
  }
  .title_div p{
    margin: 0;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); /* Внутренняя тень: смещение по X, смещение по Y, радиус размытия, цвет и прозрачность */

  }

  .main_div {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    width:100%;
    background-image: url("public/img/desctop_background.png");
  }
}
@media (max-width: 768px) {
  .main_div{
    display: grid;
    height: 100vh;
    width: 100%;
    background-image: url("public/img/mobile_back.png");
    background-repeat: no-repeat;
    background-size: cover;
  }
}
</style>