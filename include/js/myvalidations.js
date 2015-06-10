$(document).ready(function()
{
    // onfocus function start
  	$( "input" ).focus(function() 
    {
    		if(this.value.length==0)
    			{
    				$(this).siblings("p").hide();
    				$(this).parent().append("<p>Enter "+this.name+"</p>");  		
            $( this ).addClass("wrong");
    			}
          else if(this.type=='radio')
           {
            $(this).siblings("p").hide();
            $(this).siblings().removeClass("wrong");
           }
           else if(this.type=='checkbox')
           {
            $(this).siblings("p").hide();
            $(this).siblings().removeClass("wrong");
           }
            else if(this.value.length>=0)
              {
                $(this).addClass("wrong2");
              }

  	});
    //on blur function start
  	$( "input" ).blur(function() {
    		$( this ).removeClass("correct");
        $( this ).removeClass("wrong");
        if(this.value.length==0)
    			{
    				$(this).siblings("p").hide();
    				$(this).parent().append("<p>Enter "+this.name+"</p>");
    			}
  	});

     //text validation 
    $('input[type="text"]').on('keyup',function()
    { // When blur
      var len=(this).value.length;
      var nameExp = /^[A-Za-z0-9 ]/ ;

      if(len==0)
        {
          $(this).siblings("p").hide();
         $(this).parent().append("<p class='invalid'> Not empty</p>");
        }
        else if(len>0 && nameExp.test(this.value)==false)
          {
            $(this).siblings("p").hide();
            $(this).parent().append("<p class='invalid'> valid name!</p>");
          } 
          else if(nameExp.test(this.value)==true)
            {
              $(this).siblings("p").hide();
              $(this).parent().append("<p class='valid'>ok</p>");
            }
      });

    //password validation 
      $("input:password").keyup(function()
      {
        var len= (this).value.length;
        var pwdRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/; 
        if(len==0)
          {
            $(this).siblings("p").hide();
            $(this).parent().append("<p class='invalid'>Not empty</p>");
          }
        else if(len>0 && pwdRegex.test(this.value)==false)
          {
            $(this).siblings("p").hide();
            $(this).parent().append("<p class='invalid'>Password should be 6 characters minimum and atleast 1char,1 special sym & 1digit</p>");
         } 
        else if(len>0 && pwdRegex.test(this.value)==true)
          {
            $(this).siblings("p").hide();
            $(this).parent().append("<p class='valid'>ok</p>");
          }
      });

      //mobile validation 
      $('input[type="number"]').keyup(function()
      {
        var len= (this).value.length;
        var maxLength=10;
        var numRegex = /^[0-9]{1,10}$/ ; 
        if(len==0 || len<maxLength)
          {
           $(this).siblings("p").hide();
           $(this).parent().append("<p class='invalid'>Allows only 10 numbers </p>");
          }
          else if(len>maxLength)
          {
           $(this).siblings("p").hide();
           $(this).parent().append("<p class='invalid'>not exceed 10 numbers </p>"); 
          }          
          else if( len==maxLength && len<=maxLength && numRegex.test(this.value)==true)
          {
            $(this).siblings("p").hide();
            $(this).parent().append("<p class='valid'>ok</p>");
          }
      }); 

    //email validation 
  	$('input[type="email"]').on('keyup',function()
    { // When blur
  		var len=(this).value.length;
  	 	var emailRegex =  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  	 	if(len==0)
        {$(this).siblings("p").hide();
      $(this).parent().append("<p class='invalid'>Not Empty!</p>");
        }
  			else if(len>0 && emailRegex.test(this.value)==false)
          {
            $(this).siblings("p").hide();
            $(this).parent().append("<p class='invalid'>Enter a valid email address </p>");
          } 
  				else if(emailRegex.test(this.value)==true)
            {
              $(this).siblings("p").hide();
              $(this).parent().append("<p class='valid'>ok</p>");
            }
      });
          
       $("input:submit").click(function(){ 
        return formGenericValidation();
      });//end of submit button

     
function formGenericValidation()
 {
          var check;         
          var numRegex = /^[0-9]{1,10}$/ ; 
          var nameRegex  = /^[A-Za-z0-9 ]/ ;
          var emailRegex= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          var pwdRegex =  /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,12}$/;
 
          $("form input,form select,form option").each(function()
          {       
            if(this.type=="text")        
            {
                 var maxLength=this.max;
                 var minLength=this.min;
                 if(maxLength=="") maxLength=15;
                 if(minLength=="") minLength=5;
                 var p=this.value;
                 var len=p.length;
                 if(len<minLength || len>maxLength )
                  {
                    this.focus();
                    check=0;
                    return false;
                  }                
                 else if(len>=minLength && len<=maxLength && nameRegex.test(p)==false)
                  {
                    alert("invalid");
                    check=0;
                    return false;
                  }
            }
            else if(this.type=="number")
            {
                var p=this.value;
                var len=p.length;
                var maxLength= this.max;             
                if(maxLength=="") maxLength=10;

                  if(len==0 || len<maxLength)
                    {
                      this.focus();
                      check=0;
                      return false;
                    }                 
                  else if(len>maxLength && numRegex.test(p)==false )
                    {
                      this.focus();
                      check=0;
                      return false;
                    }
                     else if(len<maxLength && numRegex.test(p)==false )
                    {
                      this.focus();
                      check=0;
                      return false;
                    }
            }
            else if(this.type=="email" && this.required==true)
            {
                    var p=this.value;
                    var len=p.length;
                    if(len==0)
                      {
                        this.focus();
                        check=0;
                        return false;
                      }
                    else if(len>0 && emailRegex.test(p)==false)
                      {
                        this.focus();
                        check=0;
                        return false;
                      }
             }     
            else if(this.type=="password")
            {
                    p=this.value;
                    len=p.length;                   
                    var minLength=this.min;
                    var maxLength=this.max;                    
                    if(minLength=="") minLength=6;
                    if(maxLength=="") maxLength=12;

                    if(len<minLength)
                      {
                        this.focus();
                        check=0;
                        return false;
                      }
                    else if(len>maxLength)
                      {
                        this.focus();
                        check=0;
                        return false;
                      }
                    else if(len>=minLength && len<=maxLength && pwdRegex.test(p)==false)
                      {
                        this.focus();
                        check=0;
                        return false;
                      }                
              }      
              else if(!$("input:radio").is(':checked'))
             {
                 $('input:radio:first').focus();
                 check=0;
                 return false;
             }    
              else if(!$("input:checkbox").is(':checked'))
             {
                 $('input:checkbox:first').focus();
                 check=0;
                 return false;
             } 
               else if($("option:selected").val()=="")
             {
                $('select').focus();
                check=0;
                return false;
              }         
        
          }); // .each(function ()) end

          if(check==0)
            return false;
          else
            {
              alert("Application successfully submitted");              
             }
      } //formGenericValidation() end

}); //  ready function() ending
