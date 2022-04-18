$("document").ready(() => {
    $('#submit-button').click(function(e) 
    {
    
        checked = $("input[type=checkbox]:checked").length;
        if (checked < 2) {
            alert("must choose more then two checkbox selected");
            e.preventDefault();
        }
        var fullName = $('input[name="fullName"]').val();
        var onlyChars = /^[A-Za-z ]+$/.test(fullName);
        if(fullName)
        {
            if(!fullName.includes(" ") &&!onlyChars )
            {
            alert("Full Name: contain only letters and at least one space");
            e.preventDefault();
            }
        }
    })
});

