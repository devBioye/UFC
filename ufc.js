
    var isOpen = false;
    function showData(id) {
        
        var showDetail = document.getElementById(id);
        if(isOpen == false){
        
        showDetail.innerHTML = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro cum ipsam sed a quasi iure hic odit? Necessitatibus corporis cupiditate sit impedit dolorem porro doloribus, deserunt suscipit architecto rem tenetur.";
        isOpen = true;
    }
        else{
            showDetail.innerHTML = "";
            isOpen = false;

        }
    }
    function showAccountData() {
        // alert('hahah');
        var showDetail = document.getElementById("account_inf");
        if(isOpen == false){
        
        showDetail.innerHTML = "Account Number: 2205038648<br />Account Name: Universal Christian Fellowship<br />Bank Name: United Bank Of Africa";
        isOpen = true;
    }
        else{
            showDetail.innerHTML = "";
            isOpen = false;

        }
    }
    

