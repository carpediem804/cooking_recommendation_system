<template>
    <nav>
        <ul>
            <li><router-link to="/" exact>Home</router-link></li>
            <li> <router-link to="/ingredient" exact>현민이꺼</router-link></li>
            <li><router-link to="/showBlogs" exact>Blog</router-link></li>
            <li><router-link to="/add" exact>Add a new blog</router-link></li>
            <li>  <router-link to="/signUp" exact>회원가입테스트</router-link></li>
            <li> <router-link to="/addProfile" exact>프로필추가테스트</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {}
</script>

<style scoped>
ul{
    color: white;
    list-style-type: none;
    text-align: center;
    margin: 0;
}
li{
    color: white;
    display: inline-block;
    margin: 0 10px;
}
a{
    color: white;
    text-decoration: none;
    padding: 6px 8px;
    border-radius: 10px;
}
nav{
    background: #444;
    padding: 14px 0;
    margin-bottom: 40px;
}

</style>
