$(function(){

    /* 네비게이션 */

    $('.nav>ul>li').mouseover(function(){
        $(this).find('.sub').stop().slideDown(300);
    });

    $('.nav>ul>li').mouseout(function(){
        $(this).find('.sub').stop().slideUp(200);
    });

    /* 서치박스 */

    jQuery(document).ready(function(){

        btn = 1;
        $('#total_btn').click(function(){
            if(btn == 1){
                $('#search_box').slideDown();
                btn = 0;
            }
            else{
                $('#search_box').slideUp();
                btn = 1;
            }
        })
    });


    /* 배너 */

    var visual = $('#banner>li');
    var button = $('#button>li');
    var current = 0;    /* 초기화 */
    var setIntervalId;  /* clearInterval을 사용하기 위한 변수가 필요하다 */

    timer();   /* 사용자 지정함수 */

    function timer(){
        setIntervalId = setInterval(function(){
            var prev = visual.eq(current);
            var pn = button.eq(current);

            move(prev, 0, '-100%');
            pn.removeClass('on');

            current++;

            if(current == visual.size()){current=0}

            var next = visual.eq(current);
            var pnn = button.eq(current);

            move(next, '100%', 0);
            pnn.addClass('on');
        }, 2500);
    };

    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end},500);
    }

    
    /* 버튼 */

    
    

    /* 버튼을 클릭했을 때 */
    button.on({click: function(){

        var tg = $(this);
        var i = tg.index(); /* 순번, 선택한 버튼의 인덱스 번호 */
        
        button.removeClass('on');   /* 활성화된 on해제 */
        tg.addClass('on');  /* 선택되어진 버튼의 on 활성화 */

        move1(i);

        }

    });

    function move1(i){
        if(current == i) return /* 현재 보이는 이미지가 i와 같다면 종료 */

        var currentEl = visual.eq(current);
        var nextEl = visual.eq(i);

        currentEl.css({left:0}).stop().animate({left:'-100%'},500);
        nextEl.css({left:'100%'}).stop().animate({left:0},500);

        current = i;    /* i는 현재 보여지는 이미지 */

    }

    /* 호버시 멈추는 기능 */

    $('#banner, #button').on({
        mouseover:function(){
            clearInterval(setIntervalId);
        }, mouseout: function(){
            timer();
        }
    });



    

});