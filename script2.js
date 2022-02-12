
var ball =1;
var ball123=1;
var name = prompt("Введи свое имя , смертный");


function F_button1(){
    if(ball == 1){

        document.getElementById("text").innerHTML="- Привет , " + name + " в своем мире ты умер ... и твоя душа оказалась здесь'";
        document.getElementById("first_ans").innerHTML="Кто ты?";
        document.getElementById("second_ans").innerHTML="Как я умер?";
        document.getElementById("third_ans").innerHTML="Что это за место?";

        document.getElementById("first_ans").style.visibility = 'visible';
        document.getElementById("second_ans").style.visibility = 'visible';
        document.getElementById("third_ans").style.visibility = 'visible';

        ball=2;
    }

      else if(ball == 2){

        document.getElementById("text").innerHTML="- Я? Я тот , кто ответственный за реинкарнацию ... И имя мне Кай";
        document.getElementById("first_ans").innerHTML="Что со мной будет дальше?";
        document.getElementById("second_ans").style.visibility = 'hidden';
        document.getElementById('third_ans').style.visibility = 'hidden';
        ball=3;

    }

    else if(ball == 3){
        document.getElementById("text").innerHTML="Ну , я подарю тебе жизнь в новом теле в ДРУГОМ МИРЕ , полном магии и других чудес.";
        document.getElementById("first_ans").innerHTML="Понятно...";
        document.getElementById("second_ans").innerHTML="А могу ли я вернуться назад в свой мир?";

        document.getElementById("first_ans").style.visibility = 'visible';
        document.getElementById("second_ans").style.visibility = 'visible';
        document.getElementById("third_ans").style.visibility = 'hidden';
        ball=12;
}

    else if(ball == 4){
        document.getElementById("text").innerHTML="Окей, что именно тебе интересно?";
        document.getElementById("first_ans").innerHTML="Расскажи, что тут просходит ";
        document.getElementById("second_ans").innerHTML="Можешь рассказать правила гонок?";
        document.getElementById('third_ans').style.visibility = 'hidden';
        ball=6;
}

    else if(ball == 6){
        document.getElementById("text").innerHTML="Что тут происходит? Да ничего такого, просто группка ненормальных носится по ночному городу на бешенных скоростях...";
        document.getElementById("first_ans").innerHTML="Ясно...";
        document.getElementById("second_ans").style.visibility = 'hidden';
        document.getElementById('third_ans').style.visibility = 'hidden';
        ball=13;
 }

    else if(ball == 13){
        document.getElementById("text").innerHTML="Ну все, погнали уже наконец!";
        document.getElementById("first_ans").innerHTML="Далее...";
        document.getElementById("second_ans").style.visibility = 'hidden';
        document.getElementById('third_ans').style.visibility = 'hidden';
        ball=1;
 }


    else if(ball == 12){
        document.getElementById("text").innerHTML="- Но ... У меня есть для тебе интересное предложение..." ;
        document.getElementById("first_ans").innerHTML="Ну , мне терять нечего...";
        document.getElementById("first_ans").style.visibility = 'visible';
        document.getElementById("second_ans").style.visibility = 'hidden';
        document.getElementById('third_ans').style.visibility = 'hidden';
        ball=14;
 }

    else if(ball == 14){
        document.getElementById("text").innerHTML="Так как в прошлой жизни ты был лучшим киллером , то я хочу , чтоб в новой жизни ... когда твоему новому телу будет 20 ... ты убил героя . ";
        document.getElementById("first_ans").innerHTML="Но...";
        document.getElementById("second_ans").style.visibility = 'hidden';
        document.getElementById('third_ans').style.visibility = 'hidden';
        ball=15;
 }

    else if(ball == 15){
        document.getElementById("text").innerHTML="Не волнуйся , я дам твоему телу несколько НЕОБЫЧНЫХ навыков , которые будут полезны в этом мире...";
        document.getElementById("first_ans").innerHTML="ну давай";
        document.getElementById("first_ans").style.visibility = 'visible';
        document.getElementById("second_ans").style.visibility = 'hidden';
        document.getElementById('third_ans').style.visibility = 'hidden';
        ball=16;
 }

    else if(ball == 16){
        document.getElementById("text").innerHTML="Вы открываете глаза и понимаете , что сейчас вы находитесь в теле младенца...";
        document.getElementById("first_ans").innerHTML="ПРОДОЛЖЕНИЕ СЛЕДУЕТ";
        document.getElementById("second_ans").innerHTML="";
        document.getElementById("first_ans").style.visibility = 'visible';
        document.getElementById("second_ans").style.visibility = 'hidden';
        document.getElementById('third_ans').style.visibility = 'hidden';
        ball=1234567890;
 }


   else if(ball == 5){

        document.getElementById("text").innerHTML="Ты мне нравишься , давай ка я тебе кое что предложу...";
        document.getElementById("first_ans").innerHTML="Согласиться(ибо перечить божеству страшно)";
        document.getElementById("second_ans").innerHTML="";

        document.getElementById("first_ans").style.visibility = 'visible';
        document.getElementById("second_ans").style.visibility = 'hidden';
       document.getElementById('third_ans').style.visibility = 'hidden';
        ball=14;
 }


     else if(ball == 50){
        document.getElementById("text").innerHTML="но ... у меня для тебя есть задание , если ты не против";
        document.getElementById("first_ans").innerHTML="*принять задание*";

        document.getElementById("first_ans").style.visibility = 'visible';
        document.getElementById("second_ans").style.visibility = 'hidden';
         document.getElementById('third_ans').style.visibility = 'hidden';
        ball=51;
 }

     else if(ball == 51){
        document.getElementById("text").innerHTML="*Кай(Божество) обьясняет , что твоей миссией будет убить героя , который в будущем мог стать причиной апокалипсиса... так же он говорт , что у тебя сохраниться помять о прошлой жизни и тебе будут доступны некоторые особые навыки. *";
        document.getElementById("first_ans").innerHTML="Далее...";

        document.getElementById("first_ans").style.visibility = 'visible';
        document.getElementById("second_ans").style.visibility = 'hidden';
         document.getElementById('third_ans').style.visibility = 'hidden';
        ball=52;
 }

     else if(ball == 52){
        document.getElementById("text").innerHTML="*Ты принял свою миссию и начал обдумывать все закрыв глаза*";
        document.getElementById("first_ans").innerHTML="Далее...";

        document.getElementById("first_ans").style.visibility = 'visible';
        document.getElementById("second_ans").style.visibility = 'hidden';
         document.getElementById('third_ans').style.visibility = 'hidden';
        ball=53;
}

     else if(ball == 53){
        document.getElementById("text").innerHTML="Открыв глаза ты оказался в незнакомом месте ...";
        document.getElementById("first_ans").innerHTML="Попробовать подняться ";
        document.getElementById("second_ans").innerHTML="Оглядеться";

        document.getElementById("first_ans").style.visibility = 'visible';
        document.getElementById("second_ans").style.visibility = 'visible';
         document.getElementById('third_ans').style.visibility = 'hidden';
        ball=54;
}

     else if(ball == 54){
        document.getElementById("text").innerHTML="Ты не можешь встать ... но через мгновение ты осознаешь , что ты в теле совсем маленького ребенка ... Твоя миссия уже началась!";
        document.getElementById("first_ans").innerHTML="ПРОДОЛЖЕНИЕ СЛЕДУЕТ!";
        document.getElementById("second_ans").innerHTML="";

        document.getElementById("first_ans").style.visibility = 'visible';
        document.getElementById("second_ans").style.visibility = 'hidden';
         document.getElementById('third_ans').style.visibility = 'hidden';
        ball=1234567890;
 }

    else if(ball == 2){
        document.getElementById("text").innerHTML="Ты был предан организацией , на которую работал , тебе было известно слишком много и они решили тебя устранить.";
        document.getElementById("first_ans").innerHTML="Далее";

        document.getElementById("first_ans").style.visibility = 'visible';
        document.getElementById("second_ans").style.visibility = 'hidden';
        document.getElementById('third_ans').style.visibility = 'hidden';
        ball=5;
    }


else if(ball == 12){
        document.getElementById("text").innerHTML="Нет , однажды умерев в однов мире в него уже не попасть.";
        document.getElementById("first_ans").innerHTML="Ясно...";

        document.getElementById("first_ans").style.visibility = 'visible';
       document.getElementById("second_ans").style.visibility = 'hidden';
    document.getElementById('third_ans').style.visibility = 'hidden';
        ball=3;
    }

       else if(ball == 1234567890){
        document.getElementById("text").innerHTML="Первыя глава завершена , продолжение будет , когда мне его зададут...";
        document.getElementById("first_ans").innerHTML="";

        document.getElementById("first_ans").style.visibility = 'hidden';
        document.getElementById("second_ans").style.visibility = 'hidden';
           document.getElementById('third_ans').style.visibility = 'hidden';
        ball=57;
 }
}
 function F_button3(){
    if(ball == 2){
        document.getElementById("text").innerHTML="это загробный мир , а именно место , где я перенаправляю души в паралельную вселенную для перерождения";
        document.getElementById("first_ans").innerHTML="Далее";

        document.getElementById("first_ans").style.visibility = 'visible';
        document.getElementById("second_ans").style.visibility = 'hidden';
         document.getElementById('third_ans').style.visibility = 'hidden';
        ball=50;
    }
 }
