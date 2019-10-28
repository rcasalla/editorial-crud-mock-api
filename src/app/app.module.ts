
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { EditorialModule } from './editorial/editorial.module';
import { InMemoryEditorialService } from './in-memory-editorial.service';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
         HttpClientInMemoryWebApiModule.forRoot(InMemoryEditorialService, {delay : 100}),
        AppRoutingModule,
        EditorialModule
    ],

    bootstrap: [AppComponent],

    providers: [InMemoryEditorialService]
})
export class AppModule {}