  if(window.outerWidth < 1366){
            $(".team-area").css({
                paddingRight:"0px",
                paddingLeft:"0px"
            })
        }else{
         $(".team-area").css({
                paddingRight:"150px",
                paddingLeft:"150px"
            })
        }

        /**** TEAM SECTION JS CODES ***********************/
    // RECOMMEND MAX MARGIN 20PX IF YOU WANT MORE SPACE BETWEEN ITEMS --
    // -- MAKE FEWER SLIDE ITEMS  

    var itemwidth = 150;
    var margin = 15;
    let item = 4;
    var item_320 = 1;
    var item_360 = 1;
    var item_375 = 1;
    var item_414 = 1;
    var item_768 = 2;
    var item_1024 = 2;

   // var mainareacount = haha2 + margin*haha;
   var areaelem = $(".team-area");
    if(window.outerWidth < 1366){
        $(".team-area").css({
            paddingRight:"0px",
            paddingLeft:"0px"
        })
    }else{
        $(".team-area").css({
            paddingRight:"150px",
            paddingLeft:"150px"
        })
    }

 
    var lentcount = itemwidth*item;
         var addcount = item*2;
         var marcount = addcount * margin;

         // THİS COUNT "\/300\/" 
         // IS FROM CSS PADDING (team-area) CLASS
         // IF YOU WANT CHANGE IT 
         // CHANCE FROM CSS AND HERE DOWN \/
         var extpadding = 300;
         let endcount = 1350; 
        areaelem.css({
            maxWidth: endcount + "px"
        })
        var up_date_count_1 = endcount - extpadding;
        var up_date_count_2 =  up_date_count_1 / item;
        var up_date_count_3 = Math.floor(up_date_count_2) - margin*2;
    $(document).ready(function(){
        
        

        if(window.outerWidth >= 768){
            setInterval(function(){
                $(".my-head").fadeIn()
                $("main").css("padding-top","80px")
            },5000)
                $(".product-preview").css("top","5px")
        }
            
        let new_wind_cont_spec = window.innerWidth;
        endcount = new_wind_cont_spec;
        var res_count = endcount / item;
        if(window.outerWidth < 1366){
            $(".team-area").css({
                 paddingRight:"0px",
                paddingLeft:"0px"
            })
            let testing = margin*2;
            let testing_2 = testing * item;
            up_date_count_3 = res_count-testing_2;
                
        }else{
                $(".team-area").css({
                    paddingRight:"150px",
                    paddingLeft:"150px"
                })
            }
        })

        if(window.outerWidth === 1024){
            if(margin != 0){
                item = item_1024;
                var resp_margin =  margin * 2;
                var up_date_magin = 1024 - resp_margin * item;
                up_date_count_3 = up_date_magin / item;   
            }
            if(margin === 0){
                item = item_1024;
                var up_date_magin = 1024;
                up_date_count_3 = up_date_magin / item;   
            }    
        }
        if(window.outerWidth === 768){
            if(margin != 0){
                item = item_768;
                var resp_margin =  margin * 2;
                var up_date_magin = 768 - resp_margin * item;
                up_date_count_3 = up_date_magin / item;   
            }
            if(margin === 0){
                item = item_768;
                var up_date_magin = 768;
                up_date_count_3 = up_date_magin / item;   
            }    
        }
        if(window.outerWidth === 414){
            if(margin != 0){
                item = item_414;
                var resp_margin =  margin * 2;
                var up_date_magin = 414 - resp_margin * item;
                up_date_count_3 = up_date_magin / item;   
            }
            if(margin === 0){
                item = item_414;
                var up_date_magin = 414;
                up_date_count_3 = up_date_magin / item;   
            }    
        }
        if(window.outerWidth === 375){
            if(margin != 0){
                item = item_375;
                var resp_margin =  margin * 2;
                var up_date_magin = 375 - resp_margin * item;
                up_date_count_3 = up_date_magin / item;   
            } 
            if(margin === 0){
                item = item_375;
                var up_date_magin = 375;
                up_date_count_3 = up_date_magin / item;   
                console.log(up_date_count_3)
            }   
        }
        if(window.outerWidth === 360){
            if(margin != 0){
                item = item_360;
                var resp_margin =  margin * 2;
                var up_date_magin = 360 - resp_margin * item;
                up_date_count_3 = up_date_magin / item;   
            } 
            if(margin === 0){
                item = item_360;
                var up_date_magin = 360;
                up_date_count_3 = up_date_magin / item;   
            }   
        }
        if(window.outerWidth === 320){
            if(margin != 0){
                item = item_320;
                var resp_margin =  margin * 2;
                var up_date_magin = 320 - resp_margin * item;
                up_date_count_3 = up_date_magin / item;   
            }
            if(margin === 0){
                item = item_320;
                up_date_count_3 = 320 / item;   
                console.log(up_date_count_3)
            }  

        }
       
    if (margin != 0 ) {
        endcount = 1245 - marcount;
        var last_count = endcount / item;
        if(item == 1){
            itemwidth = up_date_count_3;
        }
        else if(item == 2){
            itemwidth =  up_date_count_3;
        }
        if(item == 3){
            itemwidth =  up_date_count_3;
        }
        if(item == 4){
            itemwidth =  up_date_count_3;
        }
        if(item == 5){
            itemwidth =  up_date_count_3;
        }
        if(item == 6){
            itemwidth =  up_date_count_3;
        }
        if(item == 7){
            itemwidth = up_date_count_3;
        }
        if(item == 8){
            itemwidth = up_date_count_3;
        }
        if(item == 9){
            itemwidth =  up_date_count_3;
        }
    }
    else if(margin === 0 ){
        if(item == 1){
            itemwidth = up_date_count_3;
            // console.log(up_date_count_3)
        }
        else if(item == 2){
            itemwidth = up_date_count_3;
            // console.log(up_date_count_3)
        }
        if(item == 3){
            itemwidth = up_date_count_3;
            // console.log(up_date_count_3)
        }
        if(item == 4){
            itemwidth = up_date_count_3;
            // console.log(up_date_count_3)
        }
        if(item == 5){
            itemwidth = up_date_count_3;
            // console.log(up_date_count_3)
        }
        if(item == 6){
            itemwidth = up_date_count_3;
            // console.log(up_date_count_3)
        }
        if(item == 7){
            itemwidth =up_date_count_3;
            // console.log(up_date_count_3)
        }
        if(item == 8){
            itemwidth =up_date_count_3;
            // console.log(up_date_count_3)
        }
        if(item == 9){
            itemwidth = up_date_count_3;
            // console.log(up_date_count_3)
        }
    }
    var Left = itemwidth + margin*2;
    var maincount = itemwidth + margin*2;
    var items = $(".items");
    for(i = 0 ; i < items.length; i++ ){
        var lists = $(".items")[i];
       lists.classList.add("myitem" + i)
    }
    var itmswidth = $(".itemarea").innerWidth();
    // console.log(itmswidth/items.length)
    $(".items").css({
        width:itemwidth,
        marginLeft:margin,
        marginRight:margin,
        left:"-" + Left + "px"
    });
    var heightcount = $(".items").innerHeight()
    var jaja =items.length+2;
    var allcount = maincount * jaja;
    $(".all-items").css({
        width:allcount + "px",
        height:heightcount + "px"
    })



       // console.log(item)
       var jua = $(".items").length;
    // console.log(hiddencount.length)
    if(jua == item){
        $(".carousel-btns").css("display","none")
        $(".items").css("left","0px")
    }else if(jua !== item){
        $(".carousel-btns").css("display","block")
        $(".items").css({
            left:"-" + Left + "px"
        })
    }
    if ( jua < item ){
        $(".team-area").css("display","none")
        console.error(item + "th element is not defined")
    }
    


    $(".prev").on("click",function(){

       $(".prev").prop('disabled', true);
       setTimeout(function(){
            $(".prev").prop('disabled', false);
       },550)

        var prevscount2 = itemwidth + margin;
        $(".all-items").animate({
            left:prevscount2 + "px"
        },500,function(){
            $(".all-items").css("left","0px")
             $(".all-items .items:last").insertBefore(".all-items .items:first")
        });
    }) 
    $(".next").on("click",function(){
       $(".next").prop('disabled', true);
       $(".all-items .items:first").clone().appendTo(".all-items");
       setTimeout(function(){
            $(".next").prop('disabled', false);
            $(".all-items .items:last").remove();
       },550)
       var  prevscount1 = itemwidth + margin;
        $(".all-items").animate({
            left:"-" + prevscount1 + "px"
        },500,function(){
                    
            $(".all-items").css("left","0px")
            $(".all-items .items:first").insertAfter(".all-items .items:last")
        });

    }) 