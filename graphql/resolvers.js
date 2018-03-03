const fetch = require('node-fetch')

const resolvers = {
    Query: {
      users: async (_, { id}) => {
        const users =  await fetch(`https://jsonplaceholder.typicode.com/users/${id ? id : ''}`)
        const dataUser = await users.json()
        const posts = await fetch(`https://jsonplaceholder.typicode.com/posts/`)
        const dataPosts = await posts.json()
        const todos = await fetch(`https://jsonplaceholder.typicode.com/todos/`)
        const dataTodos = await todos.json()
        const albums = await fetch(`https://jsonplaceholder.typicode.com/albums/`)
        const dataAlbums = await albums.json()
        const photos = await fetch(`https://jsonplaceholder.typicode.com/photos/`)
        const dataPhotos = await photos.json()

        const postsUser = dataPosts.filter((post)=>{
          if(post.userId==id){ 
            return true
          }else{
            return false
          }
        })

        const albumsUser = dataAlbums.filter((album)=>{
          if(album.userId==id){ 
            return true
          }else{
            return false
          }
        })

        
        let photosOfTheAlbum = null
        let finalAlbumObject = []
        const albumsWithPhotos = albumsUser.map((album)=>{
          photosOfTheAlbum = dataPhotos.filter((photo)=>{
            if(album.id==photo.albumId){
              return true
            }else{
              return false
            }
          })
          return {
            ...album,
            photo: photosOfTheAlbum
          }
        })

        const todosUser = dataTodos.filter((todo)=>{
          if(todo.userId==id){
            return true
          }else{
            return false
          }
        })
  
        const finalUser = {
          ...dataUser,
          post: postsUser,
          todo: todosUser,
          album: albumsWithPhotos
        }
        
        return finalUser
        
      },
      posts: async (_, {id}) => {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id ? id : ''}`)
          return await response.json()
      }
    },
  }

  module.exports = {resolvers}