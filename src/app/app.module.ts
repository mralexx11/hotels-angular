import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHotelsComponent } from './app-hotels/app-hotels.component';
import { ListComponent } from './app-hotels/list/list.component';
import { ItemComponent } from './app-hotels/list/item/item.component';
import { WeatherComponent } from './app-hotels/weather/weather.component';
import { ProfileComponent } from './app-hotels/profile/profile.component';
import { FooterComponent } from './app-hotels/footer/footer.component';
import { HeaderComponent } from './app-hotels/header/header.component';
import { HotelFilterPipe } from './pipes/hotel-filter.pipe';
import { FormsModule } from '@angular/forms';
import { HotelsService } from './app-hotels/hotels.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHotelsComponent,
    ListComponent,
    ItemComponent,
    WeatherComponent,
    ProfileComponent,
    FooterComponent,
    HeaderComponent,
    HotelFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HotelsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
