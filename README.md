# web_team_project

# 요리 추천 시스템
  자취생들을 위한 요리 추천 시스템으로서 냉장고에 있는 요리 재료들을 선택하면 그 요리재료에 맞는 요리를 세가지를 추천해줍니다
  또한 추천 된 요리들에 대한 요리법 들도 볼 수 있습니다.
  계시판을 사용하여 사용자들이 자신들이 만들 요리를 사진과 글로써 올릴 수 있으며 
  사용자들은 다른 사용자가 올린 게시판을 볼 수 있으며 하트를 누름으로서 좋은 글을 추천할 수 있습니다. 
  개인사용자들은 자신의 프로필 사진과 글을 수정할 수 있습니다. 
  
 # 처음 페이지
 ![default](https://user-images.githubusercontent.com/33194900/53872981-c34af700-4042-11e9-850d-837fcf232bb5.JPG)
 # 요리 추천 페이지
 ![2](https://user-images.githubusercontent.com/33194900/53872732-2ee09480-4042-11e9-9564-993d816bdf30.JPG)
 # 재료에 따른 추천 요리 페이지
 ![323](https://user-images.githubusercontent.com/33194900/53872771-43249180-4042-11e9-8dd1-fca3c09e8f34.JPG)
 # 추천 요리의 요리법 확인
 ![444](https://user-images.githubusercontent.com/33194900/53872813-5a637f00-4042-11e9-8f46-2e1f90fd720e.JPG)
 # 계시판 작성 
 ![5555](https://user-images.githubusercontent.com/33194900/53872851-75ce8a00-4042-11e9-9320-6fb653fb8c6f.JPG)
 # 계시판 
 ![default](https://user-images.githubusercontent.com/33194900/53872894-8a128700-4042-11e9-9652-affb8385523c.JPG)
 ![444444](https://user-images.githubusercontent.com/33194900/53872904-8da60e00-4042-11e9-90ee-d6f514f64299.JPG)
 
## frontend
사용법 : frontend로 이동후 
npm run serve하여 vue를 실행시키면 됩니다. 
특징 : vuefy,bootstrap를 사용하였습니다.
       axios를 사용하여 서버와 통신하였습니다

## backend 
 사용법 : backend로 이동 후 
 node server.js로 이동하면 됩니다. 
 특징 : login은 firebase를 사용하였고 
        요리추천 관련을 위해 db는 moongoose를 사용하였습니다.
        요리 추천을 위해 knn을 사용한 코드는 py파일에 있습니다.
        
## 
  요리 추천 데이터 베이스는 
