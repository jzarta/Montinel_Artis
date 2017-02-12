(function(){
    var carimages = document.querySelector('.carimages');
    carimages.addEventListener('click', function(e){
        if(e.target.tagName === 'IMG'){
            var overlay = document.createElement('div');
            overlay.id = 'overlay';
            
//            SET SOME STYLES
            overlay.style.position = 'absolute';
            overlay.style.top = 0;
            overlay.style.background = 'rgba(0,0,0,.5)';
            overlay.style.cursor = 'pointer';

            
            // set some the size
            overlay.style.width = window.innerWidth + 'px';
            overlay.style.height = window.innerHeight + 'px';
            overlay.style.top = window.pageYOffset + 'px';
            overlay.style.left = window.pageXOffset   + 'px';
            
            
//            APPENDING OVERLAY TO BODY
            document.body.appendChild(overlay);
            
            
//            IMAGE SRC
            var imageSrc = e.target.src;
            var popImg = document.createElement('img');
            popImg.id = 'popImg';
            popImg.src = imageSrc;
            
//            IMG STYLE
            popImg.style.display = 'block';
            popImg.style.width = '50%';
            popImg.style.margin = '0 auto';
            popImg.style.marginTop = '10%';
            popImg.style.border = 'thick solid white;
            
            overlay.appendChild(popImg);
            
//            REMOVE OVERLAY
            overlay.addEventListener('click', function(){
                if(overlay){
                    overlay.parentElement.removeChild(overlay);
                    
                    
                }
                
            });
            
//            OVERLAY TO FOLLOW SCROLL
            window.addEventListener('scroll', function(){
                if(overlay){
        
                    overlay.style.top = window.pageYOffset + 'px';
                    overlay.style.left = window.pageXOffset   + 'px';
        
        
                }
            });
            
//            OVERLAY TO ENCOMPASS WINDOW
            window.addEventListener('resize', function(){
                if(overlay){
        
                    overlay.style.width  = window.innerWidth + 'px';
                    overlay.style.height = window.innerHeight + 'px';
                    overlay.style.top    = window.pageYOffset + 'px';
                    overlay.style.left   = window.pageXOffset   + 'px';
        
                }
            });
     
        };
   });
    
    
    
    }());  //LOAD THE DOC FIRST