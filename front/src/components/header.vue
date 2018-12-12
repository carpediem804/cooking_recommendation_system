<template>
    <nav class="tile" style="margin: auto;">
        <ul style="margin: auto">
            <li><router-link to="/" exact>Home</router-link></li>
            <li> <router-link to="/ingredient" exact>메뉴 추천</router-link></li>
            <li><router-link to="/testtest" exact>게시판</router-link></li>
            <div class="navbar-end">

            </div>
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
    background: hotpink;
    padding: 14px 0;
    margin-bottom: 40px;
}

</style>
