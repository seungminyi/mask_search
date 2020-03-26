$.ajax({
    url:'/view/find.html', // 요청 할 주소
    async:true,// false 일 경우 동기 요청으로 변경
    type:'POST', // GET, PUT
    data: {
        Name:'ajax',
        Age:'10'
    },// 전송할 데이터
    dataType:'text',// xml, json, script, html
    beforeSend:function(jqXHR) {},// 서버 요청 전 호출 되는 함수 return false; 일 경우 요청 중단
    success:function(jqXHR) {},// 요청 완료 시
    error:function(jqXHR) {},// 요청 실패.
    complete:function(jqXHR) {}// 요청의 실패, 성공과 상관 없이 완료 될 경우 호출
});


function getLocation() {
    if (navigator.geolocation) { // GPS를 지원하면
      navigator.geolocation.getCurrentPosition(function(position) {
        alert(position.coords.latitude + ' ' + position.coords.longitude);
      }, function(error) {
        console.error(error);
      }, {
        enableHighAccuracy: false,
        maximumAge: 0,
        timeout: Infinity
      });
    } else {
      alert('GPS를 지원하지 않습니다');
    }
  }