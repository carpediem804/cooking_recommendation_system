<template>
 <div id ="example_select">
        <select v-model = "selected">
              <option disabled value ="">재료 종류</option>
              <option>야채류</option>
              <option>해산물</option>
              <option>육류</option>
              <option>밀가루빵류/면류</option>
              <option>양념류</option>
              <option>기타</option>
              </select>
              
              <span v-if = "selected === '야채류' ">
                    <br>
                    
                    <input type ="checkbox" id="무" value="무"   v-model="checkedNames">
                    <label for="무" ><img v-bind:src = "imageLink1" width="50px" height="50px" /></label>
                    
                    
                    <input type ="checkbox" id="호박" value="호박" v-model="checkedNames">
                    <label for="호박"><img v-bind:src ="imageLink2" width="50px" height="50px"/>호박</label>
                    <br>
                    <input type ="checkbox" id="감자" value="감자" v-model="checkedNames">
                    <label for="감자"><img v-bind:src ="imageLink3" width="50px" height="50px"/>감자</label>
                    <br>
                    <input type ="checkbox" id="고추" value="고추" v-model="checkedNames">
                    <label for="고추"><img v-bind:src ="imageLink4" width="50px" height="50px"/></label>
                    <br>
                    <input type ="button" id="숙주" value="숙주" v-model="checkedNames">
                    <label for="숙주"><img v-bind:src ="imageLink5" width="50px" height="50px"/></label>
                    <br>
                    <input type ="checkbox" id="깻잎" value="깻잎" v-model="checkedNames">                    
                    <label for="깻잎"><img v-bind:src ="imageLink6" width="50px" height="50px"/></label>
                    <br>
                    <input type ="checkbox" id="양배추" value="양배추" v-model="checkedNames">                    
                    <label for="양배추"><img v-bind:src ="imageLink7" width="50px" height="50px"/></label>
                    <input type ="checkbox" id="양파" value="양파" v-model="checkedNames">                    
                    <label for="양파"><img v-bind:src ="imageLink8" width="50px" height="50px"/></label>
                    <input type ="checkbox" id="당근" value="당근" v-model="checkedNames">                    
                    <label for="당근"><img v-bind:src ="imageLink9" width="50px" height="50px"/></label>
                    <br>
                    <input type ="checkbox" id="오이" value="오이" v-model="checkedNames">                    
                    <label for="오이"><img v-bind:src ="imageLink10" width="50px" height="50px"/></label>
                    <input type ="checkbox" id="대파" value="대파" v-model="checkedNames">                    
                    <label for="대파"><img v-bind:src ="imageLink11" width="50px" height="50px"/></label>
                    <input type ="checkbox" id="두부" value="두부" v-model="checkedNames">
                    <img v-bind:src ="imageLink12" width="50px" height="50px"/>
                    <label for="두부">두부</label>
                    <br>
                    <input type ="checkbox" id="마늘" value="마늘" v-model="checkedNames">                    
                    <label for="마늘"><img v-bind:src ="imageLink13" width="50px" height="50px"/></label>
                    <input type ="checkbox" id="콩나물" value="콩나물" v-model="checkedNames">
                    <img v-bind:src ="imageLink14" width="50px" height="50px"/>
                    <label for="콩나물">콩나물</label>
                    <input type ="checkbox" id="토마토" value="토마토" v-model="checkedNames">
                    <label for="토마토">토마토</label>
                    <br>
                    <input type ="checkbox" id="파프리카" value="파프리카" v-model="checkedNames">
                    <label for="파프리카">파프리카</label>
                    <input type ="checkbox" id="무순" value="무순" v-model="checkedNames">
                    <label for="무순">무순</label>
                    <input type ="checkbox" id="버섯" value="버섯" v-model="checkedNames">
                    <label for="버섯">버섯</label>
                    <br>
                    <input type ="checkbox" id="부추" value="부추" v-model="checkedNames">
                    <label for="부추">부추</label>
                    <input type ="checkbox" id="브로콜리" value="브로콜리" v-model="checkedNames">
                    <label for="브로콜리">브로콜리</label>
                    <input type ="checkbox" id="옥수수" value="옥수수" v-model="checkedNames">
                    <label for="옥수수">옥수수</label>
                    <br>
                    <input type ="checkbox" id="애호박" value="애호박" v-model="checkedNames">
                    <label for="애호박">애호박</label>
                   
            
            
            
                                
                    <br>
                  </span>
            
                  <span v-else-if = "selected === '해산물' ">
                      <br>
                    <input type ="checkbox" id="고등어" value="고등어" v-model="checkedNames">
                    <label for="고등어">고등어</label>
                    <input type ="checkbox" id="어묵" value="어묵" v-model="checkedNames">
                    <label for="어묵">어묵</label>
                    <input type ="checkbox" id="연어" value="연어" v-model="checkedNames">
                    <label for="연어">연어</label>
                    <br>
                    <input type ="checkbox" id="새우" value="새우" v-model="checkedNames">
                    <label for="새우">새우</label>               
                    <input type ="checkbox" id="다시마" value="다시마" v-model="checkedNames">
                    <label for="다시마">다시마</label>
                    <input type ="checkbox" id="참치" value="참치" v-model="checkedNames">
                    <label for="참치">참치</label>
                    <br>
                    <input type ="checkbox" id="맛살" value="맛살" v-model="checkedNames">
                    <label for="맛살">맛살</label>
                    <input type ="checkbox" id="멸치" value="멸치" v-model="checkedNames">
                    <label for="멸치">멸치</label>
                    <input type ="checkbox" id="미역" value="미역" v-model="checkedNames">
                    <label for="미역">미역</label>
                    <br>
                    
                  </span>
            
                  <span v-else-if = "selected === '육류' ">
                      <br>
                    <input type ="checkbox" id="닭고기" value="닭고기" v-model="checkedNames">
                    <label for="닭고기">닭고기</label>
                    <input type ="checkbox" id="돼지고기" value="돼지고기" v-model="checkedNames">
                    <label for="돼지고기">돼지고기</label>
                    <input type ="checkbox" id="햄" value="햄" v-model="checkedNames">
                    <label for="햄">헴</label>
                    <br>
                    <input type ="checkbox" id="베이컨" value="베이컨" v-model="checkedNames">
                    <label for="베이컨">베이컨</label>
                    <input type ="checkbox" id="소고기" value="소고기" v-model="checkedNames">
                    <label for="소고기">소고기</label>
                    <br>
            
            
            
            
                  </span>
            
                  <span v-else-if = "selected === '밀가루빵류/면류' ">
                    <br>
                    <input type ="checkbox" id="라면" value="라면" v-model="checkedNames">
                    <label for="라면">라면</label>
                    <input type ="checkbox" id="파스타면" value="파스타면" v-model="checkedNames">
                    <label for="파스타면">파스타면</label>                        
                    <input type ="checkbox" id="빵가루" value="빵가루" v-model="checkedNames">
                    <label for="빵가루">빵가루</label>
                    <br>
                    <input type ="checkbox" id="만두피" value="만두피" v-model="checkedNames">
                    <label for="만두피">만두피</label>                
                    <input type ="checkbox" id="비스켓" value="비스켓" v-model="checkedNames">
                    <label for="비스켓">비스켓</label>
                    <input type ="checkbox" id="식빵" value="식빵" v-model="checkedNames">
                    <label for="식빵">식빵</label>
                    <br>
                    <input type ="checkbox" id="소면" value="소면" v-model="checkedNames">
                    <label for="소면">소면</label>
                    <br>
            
            
            
            
                  </span>
            
                  <span v-else-if = "selected === '양념류' ">
                      <br>
                    <input type ="checkbox" id="고추장" value="고추장" v-model="checkedNames">
                    <label for="고추장">고추장</label>
                    <input type ="checkbox" id="고춧가루" value="고춧가루" v-model="checkedNames">
                    <label for="고춧가루">고춧가루</label>
                    <input type ="checkbox" id="고추냉이" value="고추냉이" v-model="checkedNames">
                    <label for="고추냉이">고추냉이</label>
                    <br>
                    <input type ="checkbox" id="꿀" value="꿀" v-model="checkedNames">
                    <label for="꿀">꿀</label>
                    <input type ="checkbox" id="녹말가루" value="녹말가루" v-model="checkedNames">
                    <label for="녹말가루">녹말가루</label>
                    <input type ="checkbox" id="된장" value="된장" v-model="checkedNames">
                    <label for="된장">된장</label>
                    <br>
                    <input type ="checkbox" id="매실청" value="매실청" v-model="checkedNames">
                    <label for="매실청">매실청</label>
                    <input type ="checkbox" id="스파게티소스" value="스파게티소스" v-model="checkedNames">
                    <label for="스파게티소스">스파게티소스</label>
                    <input type ="checkbox" id="초고추장" value="초고추장" v-model="checkedNames">
                    <label for="초고추장">초고추장</label>
                    <br>
                    <input type ="checkbox" id="카레" value="카레" v-model="checkedNames">
                    <label for="카레">카레</label>
                    <input type ="checkbox" id="레몬즙" value="레몬즙" v-model="checkedNames">
                    <label for="레몬즙">레몬즙</label>
                    <input type ="checkbox" id="마요네즈" value="마요네즈" v-model="checkedNames">
                    <label for="마요네즈">마요네즈</label>                              
                    <br>
                    <input type ="checkbox" id="소주" value="소주" v-model="checkedNames">
                    <label for="소주">소주</label>
                    <input type ="checkbox" id="새우젓" value="새우젓" v-model="checkedNames">
                    <label for="새우젓">새우젓</label>
                    <input type ="checkbox" id="케찹" value="케찹" v-model="checkedNames">
                    <label for="케찹">케찹</label>
                    <br>
                    <input type ="checkbox" id="버터" value="버터" v-model="checkedNames">
                    <label for="버터">버터</label>
                    <input type ="checkbox" id="올리고당" value="올리고당" v-model="checkedNames">
                    <label for="올리고당">올리고당</label>
                    <input type ="checkbox" id="소금" value="소금" v-model="checkedNames">
                    <label for="소금">소금</label>
                    <br>
                    <input type ="checkbox" id="들깨가루" value="들깨가루" v-model="checkedNames">
                    <label for="들깨가루">들깨가루</label>
                    <br>
            
            
                    
            
            
            
            
                  </span>
            
                  <span v-else-if = "selected === '기타' ">
                    <br>
                    <input type ="checkbox" id="전분가루" value="전분가루" v-model="checkedNames">
                    <label for="전분가루">전분가루</label>                
                    <input type ="checkbox" id="부침가루" value="부침가루" v-model="checkedNames">
                    <label for="부침가루">부침가루</label>
                    <input type ="checkbox" id="튀김가루" value="튀김가루" v-model="checkedNames">
                    <label for="튀김가루">튀김가루</label>
                    <br>
                    <input type ="checkbox" id="밀가루" value="밀가루" v-model="checkedNames">
                    <label for="밀가루">밀가루</label>                
                    <input type ="checkbox" id="생크림" value="생크림" v-model="checkedNames">
                    <label for="생크림">생크림</label>
                    <input type ="checkbox" id="치즈" value="치즈" v-model="checkedNames">
                    <label for="치즈">치즈</label>
                    <br>
                    <input type ="checkbox" id="계란" value="계란" v-model="checkedNames">
                    <label for="계란">계란</label>               
                    <input type ="checkbox" id="우유" value="우유" v-model="checkedNames">
                    <label for="우유">우유</label>
                    <input type ="checkbox" id="떡" value="떡" v-model="checkedNames">
                    <label for="떡">떡</label>
                    <br>
                    <input type ="checkbox" id="밥" value="밥" v-model="checkedNames">
                    <label for="밥">밥</label>
                    <br>
            
            
            
                  </span>
        
        
        
             

                    <span>
                        체크한 이름 : {{ checkedNames }}
                        <br>
                        <input type="button" v-on:click="clear()" value=clear버튼>
                        <input type="button" v-on:click="ingredients" value ="이 재료 추천 받기">


                    </span>

              
  </div>
    
</template>

<script>
export default{
  name:'example_select',
  data(){
    return{
      selected : " ",
      checkedNames:[]
     }    
  },
  methods:{
    clear:function(){
        this.checkedNames.splice(0,this.checkedNames.length)
    },
    ingredients:function(){
      this.$http.post('http://localhost:8080/cook/ ',{
        checkedNames: this.checkedNames
      })
      
    }

}
}

</script>

<style>


</style>
