<template>
<div>
    <header class="modal-card-head">
        제목:
    </header>
    <section class="modal-card-body">
        <div class="tile is-ancestor">
            <div class="tile is-vertical is-7">
                <div class="tile">
                    <article class="tile is-child notification is-primary">
                        본문
                    </article>
                </div>
                <div class="tile">
                    <article class="media">
                        <figure class="media-left">
                            <p class="image is-64x64">
                                <img src="https://bulma.io/images/placeholders/128x128.png"><!--유저 이미지 -->
                            </p>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <p>
                                    <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small><!--유저 정보 -->
                                    <br>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.
                                </p>
                            </div>
                            <nav class="level is-mobile">
                                <div class="level-left">
                                    <a class="level-item">
                                        <span class="icon is-small"><i class="fas fa-reply"></i></span>
                                    </a>
                                    <a class="level-item">
                                        <span class="icon is-small"><i class="fas fa-retweet"></i></span>
                                    </a>
                                    <a class="level-item">
                                        <span class="icon is-small"><i class="fas fa-heart"></i></span>
                                    </a>
                                </div>
                            </nav>
                        </div>
                        <div class="media-right">
                            <button class="delete"></button>
                        </div>
                    </article>
                </div>

            </div>
            <div class="tile">
                <article class="tile notification is-warning">
                    댓글
                </article>
            </div>
        </div>
    </section>

    </div>

</template>

<script>

import BField from "buefy/src/components/field/Field";
import BInput from "buefy/src/components/input/Input";
export default{
    name:'showContent',
    components: {BInput, BField},
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
