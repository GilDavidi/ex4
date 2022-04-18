$("document").ready(() => {
    $('#submit-button').click(function(e) 
    {
    
        checked = $("input[type=checkbox]:checked").length;
        if (checked < 2) {
            alert("must choose more then two checkbox selected");
            e.preventDefault();
        }
        var fullName = $('input[name="fullName"]').val();
        if(fullName)
        {
            if(!fullName.includes(" "))
            {
            alert("Full Name: must contain at least one space");
            e.preventDefault();
            }
        } 
    })
});

