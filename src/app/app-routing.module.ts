import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PostsComponent } from './components/posts/posts.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PostResolver } from './resolver/postResolver';
import { UserResolver } from './resolver/userResolver';

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
        component: PostsComponent,
        resolve: {
          posts: PostResolver,
        },
      },
      {
        path: '',
        component: DashboardComponent,
        resolve: {
          users: UserResolver,
        },
      },
    ],
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
