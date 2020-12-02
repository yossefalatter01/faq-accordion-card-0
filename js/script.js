// $(function(){
//     $(".app").hide();
//     setTimeout(()=>{
//         $('#loading').slideUp(1000).hide(1000);
//         $(".app").slideDown(1000);
//     },3000)    
// })
$(function(){
    let headcontrol = [3,4,3,3,3];
    for ( let i = 1 ; i < 6 ; i++){
        $(`#b${i}`).hover(()=>{
            $(`#b${i}`).css("color","var(--hoverText)");
        },()=>{
            if(headcontrol[i-1]%2 == 0){
                $(`#b${i}`).css("color","var(--activeText)");
                $(`#b${i}`).css("font-weight","bold");
            }else{
                $(`#b${i}`).css("color","var(--mainText)");
                $(`#b${i}`).css("font-weight","normal");
            }
        })
        $(`#b${i}`).click(()=>{
            $(`#a${i}`).slideToggle();
            if(ang[i-1] > 360){
                ang[i-1] = 180;
            }
            headcontrol[i-1]++;
            $(`#i${i}`).css(`transform`,`rotate(${ang[i-1]}deg)`);
            ang[i-1] += ang[i-1];
            if(headcontrol[i-1]%2 == 0){
                $(`#b${i}`).css("color","var(--activeText)");
                $(`#b${i}`).css("font-weight","bold");
            }else{
                $(`#b${i}`).css("color","var(--subText)");
                $(`#b${i}`).css("font-weight","normal");
            }
            
            
        })
    }
    let ang = [180,180,180,180,180] ;
    for ( let i = 1 ; i < 6 ; i++){
        $(`#i${i}`).click(()=>{
            $(`#a${i}`).slideToggle();
            if(ang[i-1] > 360){
                ang[i-1] = 180;
            }
            headcontrol[i-1]++;
            $(`#i${i}`).css(`transform`,`rotate(${ang[i-1]}deg)`);
            ang[i-1] += ang[i-1];
            if(headcontrol[i-1]%2 == 0){
                $(`#b${i}`).css("color","var(--activeText)");
                $(`#b${i}`).css("font-weight","bold");
            }else{
                $(`#b${i}`).css("color","var(--subText)");
                $(`#b${i}`).css("font-weight","normal");
            }
            
        })
    }
   
});
$(function(){
    $("body").niceScroll({
        cursorborder : "none",
        cursorcolor : "hsl(14, 88%, 65%)",
        cursorfixedheight: 300,
        scrollspeed: 160,
    });
})

 