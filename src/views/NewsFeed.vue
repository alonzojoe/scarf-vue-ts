<script lang="ts" setup>
import { ref, Ref } from 'vue';

interface Post {
  id: number;
  title: string;
  body: string;
  timestamp: string;
}


    const posts: Ref<Post[]> = ref([
      {
        id: 1,
        title: 'Post 1',
        body: 'Lorem ipsum dolor sit amet.',
        timestamp: 'July 12, 2023'
      },
      {
        id: 2,
        title: 'Post 2',
        body: 'Consectetur adipiscing elit.',
        timestamp: 'July 10, 2023'
      },
      // Add more posts here
    ]);

    const newPostText: Ref<string> = ref('');

    // Methods
    const createPost = (event: Event): void => {
      event.preventDefault();
      if (newPostText.value) {
        const newPost: Post = {
          id: posts.value.length + 1,
          title: 'New Post',
          body: newPostText.value,
          timestamp: new Date().toLocaleDateString()
        };
        posts.value.unshift(newPost);
        newPostText.value = '';
      }
    };



</script>

<template>
    <div class="container mt-5">
        <div class="row">
          <div class="col-md-8 offset-md-2">
            <!-- Create Post Form -->
            <div class="card mb-3">
              <div class="card-body">
                <form @submit="createPost">
                  <div class="mb-3">
                    <textarea class="form-control" v-model="newPostText" rows="3" placeholder="What's on your mind?"></textarea>
                  </div>
                  <button type="submit" class="btn btn-primary">Post</button>
                </form>
              </div>
            </div>
    
            <div v-for="post in posts" :key="post.id" class="card mb-3">
              <div class="card-body">
                <h5 class="card-title">{{ post.title }}</h5>
                <p class="card-text">{{ post.body }}</p>
                <small class="text-muted">{{ post.timestamp }}</small>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<style scoped>
    .container{
        padding-top: 30px;
    }
</style>