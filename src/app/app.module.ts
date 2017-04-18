import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { CollectionsComponent } from './collections/collections.component';
import { CollectionsListComponent } from './collections/collections-list/collections-list.component';
import { CollectionComponent } from './collections/collection/collection.component';
import { CollectionDetailComponent } from './collections/collection-detail/collection-detail.component';
import { HeaderComponent } from './layout/header/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { TagsComponent } from './tags/tags.component';
import { CollectionsService } from './shared/services/collections.service';
import { SearchComponent } from './layout/sidebar/search/search.component';
import { NavigationComponent } from './layout/sidebar/navigation/navigation.component';
import { AuthorMetaComponent } from './shared/components/author-meta/author-meta.component';
import { ResourcesComponent } from './resources/resources.component';
import { ResourceComponent } from './resources/resource/resource.component';
import { SocialComponent } from './social/social.component';
import { DragulaModule } from 'ng2-dragula';
import { CollectionNewComponent } from './collections/collection-new/collection-new.component';
import { UsersService } from './shared/services/users.service';

export const firebaseConfig = {
  apiKey: 'AIzaSyCr--61ZmUFqoqN8GozYNZu6jZtbHfKzK0',
  authDomain: 'resourcerer-ccafc.firebaseapp.com',
  databaseURL: 'https://resourcerer-ccafc.firebaseio.com',
  projectId: 'resourcerer-ccafc',
  storageBucket: 'resourcerer-ccafc.appspot.com',
  messagingSenderId: '781885536321'
};

const appRoutes: Routes = [
  { path: '', component: CollectionsComponent },
  { path: 'collections/:id', component: CollectionDetailComponent },
  { path: 'new-collection', component: CollectionNewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    CollectionsComponent,
    CollectionsListComponent,
    CollectionComponent,
    CollectionDetailComponent,
    HeaderComponent,
    SearchComponent,
    NavigationComponent,
    TagsComponent,
    SidebarComponent,
    SearchComponent,
    NavigationComponent,
    AuthorMetaComponent,
    ResourcesComponent,
    ResourceComponent,
    SocialComponent,
    CollectionNewComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule,
    DragulaModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    CollectionsService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
