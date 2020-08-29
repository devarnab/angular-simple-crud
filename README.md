# Angular Simple C(reate)R(ead)U(pdate)D(elete)

A simple read write operation to show absolute beginners a way to Angular 10.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.6.


## Table of Contents

- [Tech-stack](#tech-stack)
- [Application Description](#application-description)
  - [Home page](#home-page)
  - [Post List Page](#post-list-page)
  - [Page Not found](#page-not-found)
- [Component Structure](#component-structure)


## Tech-stack
- Angular 10.x for frontend 
- [jsonplaceholder](https://jsonplaceholder.typicode.com/) for backend API

## Application Description
The application is to demonstrate a simple CRUD operation maintaining some industry standard procedures.

### Home page
Home page consists of a user list fetched from the **jsonplaceholder** site. I have used this fake online REST API for prototyping purpose. On clicking on the **view post** link on users cards it will go to the post listing page.
Below is a snip from home page.

![Home Page](./snips/homepage.jpg)

### Post List Page
This page is for listing the all posts of a particular user. 
- On hovering or focusing on the post cards the edit (pencil icon) and delete (trash icon) buttons will be visible.

![Post List Page](./snips/postlist.jpg)

- On clicking on add button a modal will appear to take user input to take the user post. On success full add it will show a success message on right top of page.

![Add in Post List Page](./snips/addpost.jpg)

![Add success in Post List Page](./snips/addsuccess.jpg)

- Edit also you will see the edited content will appear in list and a success message after edit

![Post List Page](./snips/editpost.jpg)

- On clicking on the delete button a popup will appear to get the confirmation from user before delete

![Post List Page](./snips/delpost.jpg)

### Page Not Found
- last but not the least it has a 404 not found page

![Post List Page](./snips/notfound.jpg)

<br/><br/>

**NOTE: THE POSTS ARE NOT ACTUALLY GETTING ADDED OR EDITED OR DELETED INTO/FROM SERVER, SO ON REFRESH, YOUR CHANGES WILL BE RESET**

## Component Structure

```
app/
  components
  dashboard/
    users/
      user.component.html
      user.component.ts
    dashboard.component.html
    dashboard.component.ts
  page-not-found/
    page-not-found.component.html
    page-not-found.component.ts
  posts/
    add-edit/
      add-edit.component.html
      add-edit.component.ts
    listing/
      listing.component.html
      listing.component.ts
    posts.component.html
    posts.component.ts
  shared/
    footer/
      footer.component.html
      footer.component.ts
    header/
      header.component.html
      header.component.scss
      header.component.ts
    loader/
      loader.component.html
      loader.component.scss
      loader.component.ts
      loader.service.ts
    messages/
      messages.component.html
      messages.component.scss
      messages.component.ts
      messages.service.ts
    modal/
      modal.component.html
      modal.component.scss
      modal.component.ts
```

