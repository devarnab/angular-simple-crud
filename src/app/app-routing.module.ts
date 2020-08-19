import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserResolver } from './resolver/userResolver';
import { PostsComponent } from './components/posts/posts.component';
import { PostResolver } from './resolver/postResolver';
import { AddEditComponent } from './components/posts/add-edit/add-edit.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    children: [
      {
        path: ':id/posts',
        children: [
          {
            path: 'add',
            component: AddEditComponent,
          },
          {
            path: ':postId/edit',
            component: AddEditComponent,
            resolve: {
              post: PostResolver
            }
          },
          {
            path: '',
            component: PostsComponent,
            resolve: {
              posts: PostResolver,
            },
          },
        ],
      },
      {
        path: '',
        component: HomeComponent,
        resolve: {
          users: UserResolver,
        },
      },
    ],
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
