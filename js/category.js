function renderCategory(){
    $.ajax({
        url:'http://www.liulongbin.top:3007/my/article/cates',
        success:function(res){
            console.log(res);
        },
        headers:{
            Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTU4MSwidXNlcm5hbWUiOiJ6aGFuZyIsInBhc3N3b3JkIjoiIiwibmlja25hbWUiOiIiLCJlbWFpbCI6IiIsInVzZXJfcGljIjoiIiwiaWF0IjoxNTk0MjU2OTU4LCJleHAiOjE1OTQyOTI5NTh9.cGze3Tw6HRXm-Xz1BgzzIYhdLANwQaZkHGWe78i4PUQ'
        }
        
    });
}
renderCategory();