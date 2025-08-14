/*class User {
  constructor(name: string, email: string){}

 
    
}

class UserAuthentication{
constructor(user: User){}
      
authenticate(password:string){}
} */


class BlogPost {
  title: string;
  content: string;

  constructor(title: string, content: string) {
    this.title = title;
    this.content = content;
  }

 public management (title: string, content: string){

    this.title = title;
this.content= content;
 console.log(`Post gestionado con éxito: ${this.title}`);
  
 }

  createPost() {
    console.log(`Post creado: ${this.title}`)
  }

  updatePost() {
   console.log(`Post actualizado: ${this.title}`)
  }

  deletePost() {
   console.log(`Post eliminado: ${this.title}`);
    this.title = '';
    this.content = '';
  }
}

class BlogPostDisplay {
  constructor(public blogPost: BlogPost) {}

  // Method related to post display
  displayHTML() {
    return `<h1>${this.blogPost.title}</h1><p>${this.blogPost.content}</p>`;
  }
}


