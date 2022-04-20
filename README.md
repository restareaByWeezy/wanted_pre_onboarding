# Wanted_pre_onboarding 구현과제

<!--  -->scss와 react를 이용하여 구현하였고 필요한 모든 데이터값은 확장성을 생각하여
<!--  -->app.js에서 작성하였고 props로 넘겨주는 형태를 택했습니다.

## 1.Toggle

### :point_right: 구현방법

양자택일이라는 가정하에 true/false의 형태로 state에 담아주었고
클릭시 classname추가로 왼쪽 오른쪽 움직임을 css로 애니메이션 효과를 주었습니다.

### :question: 구현하면서 어려웠던 점

고민했던 부분은 예시 화면에서 메뉴의 형태였기 때문에 양자택일이 아닐 경우
확장성을 생각하면 true/false가 아니고 숫자나 다른 방식으로 구현하는게 맞지 않나라는 생각을 하였습니다.
스타일상에서 하얀 동그라미가 글자를 가리는 문제점이 있어서 이 부분을 해결하는 것이 어려웠습니다.
해결방안으로서는 z-index를 이용하여 화면을 가리지 않게끔 하였습니다.

## 2.Tab

### :point_right: 구현방법

구현방식은 토글과 비슷하지만 true/false가 아닌 숫자의 형태로 state에 담아주었습니다.
애니메이션 같은 경우는 확장성을 생각하여 (스테이트 값 \* 움직일 픽셀)로 움직임을 주었습니다.

### :question: 구현하면서 어려웠던 점

scss를 사용하고있는 터라 변수값을 불러오지 못하는 어려움이 있었습니다.  
애니메이션 구현을 위해 인라인 스타일링을 사용하여 해결하였고 그 외에는 토글과 비슷하여
큰 어려움은 없었습니다.

## 3.Slider

### :point_right: 구현방식

퍼센트를 state로 관리하여 display 해야되는 곳에 변수로서 불러와
화면에 뿌려주었습니다.
추가적으로 1 25 50 100에 해당하는 퍼센트로 변경해주는 버튼을 만들어
클릭시 state 값을 변경하여 구현하였습니다.

### :question: 구현하면서 어려웠던 점

스타일링이 가장 어려웠던 항목이었고 range track에 대한
스타일링이 어려웠습니다.
결과적으로 range styling이 미흡한 것이 아쉬움으로 남았습니다.

## 4.Input

### :point_right: 구현방식

가장 많은 state를 설정해줘야 했던 항목이었고
이메일, 패스워드에 대한 state
적합한지에 대한 true/false값을 담을 state
패스워드를 보여줄지에 대한 true/false값을 담을 state를
설정해주었고

이메일에 대한 적합성 판별은 정규표현식을 이용하였고
onblur를 통해 이메일이 적합하지 않았을 때
에러 메세지를 띄워주었습니다.

패스워드의 경우
아이콘 클릭시 state의 true/false값을 변경해
패스워드를 가시할지 아닐지를 정해주었습니다.

### :question: 구현하면서 어려웠던 점

에러 메세지 구현해서 어려움을 겪었고
처음에 다음과 같이 이벤트리스너로 구현하려 했는데

    useEffect(() => {
       const email = document.querySelector(".e-mail");
       email.addEventListener("focusout", event => {
         if (!emailValidation(event.target.value)) {
            setShowError(true);
         }
       });
     }, []);

이 경우 DOM을 건드리기 때문에 showError의 변화를 캐치할 수 없었고
이를 해결하기 위해 onBlur를 이용하였습니다.

## 5.Dropdown

### :point_right: 구현방식

input값, 필터된 값, 선택한 값, 목록 표시 여부를 결정할 state를 설정해주었고
필터 검색을 위해 includes 함수와 toLowerCase를 이용해주었고
or연산자를 통해 대문자,소문자 관계없이 일치할 경우 값을 불러오게 설정하였습니다.

### :question: 구현하면서 어려웠던 점

대소문자 관계없이 필터처리하는 것이 toLowerCase가 생각나지 않아서 어려웠고
스타일링 상에서 아이템들이 많아서 각각의 크기 조정이나 간격 설정등이 어려웠습니다.
아이콘을 원하는 위치에 absolute를 이용하여 배치하는데 익숙하지 않아 어려움을 겪었습니다.
